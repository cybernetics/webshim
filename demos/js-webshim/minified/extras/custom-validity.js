(function(b,e,h){if(!b.webshims){var i=navigator.browserLanguage||navigator.language||b("html").attr("lang")||"";b.webshims={addReady:function(a){b(function(){a(h,b([]))})},ready:function(a,b){b()},activeLang:function(){return i}}}var g=b.webshims,j={},k=!1,c,d,a=function(a){g.refreshCustomValidityRules(a.target)};g.customErrorMessages={};g.addCustomValidityRule=function(a,c,d){j[a]=c;g.customErrorMessages[a]||(g.customErrorMessages[a]=[],g.customErrorMessages[a][""]=d||a);b.isReady&&k&&b("input, select, textarea").each(function(){f(this)})};
g.refreshCustomValidityRules=function(a){if(a.form&&(d||b.prop(a,"willValidate"))){c=!0;var f=b.data(a,"customMismatchedRule"),h=b.prop(a,"validity")||{},e="";if(f||!h.customError){var i=b(a).val();b.each(j,function(b,c){e=c(a,i)||"";f=b;if(e)return"string"!=typeof e&&(e=a.getAttribute("x-moz-errormessage")||a.getAttribute("data-errormessage")||g.customErrorMessages[b][g.activeLang()]||g.customErrorMessages[b][""]),!1});e&&b.data(a,"customMismatchedRule",f);b(a).setCustomValidity(e)}c=!1}};var f=
g.refreshCustomValidityRules;g.ready("forms",function(){k=!0;var e=b.fn.setCustomValidity||function(a){return this.each(function(){this.setCustomValidity&&this.setCustomValidity(a)})};b.fn.setCustomValidity=function(a){c||this.data("customMismatchedRule","");return e.apply(this,arguments)};h.addEventListener&&h.createElement("form").checkValidity&&h.addEventListener("change",a,!0);g.addReady(function(a,c){d=!0;b("input, select, textarea",a).add(c.filter("input, select, textarea")).each(function(){f(this)});
d=!1});b(h).bind("refreshCustomValidityRules",a)})})(jQuery,window,document);
(function(b,e,h){e=b.webshims.addCustomValidityRule;e("partialPattern",function(c,d){if(d&&c.getAttribute("data-partial-pattern")){var a=b(c).data("partial-pattern");return!a?void 0:!RegExp("("+a+")","i").test(d)}},"This format is not allowed here.");e("tooShort",function(c,d){return!d||!c.getAttribute("data-minlength")?void 0:b(c).data("minlength")>d.length},"Entered value is too short.");var i={};e("group-required",function(c){var d=c.name;if(d&&"checkbox"===c.type&&b(c).hasClass("group-required")){var a=
b(c.form&&c.form[d]||h.getElementsByName(d)),c=a.filter(":checked");i[d]&&clearTimeout(i[d]);i[d]=setTimeout(function(){a.unbind("click.groupRequired").bind("click.groupRequired",function(){a.filter(".group-required").each(function(){b.webshims.refreshCustomValidityRules(this)})})},9);return!c[0]}},"Please check one of these checkboxes.");var g=/[^0-9-]+/;e("creditcard",function(c,d){if(d&&b(c).hasClass("creditcard-input")){if(!g.test(d))return!0;var a=0,f=0,e=!1,d=d.replace(/\D/g,"");for(n=d.length-
1;0<=n;n--){f=d.charAt(n);f=parseInt(f,10);if(e&&9<(f*=2))f-=9;a+=f;e=!e}return 0!==a%10}},"Please enter a valid credit card number");var j={prop:"value","from-prop":"value",toggle:!1},k=b.webshims.modules["form-core"].getGroupElements||function(c){return b(c.form[c.name]).filter('[type="radio"]')};e("dependent",function(c,d){if(c.getAttribute("data-dependent-validation")){var a=b(c).data("dependentValidation"),f;if(a){var e=function(){var d=b.prop(a.masterElement,a["from-prop"]);f&&(d=-1!==b.inArray(d,
f));a.toggle&&(d=!d);b.prop(c,a.prop,d)};if(!a._init||!a.masterElement){"string"==typeof a&&(a={from:a});a.masterElement=h.getElementById(a.from)||h.getElementsByName(a.from||[])[0];if(!a.masterElement||!a.masterElement.form)return;if(/radio|checkbox/i.test(a.masterElement.type)){if(a["from-prop"]||(a["from-prop"]="checked"),!a.prop&&"checked"==a["from-prop"])a.prop="disabled"}else a["from-prop"]||(a["from-prop"]="value");0===a["from-prop"].indexOf("value:")&&(f=a["from-prop"].replace("value:","").split("||"),
a["from-prop"]="value");a=b.data(c,"dependentValidation",b.extend({_init:!0},j,a));"value"!==a.prop||f?("radio"===a.masterElement.type&&k||b)(a.masterElement).bind("change",e):b(a.masterElement).bind("change",function(){b.webshims.refreshCustomValidityRules(c)})}if("value"==a.prop&&!f)return b.prop(a.masterElement,"value")!=d;e();return""}}},"The value of this field does not repeat the value of the other field")})(jQuery,window,document);
