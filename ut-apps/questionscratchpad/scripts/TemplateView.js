(function(){"use strict";window.ut.tools.questioning.QuestioningApp.directive("template",function(){return{restrict:"A",template:'<div\n  class=\'ut_tools_questioning_template\'\n  ng-model="template"\n  draggable helper="clone"\n  objectType="ut_tools_questioning_template"\n  objectId="{{template}}"\n  >{{template}}\n</div>',link:function(t,e,n){return"conditional"===n.type?e.find("div").addClass("ut_tools_questioning_template_question"):e.find("div").addClass("ut_tools_questioning_template_output")}}})}).call(this);
//# sourceMappingURL=TemplateView.js.map
