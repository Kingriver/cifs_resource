/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});


$(function(){

    if(!placeholderSupport()){
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    };
    if($(window).width()>1024){
        $('html').addClass('no_touch')
    }
    if(!IsPC()){$('body').addClass('touch_body')}
    //ie浏览器
    if(isIE()){$('html').addClass('isIe');}
    //判断pad横屏竖屏，刷新页面
    addEventListener('load', function(){
       // orientationChange();
        window.onorientationchange = orientationChange;
    });
    if(!IsPC()){
      if($(window).height()==812){
        $('body').addClass('phoneX')
      }
      if($(window).height()==1366){
        $('body').addClass('h1366')
      }
      if($(window).height()==1024){
        $('body').addClass('h1024')
      }
    }
    if(IsPC()){
        if($('div').hasClass('mScrol')){
          $(".mScrol").mCustomScrollbar({
            theme:"rounded-dots",
            autoHideScrollbar:true
        });  
      }
    }else{
      $(".mScrol").addClass('overY');
    }
      
    // 获取当前url
    var url_location = window.location.pathname;

    var arr = [];

    arr = url_location.split('/');


    if(arr.length > 2){
        if(arr[arr.length - 2] == 'cases'){
            $('body').addClass('setCases')
        }else{
            $('body').addClass('setService')
        }
    }else if(arr.length <= 2){

        var colName = arr[arr.length - 1].split('.');

        if(colName[0] == 'service'){
            $('body').addClass('setService')
        }else if(colName[0] == 'cases'){
            $('body').addClass('setCases')
        }else if(colName[0] == 'cloud'){
            $('body').addClass('setCloud')
        }else if(colName[0] == 'about'){
            $('body').addClass('setAbout')
        }else if(colName[0] == 'careers'){
            $('body').addClass('setCareers')
        }else if(colName[0] == 'contact'){
            $('body').addClass('setContact')
        }

    }
    //弹窗
    // var cookietime = new Date(); 
    // cookietime.setTime(cookietime.getTime() + (10 * 60 * 100000));//coockie保存十分钟 
    // if(!$.cookie('the_cookie')){
    //     setTimeout(function(){
    //         $('.talk_window').show();
    //         $.cookie('the_cookie', 'aaa', { expires:cookietime});
    //     },1000);
    // }
    // $(document).on('click','.talk_window_con .t_w_close,.t_w_btn .a_close,.t_w_btn .menu_ly',function(){
    //     $('.talk_window').hide();
    // })
    var cookietime = new Date(); 
    cookietime.setTime(cookietime.getTime() + (10 * 60 * 10000));
    if($.cookie('the_cookie')==undefined){
        setTimeout(function(){
            $('.talk_window').show();
            $.cookie('the_cookie', 'aaa', { expires:cookietime});
        },10000);
    }
    $(document).on('click','.talk_window_con .t_w_close,.t_w_btn .a_close,.t_w_btn .menu_ly',function(){
        $('.talk_window').hide();
    })
//截止

    // $(document).on('click','.t_w_btn .a_close',toggle_show);
    // function toggle_show(){
    //     $('.talk_window').hide();
    //     setTimeout(function(){
    //         $('.talk_window').show();
    //     },15000);
    // }

// var READYTOPROCESS = false;
// window.onbeforeunload = function closeWindow(e)
// {
//     if (!READYTOPROCESS)
//     {
//         //message to be returned to the popup box.
//         var message = '你确定要关闭吗？',
//             e = e || window.event;
//         if (e)
//             e.returnValue = message; // IE
//         return message; // Safari
//     }
// };

})

function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
function scrollT($Dom){
    if($(window).scrollTop()+$(window).height()>=$Dom.offset().top+200){
        return true;
    }
}
function mainBgResize1($img, width, height, W_b, H_b) {

    var sw = width,
        sh = width / W_b * H_b
    if (sh < height) {
        sh = height;
        sw = height / H_b * W_b
    }

    $img.css({height:sh,width:sw, marginTop: -(sh - height) / 2, marginLeft: -(sw - width) / 2, 'visibility': 'visible' });

}
//判断是否Firefox浏览器
function isFirefox(){
    if (navigator.userAgent.indexOf("Firefox") > -1) 
    return true;
    else
    return false;
}
//判断是否IE浏览器
// alert(isIE())

