(function(){window.ut.tools.hypothesis.HypothesisApp.directive("templatesbar",function(){return{restrict:"A",template:'<table width="100%" droppable>\n    <tr class="toolAreaContainer">\n        <td ng-show="configurationModel.freeInput" class="ut_tools_hypothesis_free_template">\n            <div freeinput></div>\n        </td>\n        <td >\n            <div template ng-repeat="template in configurationModel.conditionals.getValues() track by $index" type="conditional"></div>\n            <div template ng-repeat="template in configurationModel.variables.getValues() track by $index" type="variable"></div>\n        </td>\n    </tr>\n</table>',link:function(e,t,n){return console.log("---------------------------------------"),console.log(e),e.acceptObjectDrop=function(e,t){return!0},e.objectDroppedInside=function(e,t){return console.log("dropped:"),console.log(e),console.log(t)}}}})}).call(this);
//# sourceMappingURL=TemplatesBarView.js.map
