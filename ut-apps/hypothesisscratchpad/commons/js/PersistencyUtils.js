(function(){"use strict";var e,t;window.ut||(window.ut={}),(e=window.ut).commons||(e.commons={}),(t=window.ut.commons).persistency||(t.persistency={}),window.ut.commons.persistency.FileStorage=function(){function e(){}return e.prototype.storeAsFile=function(e,t){var o,n;return o=new Blob([JSON.stringify(e)],{type:"text/json"}),navigator.appName.indexOf("Internet Explorer")!==-1?window.navigator.msSaveBlob(o,t):(n=document.createElement("a"),n.download=t,window.URL=window.URL||window.webkitURL,n.href=window.URL.createObjectURL(o),document.body.appendChild(n),n.click(),document.body.removeChild(n))},e.prototype.getFileFromDialog=function(e){var t;return t=document.createElement("input"),t.type="file",t.addEventListener("change",function(){var t;return t=this.files[0],t?e(void 0,t):e("ut.commons.persistency.FileStorage: no file selected.",void 0)}),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},e.prototype.getJSonObjectFromDialog=function(e){return this.getFileFromDialog(function(t,o){var n,r;if(t)return e(t,void 0);try{return r=new FileReader,r.onload=function(t){var o,n;try{return n=JSON.parse(t.target.result),e(void 0,n)}catch(t){return o=t,e("ut.commons.persistency: could not parse json.",void 0)}},r.readAsText(o)}catch(t){return n=t,e("ut.commons.persistency: could not read.",void 0)}})},e.prototype.getTextFromDialog=function(e){return this.getFileFromDialog(function(t,o){var n,r;if(t)return e(t,void 0,void 0);try{return r=new FileReader,r.onload=function(t){return console.log("read text from"),console.log(o),e(void 0,o,t.target.result)},r.readAsText(o)}catch(t){return n=t,e("ut.commons.persistency: could not read.",void 0)}})},e}()}).call(this);
//# sourceMappingURL=PersistencyUtils.js.map
