!function(e,n){"function"==typeof define&&define.amd?define("simple-module",["jquery"],function(t){return e.returnExportsGlobal=n(t)}):"object"==typeof exports?module.exports=n(require("jquery")):e.SimpleModule=n(jQuery)}(this,function(s){var r=[].slice;return function(){function t(t){var i,e,n,r,o,l,c;if(this.opts=s.extend({},this.opts,t),(o=this.constructor)._connectedClasses||(o._connectedClasses=[]),n=function(){var t,e,n,o;for(o=[],t=0,e=(n=this.constructor._connectedClasses).length;t<e;t++)i=n[t],r=i.pluginName.charAt(0).toLowerCase()+i.pluginName.slice(1),i.prototype._connected&&(i.prototype._module=this),o.push(this[r]=new i);return o}.call(this),this._connected)this.opts=s.extend({},this.opts,this._module.opts);else for(this._init(),l=0,c=n.length;l<c;l++)"function"==typeof(e=n[l])._init&&e._init();this.trigger("initialized")}return t.extend=function(t){var e,n,o;if(null!=t&&"object"==typeof t){for(e in t)n=t[e],"included"!==e&&"extended"!==e&&(this[e]=n);return null!=(o=t.extended)?o.call(this):void 0}},t.include=function(t){var e,n,o;if(null!=t&&"object"==typeof t){for(e in t)n=t[e],"included"!==e&&"extended"!==e&&(this.prototype[e]=n);return null!=(o=t.included)?o.call(this):void 0}},t.connect=function(t){if("function"==typeof t){if(!t.pluginName)throw new Error("Module.connect: cannot connect plugin without pluginName");return t.prototype._connected=!0,this._connectedClasses||(this._connectedClasses=[]),this._connectedClasses.push(t),t.pluginName?this[t.pluginName]=t:void 0}},t.prototype.opts={},t.prototype._init=function(){},t.prototype.on=function(){var t,e;return t=1<=arguments.length?r.call(arguments,0):[],(e=s(this)).on.apply(e,t),this},t.prototype.one=function(){var t,e;return t=1<=arguments.length?r.call(arguments,0):[],(e=s(this)).one.apply(e,t),this},t.prototype.off=function(){var t,e;return t=1<=arguments.length?r.call(arguments,0):[],(e=s(this)).off.apply(e,t),this},t.prototype.trigger=function(){var t,e;return t=1<=arguments.length?r.call(arguments,0):[],(e=s(this)).trigger.apply(e,t),this},t.prototype.triggerHandler=function(){var t,e;return t=1<=arguments.length?r.call(arguments,0):[],(e=s(this)).triggerHandler.apply(e,t)},t.prototype._t=function(){var t,e;return t=1<=arguments.length?r.call(arguments,0):[],(e=this.constructor)._t.apply(e,t)},t._t=function(t){var o,e,n,i;return e=t,o=2<=arguments.length?r.call(arguments,1):[],n=(null!=(i=this.i18n[this.locale])?i[e]:void 0)||"",0<o.length?(n=n.replace(/([^%]|^)%(?:(\d+)\$)?s/g,function(t,e,n){return n?e+o[parseInt(n)-1]:e+o.shift()})).replace(/%%s/g,"%s"):n},t.i18n={"zh-CN":{}},t.locale="zh-CN",t}()});