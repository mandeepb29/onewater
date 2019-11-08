/**
 * jQuery-stickit]{link https://github.com/emn178/jquery-stickit}
 *
 * version 0.2.14
 * author Chen, Yi-Cyuan [emn178@gmail.com]
 * copyright Chen, Yi-Cyuan 2014-2017
 * license MIT
 */

(function(c){function e(a,b){this.element=c(a);this.lastValues={};c.isArray(b)||(b=[b||{}]);b.length||b.push({});this.optionList=b;var d=this.element.css("transform")||"";this.defaultZIndex=this.element.css("z-index")||100;"auto"==this.defaultZIndex?this.defaultZIndex=100:"0"==this.defaultZIndex&&"none"!=d&&(this.defaultZIndex=100);this.updateOptions();this.lastY=this.offsetY=0;this.stick=f.None;this.spacer=c("<div />");this.spacer[0].id=a.id;this.spacer[0].className=a.className;this.spacer[0].style.cssText=
a.style.cssText;this.spacer.addClass("jquery-stickit-spacer");this.spacer[0].style.cssText+=";visibility: hidden !important;display: none !important";this.spacer.insertAfter(this.element);"static"==this.element.parent().css("position")&&this.element.parent().css("position","relative");this.origWillChange=this.element.css("will-change");"auto"==this.origWillChange&&this.element.css("will-change","transform");"none"==d?this.element.css("transform","translateZ(0)"):-1==d.indexOf("matrix3d")&&this.element.css("transform",
this.element.css("transform")+" translateZ(0)");this.bound();this.precalculate();this.store()}function m(){n=window.innerHeight||document.documentElement.clientHeight;k=window.innerWidth||document.documentElement.clientWidth;l()}function l(){g=!0;c(":jquery-stickit").each(function(){c(this).data("jquery-stickit").refresh()});setTimeout(function(){g=!1})}function p(){g=!0;c(":jquery-stickit").each(function(){c(this).data("jquery-stickit").locate()});setTimeout(function(){g=!1})}function u(){var a=
!!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement);c(":jquery-stickit").each(function(){c(this).data("jquery-stickit").enableWillChange(!a)})}function v(a){g||l()}var q=-1!=navigator.userAgent.indexOf("MSIE 7.0"),r=q?-2:0,w=void 0!==window.MutationObserver,h=window.StickScope={Parent:0,Document:1},f={None:0,Fixed:1,Absolute:2},t=!1,g=!1;c.expr[":"]["jquery-stickit"]=function(a){return!!c(a).data("jquery-stickit")};e.prototype.trigger=
function(a){var b="on"+a.charAt(0).toUpperCase()+a.slice(1);this.options[b]&&this.options[b].call(this.element);this.element.trigger("stickit:"+a)};e.prototype.isActive=function(a){return(void 0===a.screenMinWidth||k>=a.screenMinWidth)&&(void 0===a.screenMaxWidth||k<=a.screenMaxWidth)};e.prototype.updateCss=function(a){this.element.hasClass(this.options.className)&&a.className!=this.options.className&&this.element.removeClass(this.options.className).addClass(a.className);var b={};this.stick==f.Absolute?
this.options.extraHeight!=a.extraHeight&&(b.bottom=-this.options.extraHeight+"px"):this.options.top!=a.top&&(b.top=a.top+this.offsetY+"px");this.options.zIndex!=a.zIndex&&(b.zIndex=this.getZIndex(a));this.element.css(b)};e.prototype.updateOptions=function(){var a=this.getActiveOptionsKey();if(this.activeKey!=a){this.activeKey=a;var b=this.getActiveOptions();this.options&&(a?this.stick!=f.None&&(b.scope==this.options.scope?this.updateCss(b):(this.reset(),setTimeout(this.locate.bind(this)))):this.reset());
this.options=b;this.zIndex=this.getZIndex(b)}};e.prototype.getZIndex=function(a){return void 0===a.zIndex?this.defaultZIndex:a.zIndex};e.prototype.getActiveOptionsKey=function(){for(var a=[],b=0;b<this.optionList.length;++b)this.isActive(this.optionList[b])&&a.push(b);return a.join("_")};e.prototype.getActiveOptions=function(){for(var a={},b=0;b<this.optionList.length;++b){var d=this.optionList[b];this.isActive(d)&&c.extend(a,d)}a.scope=a.scope||h.Parent;a.className=a.className||"stick";a.top=a.top||
0;a.extraHeight=a.extraHeight||0;void 0===a.overflowScrolling&&(a.overflowScrolling=!0);return a};e.prototype.store=function(){var a=this.element[0];this.origStyle={width:a.style.width,position:a.style.position,left:a.style.left,top:a.style.top,bottom:a.style.bottom,zIndex:a.style.zIndex}};e.prototype.restore=function(){this.element.css(this.origStyle)};e.prototype.bound=function(){var a=this.element;if(q||"border-box"!=a.css("box-sizing"))this.extraWidth=0;else{var b=parseFloat(a.css("border-left-width"))||
0,d=parseFloat(a.css("border-right-width"))||0,c=parseFloat(a.css("padding-left"))||0,e=parseFloat(a.css("padding-right"))||0;this.extraWidth=b+d+c+e}this.margin={top:parseFloat(a.css("margin-top"))||0,bottom:parseFloat(a.css("margin-bottom"))||0,left:parseFloat(a.css("margin-left"))||0,right:parseFloat(a.css("margin-right"))||0};this.parent={border:{bottom:parseFloat(a.parent().css("border-bottom-width"))||0}}};e.prototype.precalculate=function(){this.baseTop=this.margin.top+this.options.top;this.basePadding=
this.baseTop+this.margin.bottom;this.baseParentOffset=this.options.extraHeight-this.parent.border.bottom;this.offsetHeight=this.options.overflowScrolling?Math.max(this.element.outerHeight(!1)+this.basePadding-n,0):0;this.minOffsetHeight=-this.offsetHeight};e.prototype.reset=function(){this.stick==f.Absolute?(this.trigger("unend"),this.trigger("unstick")):this.stick==f.Fixed&&this.trigger("unstick");this.stick=f.None;this.spacer.css("width",this.origStyle.width);this.spacer[0].style.cssText+=";display: none !important";
this.restore();this.element.removeClass(this.options.className)};e.prototype.setAbsolute=function(a){this.stick==f.None&&(this.element.addClass(this.options.className),this.trigger("stick"));this.trigger("end");this.stick=f.Absolute;this.element.css({width:this.element.width()+this.extraWidth+"px",position:"absolute",top:this.origStyle.top,left:a+"px",bottom:-this.options.extraHeight+"px","z-index":this.zIndex})};e.prototype.setFixed=function(a,b,d){this.stick==f.None?(this.element.addClass(this.options.className),
this.trigger("stick")):this.trigger("unend");this.options.overflowScrolling||(d=0);this.stick=f.Fixed;this.lastY=b;this.offsetY=d;this.element.css({width:this.element.width()+this.extraWidth+"px",position:"fixed",top:this.options.top+d+"px",left:a+"px",bottom:this.origStyle.bottom,"z-index":this.zIndex})};e.prototype.updateScroll=function(a){if(0!=this.offsetHeight&&this.options.overflowScrolling){var b=Math.max(this.offsetY+a-this.lastY,this.minOffsetHeight);b=Math.min(b,0);this.lastY=a;this.offsetY!=
b&&(this.offsetY=b,this.element.css("top",this.options.top+this.offsetY+"px"))}};e.prototype.isHeigher=function(){return this.options.scope==h.Parent&&this.element.parent().height()<=this.element.outerHeight(!1)+this.margin.bottom};e.prototype.locate=function(){if(this.activeKey){var a=this.element,b=this.spacer;switch(this.stick){case f.Fixed:var d=b[0].getBoundingClientRect();var c=d.top-this.baseTop;0<=c||this.isHeigher()?this.reset():this.options.scope==h.Parent?(d=a.parent()[0].getBoundingClientRect(),
d.bottom+this.baseParentOffset+this.offsetHeight<=a.outerHeight(!1)+this.basePadding?this.setAbsolute(this.spacer.position().left):this.updateScroll(d.bottom)):this.updateScroll(d.bottom);break;case f.Absolute:d=b[0].getBoundingClientRect();c=d.top-this.baseTop;var e=d.left-this.margin.left;0<=c||this.isHeigher()?this.reset():(d=a.parent()[0].getBoundingClientRect(),d.bottom+this.baseParentOffset+this.offsetHeight>a.outerHeight(!1)+this.basePadding&&this.setFixed(e+r,d.bottom,-this.offsetHeight));
break;default:d=a[0].getBoundingClientRect(),c=d.top-this.baseTop,0<=c||this.isHeigher()||(c=a.parent()[0].getBoundingClientRect(),b.height(a.height()),b.show(),e=d.left-this.margin.left,this.options.scope==h.Document?this.setFixed(e,d.bottom,0):c.bottom+this.baseParentOffset+this.offsetHeight<=a.outerHeight(!1)+this.basePadding?this.setAbsolute(this.element.position().left):this.setFixed(e+r,d.bottom,0),b.width()||b.width(a.width()))}}};e.prototype.refresh=function(){this.updateOptions();this.bound();
this.precalculate();if(this.stick!=f.None){var a=this.element,b=this.spacer;this.lastValues.width!=b.width()&&a.width(this.lastValues.width=b.width());this.lastValues.height!=a.height()&&b.height(this.lastValues.height=a.height());this.stick==f.Fixed&&(b=this.spacer[0].getBoundingClientRect().left-this.margin.left,this.lastValues.left!=b+"px"&&a.css("left",this.lastValues.left=b+"px"))}this.locate()};e.prototype.destroy=function(){this.reset();this.spacer.remove();this.element.removeData("jquery-stickit")};
e.prototype.enableWillChange=function(a){"auto"==this.origWillChange&&this.element.css("will-change",a?"transform":this.origWillChange)};var n,k,x=["destroy","refresh"];c.fn.stickit=function(a,b){if("string"==typeof a){if(-1!=c.inArray(a,x)){var d=arguments;this.each(function(){var b=c(this).data("jquery-stickit");b&&b[a].apply(b,Array.prototype.slice.call(d,1))})}}else t||(t=!0,m(),c(document).ready(function(){c(window).bind("resize",m).bind("scroll",p);c(document.body).bind("animationend webkitAnimationEnd oAnimationEnd transitionend webkitTransitionEnd oTransitionEnd",
p);c(document).bind("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",u)}),w&&(new MutationObserver(v)).observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),b=c.isArray(a)?a:Array.prototype.slice.call(arguments,0),this.each(function(){var a=new e(this,b);c(this).data("jquery-stickit",a);a.locate()});return this};c.stickit={refresh:l}})(jQuery);