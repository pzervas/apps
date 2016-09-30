(function(){"use strict";var o,t,e;o=window.angular,window.ut=window.ut||{},window.ut.tools=window.ut.tools||{},window.ut.tools.hypothesis=window.ut.tools.hypothesis||{},e=golab.common.resourceLoader,window.ut.tools.hypothesis.HypothesisApp=o.module("HypothesisApp",["ui.sortable","LocalStorageModule","textAngular","monospaced.elastic","ui.knob","golabUtils"]),window.ut.tools.hypothesis.HypothesisApp.factory("resourceLoader",[function(){return golab.common.resourceLoader}]),window.ut.tools.hypothesis.HypothesisApp.factory("environmentHandlers",function(){return window.ut.tools.hypothesis.environmentHandlers}),window.ut.tools.hypothesis.HypothesisApp.factory("languageHandler",["environmentHandlers",function(o){return o.languageHandler}]),window.ut.tools.hypothesis.HypothesisApp.factory("actionLogger",["environmentHandlers",function(o){var t;return t=o.hypotheses.actionLogger}]),window.ut.tools.hypothesis.HypothesisApp.factory("metadataHandler",["environmentHandlers",function(o){return o.hypotheses.metadataHandler}]),window.ut.tools.hypothesis.HypothesisApp.factory("storageHandler",["environmentHandlers",function(o){var t;return t=o.hypotheses.storageHandler}]),window.ut.tools.hypothesis.HypothesisApp.factory("fileStorage",function(){return new ut.commons.persistency.FileStorage}),window.ut.tools.hypothesis.HypothesisApp.factory("configurationStorageHandler",["environmentHandlers",function(o){return o.configuration.storageHandler}]),window.ut.tools.hypothesis.HypothesisApp.factory("hypothesesModel",["environmentHandlers","configurationModel",function(o,t){var e;return e=new window.ut.tools.hypothesis.HypothesesModel(o,t)}]),window.ut.tools.hypothesis.HypothesisApp.factory("configurationModel",["environmentHandlers",function(o){var t;return t=new window.ut.tools.hypothesis.HypothesisConfigurationModel(o)}]),window.ut.tools.hypothesis.HypothesisApp.config(["$sceDelegateProvider",function(o){return o.resourceUrlWhitelist(["self",e.getBaseUrl()+"/**"])}]),window.ut.tools.hypothesis.HypothesisApp.run(["$rootScope","hypothesesModel","configurationModel","actionLogger","languageHandler","metadataHandler","storageHandler",function(o,t,n,i,s,r,a){return i.logApplicationStarted(),o.hypothesesModel=t,o.configurationModel=n,o.actionLogger=i,o.languageHandler=s,o.metadataHandler=r,o.resourceLoader=e,o.storageHandler=a,o.updateShowConfidenceMeter=function(t){return function(){return o.hypothesesModel.setShowConfidenceMeter(o.configurationModel.confidence)}}(this),o.hypothesesModel.addListener("modelLoaded",o.updateShowConfidenceMeter),o.hypothesesModel.addListener("logApplied",function(t){return function(){return o.$apply()}}(this)),o.applyAlternativeConfiguration=function(o){return o instanceof window.ut.tools.hypothesis.HypothesesModel&&null!=window.golab.tools.configuration.hypothesis&&(console.log("no configuration resource found, but an 'old' js-configuration is present."),n.conditionals.setValues(window.golab.tools.configuration.hypothesis.conditionals.value),n.variables.setValues(window.golab.tools.configuration.hypothesis.variables.value),n.freeInput=!0,null!=window.golab.tools.configuration.hypothesis.checkboxes&&"true"===window.golab.tools.configuration.hypothesis.checkboxes.value?n.checkboxes=!0:n.checkboxes=!1,null!=window.golab.tools.configuration.hypothesis.confidence&&"true"===window.golab.tools.configuration.hypothesis.confidence.value?n.confidence=!0:n.confidence=!1,null!=window.golab.tools.configuration.hypothesis.auto_load&&"true"===window.golab.tools.configuration.hypothesis.auto_load.value&&n.setAutoLoadLatestResource(!0),!0)},o.addEmptyHypothesis=function(t){return function(){var t;return t=o.hypothesesModel.addEmptyHypothesis(),o.updateShowConfidenceMeter(),o.logAddHypothesis(t),setTimeout(function(){return ut.commons.utils.gadgetResize()},100)}}(this),o.dumpHypotheses=function(o){return function(){var o,t,e;return console.log("dumping hypotheses to the console."),console.log(a),o=[],r.getContext()===window.golab.ils.context.graasp?(console.log("... for context 'graasp'"),e={},e.vaultId=r.getMetadata().storageId,e.userId="",e.appId="",e.objectType=r.getMetadata().target.objectType,e.creationDateFrom="",e.creationDateTo="",e.lastModificationDateFrom="",e.lastModificationDateTo="",ils.filterVault(e.vaultId,e.userId,e.appId,e.objectType,e.creationDateFrom,e.creationDateTo,e.lastModificationDateFrom,e.lastModificationDateTo,function(o){var e,n,i,s,r;if(console.log("ils.filterVault returns:"),console.log(o),null!=o.error)return console.log("error:"),console.log(o.error);for(r=[],e=0,i=o.length;e<i;e++)n=o[e],s={},s.metadata=n.metadata,s.content=JSON.parse(n.content),r.push(t(s));return r})):r.getContext()===window.golab.ils.context.standalone?(console.log("... for context 'standalone'"),a.listResourceMetaDatas(function(o,e){var n,i,s,r;for(r=[],n=0,i=e.length;n<i;n++)s=e[n],"hypotheses"===s.metadata.target.objectType?r.push(a.readResource(s.id,function(o,e){if(null==o)return t(e)})):r.push(void 0);return r})):console.log("I'm not prepared to dump the hypotheses for this context, doing nothing."),t=function(o){var t,e,n,i,s,r,a,l,u,c;for(l=o.content,c=[],i=0,r=l.length;i<r;i++){for(n=l[i],e="",u=n.elements,s=0,a=u.length;s<a;s++)t=u[s],e+=t.text,e+=" ";c.push(console.log(", "+o.metadata.published+", "+o.metadata.actor.displayName+", "+e))}return c}}}(this),o.deleteHypothesis=function(t){return function(t){var e,n;return e=o.hypothesesModel.deleteHypothesis(t),n={objectType:"hypothesis",id:e},null!=o.actionLogger&&o.actionLogger.logRemove(n),o.checkEmpty(),setTimeout(function(){return ut.commons.utils.gadgetResize()},100)}}(this),o.checkEmpty=function(t){return function(){if(0===o.hypothesesModel.getResourceContent().length)return o.metadataHandler.setTargetId(ut.commons.utils.generateUUID()),o.addEmptyHypothesis()}}(this),o.addElement=function(t){return function(t,e){var n;return n=o.hypothesesModel.addElement(t,e),o.logChange(n)}}(this),o.deleteElement=function(t){return function(t,e){var n;return n=o.hypothesesModel.deleteElement(t,e),o.logChange(n)}}(this),o.arrangeElements=function(t){return function(t){var e;return e=o.hypothesesModel.getResourceContent()[t],o.logChange(e)}}(this),o.setConfidence=function(t){return function(t,e){var n;return n=o.hypothesesModel.setConfidence(t,e),o.logChange(n)}}(this),o.logChange=function(t){return function(t){var e,n;if(null!=o.actionLogger)return e=JSON.parse(JSON.stringify(t)),null!=e.$$hashKey&&delete e.$$hashKey,n={objectType:"hypothesis",id:e.id,content:e},o.actionLogger.logChange(n)}}(this),o.logAddHypothesis=function(t){return function(t){var e,n;if(null!=o.actionLogger)return e=JSON.parse(JSON.stringify(t)),null!=e.$$hashKey&&delete e.$$hashKey,n={objectType:"hypothesis",id:e.id,content:e},o.actionLogger.logAdd(n)}}(this),o.notificationPremise=function(o){return function(o){return!0}}(this),o.consumeNotification=function(o){return function(o){var t,e;return console.log("HypothesisTool.consumeNotification: received notification: "),console.log(o),e=o.content.text,t=$("<div style='display:none' id='hypothesis_notification' title='Notification'><p>"+e+"</p></div>"),$("#hypothesis_notification").remove(),$("body").append(t),$("#hypothesis_notification").dialog({draggable:!1})}}(this),o.consumeNotification_old=function(t){return function(t){var e;return console.log("HypothesisTool.consumeNotification2: received notification: "),console.log(t),e=t.content.text,console.log(e),o.askQuestion.questionParams={dialogBoxId:"ut_tools_hypothesis_notification_dialog",question:e,questionOkAnswer:function(){return o.dialogBoxes.ut_tools_hypothesis_notification_dialog.close()}},o.dialogBoxes.ut_tools_hypothesis_notification_dialog.show(),setTimeout(function(){return ut.commons.utils.gadgetResize()},100)}}(this),null!=o.notificationClient?(o.notificationClient.register(o.notificationPremise,o.consumeNotification),console.log("HypothesisController: notificationClient found and registered.")):console.log("HypothesisController: notificationClient not found."),setTimeout(function(){return o.checkEmpty()},500)}]),t=function(o,t){},ut.tools.hypothesis.HypothesisApp.controller("HypothesisController",["$scope","configurationModel",t])}).call(this);
//# sourceMappingURL=HypothesisController.js.map
