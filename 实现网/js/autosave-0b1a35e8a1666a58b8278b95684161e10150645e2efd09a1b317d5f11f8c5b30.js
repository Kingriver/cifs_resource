!function(r,i){"function"==typeof define&&define.amd?define("simditor-autosave",["jquery","simple-module","simditor"],function(t,e,o){return r.SimditorAutosave=i(t,e,o)}):"object"==typeof exports?module.exports=i(require("jquery"),require("simple-module"),require("simditor")):r.SimditorAutosave=i(jQuery,SimpleModule,Simditor)}(this,function(s,e,t){var o,r=function(t,e){function o(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},i={}.hasOwnProperty;return o=function(){function t(){return t.__super__.constructor.apply(this,arguments)}return r(t,e),t.pluginName="Autosave",t.prototype.opts={name:"simditor",path:null},t.prototype._init=function(){var t,e,o,r,i;if((this.editor=this._module,this.opts.path?this.path=this.opts.path:(t=s("<a/>",{href:location.href}),e=this.editor.textarea.data("autosave")||this.opts.name,this.path="/"+t[0].pathname.replace(/\/$/g,"").replace(/^\//g,"")+"/autosave/"+e+"/"),this.path)&&(this.editor.on("valuechanged",(r=this,function(){return r.storage.set(r.path,r.editor.getValue())})),this.editor.el.closest("form").on("ajax:success.simditor-"+this.editor.id,(i=this,function(){return i.storage.remove(i.path)})),(o=this.storage.get(this.path))&&o!==this.editor.textarea.val()))return this.editor.textarea.is("[data-autosave-confirm]")?confirm(this.editor.textarea.data("autosave-confirm")||"Are you sure to restore unsaved changes?")?this.editor.setValue(o):this.storage.remove(this.path):this.editor.setValue(o)},t.prototype.storage={supported:function(){try{return localStorage.setItem("_storageSupported","yes"),localStorage.removeItem("_storageSupported"),!0}catch(t){return t,!1}},set:function(t,e,o){if(null==o&&(o=!1),this.supported())return(o?sessionStorage:localStorage).setItem(t,e)},get:function(t,e){if(null==e&&(e=!1),this.supported())return(e?sessionStorage:localStorage)[t]},remove:function(t,e){if(null==e&&(e=!1),this.supported())return(e?sessionStorage:localStorage).removeItem(t)}},t}(),t.connect(o),o});