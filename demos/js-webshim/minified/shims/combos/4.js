webshims.register("dom-extend",function(e,t,r,n,a){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var i=function(){if(!r.jQuery||r.$&&r.jQuery!=r.$||r.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly.."),r.$&&(r.$=t.$),r.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};i(),setTimeout(i,90),t.ready("DOM",i),e(i),t.ready("WINDOWLOAD",i)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},d={},p={},f=e.fn.val,h=function(t,r,n,a,i){return i?f.call(e(t)):f.call(e(t),n)};e.widget||function(){var t=e.cleanData;e.cleanData=function(r){if(!e.widget)for(var n,a=0;null!=(n=r[a]);a++)try{e(n).triggerHandler("remove")}catch(i){}t(r)}}(),e.fn.val=function(t){var r=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return r&&1===r.nodeType?e.prop(r,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var n=e.isFunction(t);return this.each(function(i){if(r=this,1===r.nodeType)if(n){var o=t.call(r,i,e.prop(r,"value",a,"val",!0));null==o&&(o=""),e.prop(r,"value",o,"val")}else e.prop(r,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,r,a,i){return i||(i=n),e(i)[a?"onTrigger":"on"](t,r),this.on("remove",function(n){n.originalEvent||e(i).off(t,r)}),this};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,r,n){if(t=t.jquery?t[0]:t,!t)return n||{};var i=e.data(t,m);return n!==a&&(i||(i=e.data(t,m,{})),r&&(i[r]=n)),r?i&&i[r]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var r=[];return this.each(function(){var n=v(this,"shadowData"),a=n&&n[t.prop]||this;-1==e.inArray(a,r)&&r.push(a)}),this.pushStack(r)}}),e.Tween.propHooks._default&&e.css&&function(){var r=!1;try{r="10px"==e.css(e('<b style="width: 10px" />')[0],"width","")}catch(n){t.error(n)}var a=r?function(t,r){return e.css(t,r,!1,"")}:function(t,r){return e.css(t,r,"")};e.extend(e.Tween.propHooks._default,{get:function(t){var r;return null==t.elem[t.prop]&&!u[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(r=a(t.elem,t.prop),r&&"auto"!==r?r:0):u[t.prop]?e.prop(t.elem,t.prop):t.elem[t.prop]},set:function(t){jQuery.fx.step[t.prop]?jQuery.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[jQuery.cssProps[t.prop]]||jQuery.cssHooks[t.prop])?jQuery.style(t.elem,t.prop,t.now+t.unit):u[t.prop]?e.prop(t.elem,t.prop,t.now):t.elem[t.prop]=t.now}})}(),["removeAttr","prop","attr"].forEach(function(r){l[r]=e[r],e[r]=function(t,n,i,o,s){var d="val"==o,f=d?h:l[r];if(!t||!u[n]||1!==t.nodeType||!d&&o&&"attr"==r&&e.attrFn[n])return f(t,n,i,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=r||i!==!1&&null!==i?r:"removeAttr";if(b||(b=c["*"]),b&&(b=b[n]),b&&(m=b[w]),m){if("value"==n&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(i===a)return m.get?m.get.call(t):m.value;m.set&&("attr"==r&&i===!0&&(i=n),g=m.set.call(t,i)),"value"==n&&(m.isVal=v)}else g=f(t,n,i,o,s);if((i!==a||"removeAttr"===w)&&p[y]&&p[y][n]){var T;T="removeAttr"==w?!1:"prop"==w?!!i:!0,p[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==r)||"attr"==e.only&&"prop"!=r)&&e.call(t,i,T,d?"val":w,r)})}return g},d[r]=function(e,n,i){c[e]||(c[e]={}),c[e][n]||(c[e][n]={});var o=c[e][n][r],s=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==r&&"value"==n?function(e){var t=this;return i.isVal?h(t,n,e,!1,0===arguments.length):l[r](t,n,e)}:"prop"==r&&"value"==e&&i.value.apply?function(){var e=l[r](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[r](this,n,e)}};c[e][n][r]=i,i.value===a&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(n.createElement("foobar")),r=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(i,o,s){var l,u;if(!(a&&(l=n.createElement(i))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&r.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(i,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var r={};t.addReady(function(n,i){var o={},s=function(t){o[t]||(o[t]=e(n.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(o[t]=o[t].add(i)))};e.each(r,function(e,r){return s(e),r&&r.forEach?(r.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+r),a)}),o=null});var i,o=e([]),s=function(t,a){r[t]?r[t].push(a):r[t]=[a],e.isDOMReady&&(i||e(n.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(n.getElementsByTagName(t))),i||o},flushTmpCache:function(){i=null},content:function(t,r){s(t,function(){var t=e.attr(this,r);null!=t&&e.attr(this,r,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,r,n){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[r]=this[r],this[r]=n})})}}}(),b=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(r){r=e(r);var n=r.prop("id");return n||(t++,n="ID-"+t,r.eq(0).prop("id",n)),n}}(),implement:function(e,r){var n=v(e,"implemented")||v(e,"implemented",{});return n[r]?(t.warn(r+" already implemented for element #"+e.id),!1):(n[r]=!0,!0)},extendUNDEFProp:function(t,r){e.each(r,function(e,r){e in t||(t[e]=r)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,r,n){var a,i=(e._data(t,"events")||{})[r];i&&i.length>1&&(a=i.pop(),n||(n="bind"),"bind"==n&&i.delegateCount?i.splice(i.delegateCount,0,a):i.unshift(a)),t=null},addShadowDom:function(){var a,i,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(r).width(),l=e(r).width();if(l==i&&a==o)return;i=l,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(n).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var r=n.body,a=n.documentElement;s[t]=function(){return Math.max(r["scroll"+e],a["scroll"+e],r["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(r).bind("resize",this.handler),function(){var t,r=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),r.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(r,n,a){if(r&&n){a=a||{},r.jquery&&(r=r[0]),n.jquery&&(n=n[0]);var i=e.data(r,m)||e.data(r,m,{}),o=e.data(n,m)||e.data(n,m,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,m)||e.data(a.shadowFocusElement,m,s)):a.shadowFocusElement=n,e(r).on("remove",function(t){t.originalEvent||e(n).remove()}),i.hasShadow=n,s.nativeElement=o.nativeElement=r,s.shadowData=o.shadowData=i.shadowData={nativeElement:r,shadowElement:n,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=a.data),a=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(r,n){b(r),r.prop||(r.prop={set:function(e){r.attr.set.call(this,e)},get:function(){var r,a=this.getAttribute(n);if(null==a)return"";if(t.setAttribute("href",a+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),r=t.getAttribute("href",4)}catch(i){r=t.getAttribute("href",4)}e(t).detach()}return r||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(r,n){"string"==typeof n&&(n=n.split(s)),n.forEach(function(n){t.defineNodeNamesProperty(r,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(r,n,a){return u[n]=!0,a.reflect&&t.propTypes[a.propType||"standard"](a,n),["prop","attr","removeAttr"].forEach(function(i){var o=a[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[i](r,n,o),"*"!=r&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&g(r,n,o),a[i]=o)}),a.initAttr&&y.content(r,n),a},defineNodeNameProperties:function(e,r,n,a){for(var i in r)!a&&r[i].initAttr&&y.createTmpCache(e),n&&(r[i][n]||(r[i][n]={},["value","set","get"].forEach(function(e){e in r[i]&&(r[i][n][e]=r[i][e],delete r[i][e])}))),r[i]=t.defineNodeNameProperty(e,i,r[i]);return a||y.flushTmpCache(),r},createElement:function(r,n,a){var i;return e.isFunction(n)&&(n={after:n}),y.createTmpCache(r),n.before&&y.createElement(r,n.before),a&&(i=t.defineNodeNameProperties(r,a,!1,!0)),n.after&&y.createElement(r,n.after),y.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,r,n,a){"string"==typeof t&&(t=t.split(s)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof r&&(r=r.split(s)),n.initAttr&&y.createTmpCache(e),r.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),n.set&&(a&&(n.set.only=a),p[e][t].push(n.set)),n.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(r,n,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(r,n,{attr:{set:function(e){this.setAttribute(n,e),i.set&&i.set.call(this,!0)},get:function(){var e=this.getAttribute(n);return null==e?a:n}},removeAttr:{value:function(){this.removeAttribute(n),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,r){if(e.nodeName){var n;return r===a?(n=e.attributes[t]||{},r=n.specified?n.value:null,null==r?a:r):("boolean"==typeof r?r?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,r),a)}},activeLang:function(){var r,n,a=[],i={},s=/:\/\/|^\.*\//,l=function(r,n,a){var i;return n&&a&&-1!==e.inArray(n,a.availabeLangs||[])?(r.loading=!0,i=a.langSrc,s.test(i)||(i=t.cfg.basePath+i),t.loader.loadScript(i+n+".js",function(){r.langObj[n]?(r.loading=!1,c(r,!0)):e(function(){r.langObj[n]&&c(r,!0),r.loading=!1})}),!0):!1},u=function(e){i[e]&&i[e].forEach(function(e){e.callback(r,n,"")})},c=function(e,t){if(e.activeLang!=r&&e.activeLang!==n){var a=o[e.module].options;e.langObj[r]||n&&e.langObj[n]?(e.activeLang=r,e.callback(e.langObj[r]||e.langObj[n],r),u(e.module)):t||l(e,r,a)||l(e,n,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],r),u(e.module))}},d=function(t){return"string"==typeof t&&t!==r?(r=t,n=r.split("-")[0],r==n&&(n=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(i[t.register]||(i[t.register]=[]),i[t.register].push(t),t.callback(r,n,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),r};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,r){t[e]=function(e,n,a,i){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[r](e,n,a,i)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var r={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(e,t){var r=e.getAttribute("role");r||e.setAttribute("role",t)};e.webshims.addReady(function(a,i){if(e.each(r,function(t,r){for(var o=e(t,a).add(i.filter(t)),s=0,l=o.length;l>s;s++)n(o[s],r)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&n(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||n(u,"contentinfo")}})}}(jQuery,document),webshims.register("form-message",function(e,t,r,n,a,i){"use strict";i.overrideMessages&&(i.customMessages=!0,t.error("overrideMessages is deprecated. use customMessages instead."));var o=t.validityMessages,s=i.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]||(o["en-US"]=e.extend(!0,{},o.en)),o["en-GB"]||(o["en-GB"]=e.extend(!0,{},o.en)),o["en-AU"]||(o["en-AU"]=e.extend(!0,{},o.en)),o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zulässig.",email:"{%value} ist keine gültige E-Mail-Adresse.",url:"{%value} ist kein(e) gültige(r) Webadresse/Pfad.",number:"{%value} ist keine Nummer.",date:"{%value} ist kein Datum.",time:"{%value} ist keine Uhrzeit.",month:"{%value} ist in diesem Feld nicht zulässig.",range:"{%value} ist keine Nummer.","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen können."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen können."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zulässig. Hier sind nur bestimmte Werte zulässig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat für dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das Kästchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte wählen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu früh. {%min} ist die früheste Zeit, die Sie benutzen können."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu spät. {%max} ist die späteste Zeit, die Sie benutzen können."});var l=o[""],u=function(t,r){return t&&"string"!=typeof t&&(t=t[e.prop(r,"type")]||t[(r.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},c={value:1,min:1,max:1};t.createValidationMessage=function(r,n){var a,i=u(l[n],r),s=e.prop(r,"type");return i||(i=u(o[""][n],r)||e.prop(r,"validationMessage"),t.info("could not find errormessage for: "+n+" / "+s+". in language: "+e.webshims.activeLang())),i&&["value","min","max","title","maxlength","label"].forEach(function(o){if(-1!==i.indexOf("{%"+o)){var l=("label"==o?e.trim(e('label[for="'+r.id+'"]',r.form).text()).replace(/\*$|:$/,""):e.prop(r,o))||"";"patternMismatch"!=n||"title"!=o||l||t.error("no title for patternMismatch provided. Always add a title attribute."),c[o]&&(a||(a=e(r).getShadowElement().data("wsWidget"+s)),a&&a.formatValue&&(l=a.formatValue(l,!1))),i=i.replace("{%"+o+"}",l),"value"==o&&(i=i.replace("{%valueLen}",l.length))}}),i||""},(!Modernizr.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){l=e}}),t.activeLang({register:"form-core",callback:function(){e.each(o,function(e,t){return o[t]?(l=o[t],!1):a})}}),s.forEach(function(r){t.defineNodeNamesProperty(["fieldset","output","button"],r,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(n){var i=t.defineNodeNameProperty(n,r,{prop:{get:function(){var r=this,n="";if(!e.prop(r,"willValidate"))return n;var o=e.prop(r,"validity")||{valid:1};return o.valid?n:(n=t.getContentValidationMessage(r,o))?n:o.customError&&r.nodeName&&(n=Modernizr.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(r):t.data(r,"customvalidationMessage"))?n:(e.each(o,function(e,i){return"valid"!=e&&i?(n=t.createValidationMessage(r,e),n?!1:a):a}),n||"")},writeable:!1}})})})});