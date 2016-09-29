(function run(starterApp) {

    var TOOL_NAME = 'Group Formation App';
    var DOCUMENT_TYPE = 'post';
    var FALLBACK_LANGUAGE = 'en';

    var errorDisplay;
    var loadingIndicator ;
    var handleStartupError;

    try {
        setUpComponents();
        loadingIndicator.show();

        golab.common.createEnvironmentHandlers(DOCUMENT_TYPE, TOOL_NAME, FALLBACK_LANGUAGE,
        function() {
            var envHandlers = {
                metadataHandler:    arguments[0],
                storageHandler:     arguments[1],
                actionLogger:       arguments[2],
                languageHandler:    arguments[3],
                notificationClient: arguments[4]
            };

            try {
                envHandlers.configHandler = starterApp.ConfigHandler(
                    TOOL_NAME,
                    golab.tools.configurationDefinition.starterApp,
                    golab.tools.configuration.starterApp
                );
                errorDisplay.setLanguageHandler(envHandlers.languageHandler);

                envHandlers.configHandler.loadConfig(function(error) {
                    if (error)
                        return handleStartupError(error);
                    startMainAppRoutine();
                });

            } catch(error) {
                handleStartupError(error);
            }

            function startMainAppRoutine(){
                try {
                    starterApp.Application(
                        envHandlers, loadingIndicator, errorDisplay
                    );
                } catch(err) {
                    return handleStartupError(err);
                }
            }
        });
    } catch(error) {
        console.error(error);
        document.getElementsByTagName('body')[0].innerHTML =
            'An error occured while starting the application.';
    }

    function setUpComponents() {
        errorDisplay = ErrorDisplay($('#error'), $('#error .alert .message'));
        loadingIndicator = LoadingIndicator($('#loading_indicator'));
        handleStartupError = getErrorHandler(errorDisplay, loadingIndicator);
    }

    function getErrorHandler(errorDisplay, loadingIndicator) {
        return function(error) {
            console.error(error.stack);
            errorDisplay.show('An error occured while starting the application.');
            loadingIndicator.hide();
        };
    }

    function LoadingIndicator(container) {
        var $container = $(container);
        return {
            show: function() {
                $container.show();
            },
            hide: function() {
                $container.hide();
            },
        };
    }

    function ErrorDisplay(container, messageElement, languageHandler) {
        container = $(container);
        messageElement = messageElement ? $(messageElement) : container;

        var closeBtn = container.find('button');
        setCloseBtnBehaviour();

        if (languageHandler) {
            setAriaLabel();
        }

        return {
            hide: hide,
            show: function(message) {
                if (message) {
                    messageElement.text(message);
                }
                console.log(message);
                container.show();
            },
            setLanguageHandler: function(l) {
                languageHandler = l;
                setAriaLabel(languageHandler);
            }
        };

        function hide() {
            container.hide();
        }

        function setAriaLabel(languageHandler) {
            closeBtn
            .attr('aria-label', languageHandler.getMessage('close_alert'));
        }

        function setCloseBtnBehaviour() {
            closeBtn.on('click', function() {
                hide();
            });
        }
    }

})(golab.tools.starterApp);
