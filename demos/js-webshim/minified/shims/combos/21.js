jQuery.webshims.register("form-message",function(a,b,m,h,k,d){var c=b.validityMessages,m=d.overrideMessages||d.customMessages?["customValidationMessage"]:[];c.en=c.en||c["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){c.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){c.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){c.en.rangeOverflow[a]=
"Value must be at or before {%max}."});c["en-US"]=c["en-US"]||c.en;c[""]=c[""]||c["en-US"];c.de=c.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){c.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){c.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){c.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var e=
c[""];b.createValidationMessage=function(b,c){var d=e[c];d&&"string"!==typeof d&&(d=d[a.prop(b,"type")]||d[(b.nodeName||"").toLowerCase()]||d.defaultMessage);d&&"value,min,max,title,maxlength,label".split(",").forEach(function(c){if(-1!==d.indexOf("{%"+c)){var e=("label"==c?a.trim(a('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):a.attr(b,c))||"";d=d.replace("{%"+c+"}",e);"value"==c&&(d=d.replace("{%valueLen}",e.length))}});return d||""};(b.bugs.validationMessage||!Modernizr.formvalidation)&&
m.push("validationMessage");b.activeLang({langObj:c,module:"form-core",callback:function(a){e=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var d=a("select",this);if(d[0]&&d[0].options&&d[0].options.length)b=d[0].options}return b}}});m.forEach(function(d){b.defineNodeNamesProperty(["fieldset","output","button"],
d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(c){var e=b.defineNodeNameProperty(c,d,{prop:{get:function(){var d=this,c="";if(!a.prop(d,"willValidate"))return c;var h=a.prop(d,"validity")||{valid:1};if(h.valid||(c=b.getContentValidationMessage(d,h)))return c;if(h.customError&&d.nodeName&&(c=Modernizr.formvalidation&&e.prop._supget?e.prop._supget.call(d):b.data(d,"customvalidationMessage")))return c;a.each(h,function(a,f){if("valid"!=a&&f&&(c=b.createValidationMessage(d,
a)))return!1});return c||""},writeable:!1}})})})});
Modernizr.formvalidation||jQuery.webshims.register("form-extend",function(a,b,m,h){b.inputTypes=b.inputTypes||{};var k=b.cfg.forms,d,c=function(a){return"number"==typeof a||a&&a==1*a},e=b.inputTypes,r={radio:1,checkbox:1};b.addInputType=function(a,b){e[a]=b};var i={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},q={valueMissing:function(f,b,d){if(!f.attr("required"))return!1;var c=!1;if(!("type"in d))d.type=
(f[0].getAttribute("type")||f[0].type||"").toLowerCase();if("select"==d.nodeName){if(b=!b)if(!(b=0>f[0].selectedIndex))f=f[0],b="select-one"==f.type&&2>f.size?!!a("> option:first-child",f).prop("selected"):!1;f=b}else f=r[d.type]?"checkbox"==d.type?!f.is(":checked"):!a(f[0].form&&f[0].name?f[0].form[f[0].name]:[]).filter(":checked")[0]:!b;return f},tooLong:function(a,b,d){if(""===b||"select"==d.nodeName)return!1;var a=a.attr("maxlength"),d=!1,e=b.length;e&&0<=a&&b.replace&&c(a)&&(d=e>a);return d},
typeMismatch:function(a,b,d){if(""===b||"select"==d.nodeName)return!1;var c=!1;if(!("type"in d))d.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();e[d.type]&&e[d.type].mismatch&&(c=e[d.type].mismatch(b,a));return c},patternMismatch:function(a,d,c){if(""===d||"select"==c.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(e){b.error("wrong patter used: "+e),a=!1}return!a?!1:!a.test(d)}};b.addValidityRule=function(a,b){q[a]=b};a.event.special.invalid=
{add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var f=this.form||this;a.data(f,"invalidEventShim")||(a(f).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),b.moveToFirstEvent(f,"submit"))},teardown:a.noop,handler:function(f){if(!("submit"!=f.type||f.testedValidity||!f.originalEvent||!a.nodeName(f.target,"form")||a.prop(f.target,"noValidate"))){d=!0;f.testedValidity=!0;if(!a(f.target).checkValidity())return f.stopImmediatePropagation(),
d=!1;d=!1}}};a(h).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var n=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return n.apply(this,arguments)}});b.addInputType("email",{mismatch:function(){var a=k.emailReg||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(b){return!a.test(b)}}()});b.addInputType("url",{mismatch:function(){var a=k.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}});b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},i)}}},"prop");var g=function(f){var c,e=a.prop(f,"validity");if(e)a.data(f,"cachedValidity",
e);else return!0;if(!e.valid){c=a.Event("invalid");var t=a(f).trigger(c);if(d&&!g.unhandledInvalids&&!c.isDefaultPrevented())b.validityAlert.showFor(t),g.unhandledInvalids=!0}a.removeData(f,"cachedValidity",!1);return e.valid};b.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var f=!0,d=a("input,textarea,select",this).filter(function(){var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});g.unhandledInvalids=!1;for(var c=0,e=d.length;c<e;c++)g(d[c])||
(f=!1);return f}}});b.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){g.unhandledInvalids=!1;return g(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(a){b.data(this,"customvalidationMessage",""+a)}},willValidate:{set:a.noop,get:function(){var f={button:1,reset:1,hidden:1,image:1};return function(){var b=a(this).getNativeElement()[0];return!(b.disabled||b.readOnly||f[b.type]||b.form&&a.prop(b.form,"noValidate"))}}()},validity:{set:a.noop,
get:function(){var f=a(this).getNativeElement(),d=f[0],c=a.data(d,"cachedValidity");if(c)return c;c=a.extend({},i);if(!a.prop(d,"willValidate")||"submit"==d.type)return c;var e=f.val(),g={nodeName:d.nodeName.toLowerCase()};c.customError=!!b.data(d,"customvalidationMessage");if(c.customError)c.valid=!1;a.each(q,function(a,b){if(b(f,e,g))c[a]=!0,c.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",c.valid?"false":"true");d=f=null;return c}}},"prop");b.defineNodeNamesBooleanProperty(["input",
"textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<b.browserVersion});b.reflectProperties(["input"],["pattern"]);b.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if(c(a)){if(0>a)throw"INDEX_SIZE_ERR";this.setAttribute("maxlength",parseInt(a,10))}else this.setAttribute("maxlength",
"0")},get:function(){var a=this.getAttribute("maxlength");return c(a)&&0<=a?parseInt(a,10):-1}}});b.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}});var s={submit:1,button:1,image:1},j={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",
proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var d="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),c="form"+b.name,e=b.name,g="click.webshimssubmittermutate"+e,i=function(){if("form"in this&&s[this.type]){var o=a.prop(this,"form");if(o){var l=a.attr(this,c);if(null!=l&&(!b.limitedTo||l.toLowerCase()===a.prop(this,d))){var p=a.attr(o,e);a.attr(o,e,l);setTimeout(function(){if(null!=
p)a.attr(o,e,p);else try{a(o).removeAttr(e)}catch(b){o.removeAttribute(e)}},9)}}}};switch(b.proptype){case "url":var p=h.createElement("form");j[d]={prop:{set:function(b){a.attr(this,c,b)},get:function(){var b=a.attr(this,c);if(null==b)return"";p.setAttribute("action",b);return p.action}}};break;case "boolean":j[d]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":j[d]=
{prop:{set:function(b){a.attr(this,c,b)},get:function(){var d=a.attr(this,c);return!d||(d=d.toLowerCase())&&!b.limitedTo[d]?b.defaultProp:d}}};break;default:j[d]={prop:{set:function(b){a.attr(this,c,b)},get:function(){var b=a.attr(this,c);return null!=b?b:""}}}}j[c]||(j[c]={});j[c].attr={set:function(b){j[c].attr._supset.call(this,b);a(this).unbind(g).bind(g,i)},get:function(){return j[c].attr._supget.call(this)}};j[c].initAttr=!0;j[c].removeAttr={value:function(){a(this).unbind(g);j[c].removeAttr._supvalue.call(this)}}});
b.defineNodeNamesProperties(["input","button"],j);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")&&b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}});b.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,
"novalidate")}}});b.addReady(function(b,d){a("form",b).add(d.filter("form")).bind("invalid",a.noop);setTimeout(function(){try{if(h.activeElement&&"form"in h.activeElement)return}catch(d){return}var c=!0;a("input, select, textarea",b).each(function(){if(!c)return!1;if(null!=this.getAttribute("autofocus")){c=!1;var b=a(this).getShadowFocusElement();try{b[0].focus()}catch(d){}return!1}})},0)});(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);if(!Modernizr.input.placeholder||
!Modernizr.textareaPlaceholder){var d="over"==b.cfg.forms.placeholderType,c=["textarea"];Modernizr.input.placeholder||c.push("input");var e=function(b,c,e){if(!d&&"password"!=b.type)!1===e&&(e=a.prop(b,"value")),b.value=e;c.box.removeClass("placeholder-visible")},g=function(b,c,l,g,j){if(!g&&(g=a.data(b,"placeHolder"),!g))return;if("focus"==j||!j&&b===h.activeElement)("password"==b.type||d||a(b).hasClass("placeholder-visible"))&&e(b,g,"");else if(!1===c&&(c=a.prop(b,"value")),c)e(b,g,c);else if(!1===
l&&(l=a.attr(b,"placeholder")||""),l&&!c){c=g;!1===l&&(l=a.attr(b,"placeholder")||"");if(!d&&"password"!=b.type)b.value=l;c.box.addClass("placeholder-visible")}else e(b,g,c)},j=function(b){var b=a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labeledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},i=function(){var b={text:1,
search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var c=a.data(b,"placeHolder");if(c)return c;c=a.data(b,"placeHolder",{text:j(b)});a(b).bind("focus.placeholder blur.placeholder",function(a){g(this,!1,!1,c,a.type)});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){g(b,!1,!1,c,a.type)},0)});if("password"==b.type||d){c.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();c.text.insertAfter(b).bind("mousedown.placeholder",
function(){g(this,!1,!1,c,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(d,e){var f=(parseInt(a.curCSS(b,"padding"+e),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+e),10)||0,0)+(parseInt(a.curCSS(b,"border"+e+"Width"),10)||0);c.text.css("padding"+e,f)});a.curCSS(b,"lineHeight");var i={width:a(b).width(),height:a(b).height()},h=a.curCSS(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(d,e){var f=a.curCSS(b,e);c.text.css(e)!=
f&&c.text.css(e,f)});i.width&&i.height&&c.text.css(i);"none"!==h&&c.box.addClass("placeholder-box-"+h)}else i=function(d){a(b).hasClass("placeholder-visible")&&(e(b,c,""),d&&"submit"==d.type&&setTimeout(function(){d.isDefaultPrevented()&&g(b,!1,!1,c)},9))},a.nodeName(c.text[0],"label")&&setTimeout(function(){c.text.hide()[a.browser.msie?"insertBefore":"insertAfter"](b)},9),a(m).bind("beforeunload",i),c.box=a(b),b.form&&a(b.form).submit(i);return c},update:function(c,d){if(b[a.prop(c,"type")]||a.nodeName(c,
"textarea")){var e=i.create(c);e.text.text(d);g(c,!1,d,e)}}}}();a.webshims.publicMethods={pHolder:i};c.forEach(function(a){b.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b.contentAttr(this,"placeholder",a);i.update(this,a)},get:function(){return b.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});c.forEach(function(c){var d={},e;["attr","prop"].forEach(function(c){d[c]={set:function(a){var d=b.contentAttr(this,"placeholder"),f=e[c]._supset.call(this,a);d&&"value"in this&&
g(this,a,d);return f},get:function(){return a(this).hasClass("placeholder-visible")?"":e[c]._supget.call(this)}}});e=b.defineNodeNameProperty(c,"value",d)})}})()});
jQuery.webshims.ready("dom-support",function(a,b,m,h){(function(){if(!("value"in h.createElement("output"))){b.defineNodeNameProperty("output","value",{prop:{set:function(b){var c=a.data(this,"outputShim");c||(c=k(this));c(b)},get:function(){return b.contentAttr(this,"value")||a(this).text()||""}}});b.onNodeNamesPropertyModify("input","value",function(b,c,e){"removeAttr"!=e&&(c=a.data(this,"outputShim"))&&c(b)});var k=function(d){if(!d.getAttribute("aria-live")){var d=a(d),c=(d.text()||"").trim(),
e=d.attr("id"),k=d.attr("for"),i=a('<input class="output-shim" type="text" disabled name="'+(d.attr("name")||"")+'" value="'+c+'" style="display: none !important;" />').insertAfter(d),q=i[0].form||h,n=function(a){i[0].value=a;a=i[0].value;d.text(a);b.contentAttr(d[0],"value",a)};d[0].defaultValue=c;b.contentAttr(d[0],"value",c);d.attr({"aria-live":"polite"});e&&(i.attr("id",e),d.attr("aria-labeldby",b.getID(a('label[for="'+e+'"]',q))));k&&(e=b.getID(d),k.split(" ").forEach(function(a){(a=h.getElementById(a))&&
a.setAttribute("aria-controls",e)}));d.data("outputShim",n);i.data("outputShim",n);return n}};b.addReady(function(b,c){a("output",b).add(c.filter("output")).each(function(){k(this)})})}})();(function(){var k={updateInput:1,input:1},d={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},c=function(a){var c,d=a.prop("value"),h=function(c){if(a){var f=a.prop("value");f!==d&&(d=f,(!c||!k[c.type])&&b.triggerInlineForm&&b.triggerInlineForm(a[0],"input"))}},n,g=function(){clearTimeout(n);
n=setTimeout(h,9)},m=function(){a.unbind("focusout",m).unbind("keyup keypress keydown paste cut",g).unbind("input change updateInput",h);clearInterval(c);setTimeout(function(){h();a=null},1)};clearInterval(c);c=setInterval(h,99);g();a.bind("keyup keypress keydown paste cut",g).bind("focusout",m).bind("input updateInput change",h)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(h).bind("focusin",function(b){b.target&&b.target.type&&!b.target.readOnly&&!b.target.disabled&&"input"==(b.target.nodeName||
"").toLowerCase()&&!d[b.target.type]&&c(a(b.target))})})();b.isReady("form-output",!0)});