function isIE() {
    if (!!window.ActiveXObject || "ActiveXObject" in window)
    return true;
    else
    return false;
}

function IsPC() { 
   var userAgentInfo = navigator.userAgent; 
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
   var flag = true; 
   for (var v = 0; v < Agents.length; v++) { 
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; } 
   } 
   return flag; 
}  


var getOSAndBrowser = function () {  
            var os = navigator.platform;  
            var userAgent = navigator.userAgent;  
            var info = "";  
            var tempArray = "";  
            //判断操作系统  
            if (os.indexOf("Win") > -1) {  
                if (userAgent.indexOf("Windows NT 5.0") > -1) {  
                    info += "Win2000";  
                } else if (userAgent.indexOf("Windows NT 5.1") > -1) {  
                    info += "WinXP";  
                } else if (userAgent.indexOf("Windows NT 5.2") > -1) {  
                    info += "Win2003";  
                } else if (userAgent.indexOf("Windows NT 6.0") > -1) {  
                    info += "WindowsVista";  
                } else if (userAgent.indexOf("Windows NT 6.1") > -1 || userAgent.indexOf("Windows 7") > -1) {  
                    info += "Win7";  
                } else if (userAgent.indexOf("Windows NT 6.2") > -1 || userAgent.indexOf("Windows 8") > -1) {  
                    info += "Win8";  
                } else if (userAgent.indexOf("Windows NT 6.3") > -1 || userAgent.indexOf("Windows 8.1") > -1) {  
                    info += "Win8.1";  
                } else if (userAgent.indexOf("Windows NT 10.0") > -1 || userAgent.indexOf("Windows 10") > -1) {  
                    info += "Win10";  
                }  
                else {  
                    info += "Other";  
                }  
            } else if (os.indexOf("Mac") > -1) {  
                info += "Mac";  
            } else if (os.indexOf("X11") > -1) {  
                info += "Unix";  
            } else if (os.indexOf("Linux") > -1) {  
                info += "Linux";  
            } else {  
                info += "Other";  
            }  
            info += "/";  
  
  
            //判断浏览器版本  
            var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器  
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器  
            var isEdge = userAgent.toLowerCase().indexOf("edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
            var isIE11 = (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1);  
  
            if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) {  
                tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent);  
                info += tempArray[1] + tempArray[2];  
            } else if (isIE) {  
  
                var version = "";  
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");  
                reIE.test(userAgent);  
                var fIEVersion = parseFloat(RegExp["$1"]);  
                if (fIEVersion == 7)  
                { version = "IE7"; }  
                else if (fIEVersion == 8)  
                { version = "IE8"; }  
                else if (fIEVersion == 9)  
                { version = "IE9"; }  
                else if (fIEVersion == 10)  
                { version = "IE10"; }  
                else  
                { version = "0" }  
  
                info += version;  
  
            } else if (isEdge) {  
                info += "Edge";  
            } else if (isIE11) {  
                info += "IE11";  
            } else if (/[Cc]hrome\/\d+/.test(userAgent)) {  
                tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent);  
                info += tempArray[1] + tempArray[2];  
            } else if (/[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(userAgent)) {  
                tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(userAgent);  
                info += tempArray[3] + tempArray[1];  
            } else if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent)) {  
                tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent);  
                info += tempArray[1] + tempArray[2];  
            } else {  
                info += "unknown";  
            }  
            if(info=='Win10/Edge'){
                return true
            }else{
                return false
            }
        };  
  
  
        // alert(getOSAndBrowser());  

function orientationChange() {
  switch(window.orientation) {
　　case 0: 
        //alert("肖像模式 0,screen-width: " + screen.width + "; screen-height:" + screen.height);
         window.location.reload();
        break;
　　case -90: 
        //alert("左旋 -90,screen-width: " + screen.width + "; screen-height:" + screen.height);
      window.location.reload();
        break;
　　case 90:   
       // alert("右旋 90,screen-width: " + screen.width + "; screen-height:" + screen.height);
      window.location.reload();
        break;
　　case 180:   
    　　//alert("风景模式 180,screen-width: " + screen.width + "; screen-height:" + screen.height);
    window.location.reload();
    　　break;
  }
};