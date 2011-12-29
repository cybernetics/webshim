(function(a){if(!Modernizr.genericDOM){var d=document,i,l,o=/<([\w:]+)/,t={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if("string"!=typeof a||t[(o.exec(a)||["",""])[1].toLowerCase()])return a;if(!l){i=d.body;if(!i)return a;l=d.createElement("div");l.style.display="none"}var n=l.cloneNode(!1);i.appendChild(n);n.innerHTML=a;i.removeChild(n);return n.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,d,i,l,o){var t=d.modules,s=/\s*,\s*/,n={},u={},p={},v={},c={},m=a.fn.val,f=function(b,g,e,k,c){return c?m.call(a(b)):m.call(a(b),e)};a.fn.val=function(b){var g=this[0];arguments.length&&null==b&&(b="");if(!arguments.length)return!g||1!==g.nodeType?m.call(this):a.prop(g,"value",b,"val",!0);if(a.isArray(b))return m.apply(this,arguments);var e=a.isFunction(b);return this.each(function(k){g=this;1===g.nodeType&&(e?(k=b.call(g,k,a.prop(g,"value",o,"val",
!0)),null==k&&(k=""),a.prop(g,"value",k,"val")):a.prop(g,"value",b,"val"))})};var h="_webshimsLib"+Math.round(1E3*Math.random()),b=function(b,g,e){b=b.jquery?b[0]:b;if(!b)return e||{};var k=a.data(b,h);e!==o&&(k||(k=a.data(b,h,{})),g&&(k[g]=e));return g?k&&k[g]:k};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(z){a.fn[z.name]=function(){return this.map(function(){var a=b(this,
"shadowData");return a&&a[z.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){n[b]=a[b];a[b]=function(g,e,k,x,j){var d="val"==x,q=!d?n[b]:f;if(!g||!u[e]||1!==g.nodeType||!d&&x&&"attr"==b&&a.attrFn[e])return q(g,e,k,x,j);var y=(g.nodeName||"").toLowerCase(),r=p[y],m="attr"==b&&(!1===k||null===k)?"removeAttr":b,h,i,l;r||(r=p["*"]);r&&(r=r[e]);r&&(h=r[m]);if(h){if("value"==e)i=h.isVal,h.isVal=d;if("removeAttr"===m)return h.value.call(g);if(k===o)return h.get?h.get.call(g):h.value;h.set&&
("attr"==b&&!0===k&&(k=e),l=h.set.call(g,k));if("value"==e)h.isVal=i}else l=q(g,e,k,x,j);if((k!==o||"removeAttr"===m)&&c[y]&&c[y][e]){var w;w="removeAttr"==m?!1:"prop"==m?!!k:!0;c[y][e].forEach(function(a){if(!a.only||(a.only="prop"==b)||"attr"==a.only&&"prop"!=b)a.call(g,k,w,d?"val":m,b)})}return l};v[b]=function(g,e,k){p[g]||(p[g]={});p[g][e]||(p[g][e]={});var c=p[g][e][b],j=function(a,g,c){return g&&g[a]?g[a]:c&&c[a]?c[a]:"prop"==b&&"value"==e?function(a){return k.isVal?f(this,e,a,!1,0===arguments.length):
n[b](this,e,a)}:"prop"==b&&"value"==a&&k.value.apply?function(a){var g=n[b](this,e);g&&g.apply&&(g=g.apply(this,arguments));return g}:function(a){return n[b](this,e,a)}};p[g][e][b]=k;if(k.value===o){if(!k.set)k.set=k.writeable?j("set",k,c):d.cfg.useStrict&&"prop"==e?function(){throw e+" is readonly on "+g;}:a.noop;if(!k.get)k.get=j("get",k,c)}["value","get","set"].forEach(function(a){k[a]&&(k["_sup"+a]=j(a,c))})}});var r=!a.browser.msie||8<parseInt(a.browser.version,10),j=function(){var a=d.getPrototypeOf(l.createElement("foobar")),
g=Object.prototype.hasOwnProperty;return function(e,c,j){var f=l.createElement(e),h=d.getPrototypeOf(f);if(r&&h&&a!==h&&(!f[c]||!g.call(f,c))){var m=f[c];j._supvalue=function(){return m&&m.apply?m.apply(this,arguments):m};h[c]=j.value}else j._supvalue=function(){var a=b(this,"propValue");return a&&a[c]&&a[c].apply?a[c].apply(this,arguments):a&&a[c]},q.extendValue(e,c,j.value);j.value._supvalue=j._supvalue}}(),q=function(){var c={};d.addReady(function(b,e){var g={},k=function(c){g[c]||(g[c]=a(b.getElementsByTagName(c)),
e[0]&&a.nodeName(e[0],c)&&(g[c]=g[c].add(e)))};a.each(c,function(a,b){k(a);!b||!b.forEach?d.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){g[a].each(b)})});g=null});var g,e=a([]),k=function(b,e){c[b]?c[b].push(e):c[b]=[e];a.isDOMReady&&(g||a(l.getElementsByTagName(b))).each(e)};return{createTmpCache:function(b){a.isDOMReady&&(g=g||a(l.getElementsByTagName(b)));return g||e},flushTmpCache:function(){g=null},content:function(b,e){k(b,function(){var b=a.attr(this,e);null!=b&&a.attr(this,
e,b)})},createElement:function(a,b){k(a,b)},extendValue:function(e,g,c){k(e,function(){a(this).each(function(){b(this,"propValue",{})[g]=this[g];this[g]=c})})}}}(),w=function(a,b){if(a.defaultValue===o)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(d,{getID:function(){var b=(new Date).getTime();return function(g){var g=a(g),e=g.attr("id");e||(b++,e="ID-"+b,g.attr("id",e));return e}}(),extendUNDEFProp:function(b,
g){a.each(g,function(a,g){a in b||(b[a]=g)})},createPropDefault:w,data:b,moveToFirstEvent:function(){var b=a._data?"_data":"data";return function(g,e,c){if((g=(a[b](g,"events")||{})[e])&&1<g.length)e=g.pop(),c||(c="bind"),"bind"==c&&g.delegateCount?g.splice(g.delegateCount,0,e):g.unshift(e)}}(),addShadowDom:function(c,g,e){e=e||{};c.jquery&&(c=c[0]);g.jquery&&(g=g[0]);if(!e.shadowFocusElement)e.shadowFocusElement=g;var k=a.data(c,h)||a.data(c,h,{}),j=a.data(g,h)||a.data(g,h,{});k.hasShadow=g;j.nativeElement=
c;j.shadowData=k.shadowData={nativeElement:c,shadowElement:g,shadowFocusElement:e.shadowFocusElement};e.shadowChilds&&e.shadowChilds.each(function(){b(this,"shadowData",j.shadowData)});if(e.data)k.shadowData.data=e.data,j.shadowData.data=e.data;e=null},propTypes:{standard:function(a){w(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){w(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(b,g){"string"==typeof g&&(g=g.split(s));g.forEach(function(e){d.defineNodeNamesProperty(b,e,{prop:{set:function(b){a.attr(this,e,b)},get:function(){return a.attr(this,e)||""}}})})},defineNodeNameProperty:function(b,g,e){u[g]=!0;if(e.reflect)d.propTypes[e.propType||"standard"](e);["prop","attr","removeAttr"].forEach(function(c){var f=e[c];f&&(f="prop"===c?a.extend({writeable:!0},f):a.extend({},
f,{writeable:!0}),v[c](b,g,f),"*"!=b&&d.cfg.extendNative&&"prop"==c&&f.value&&a.isFunction(f.value)&&j(b,g,f),e[c]=f)});e.initAttr&&q.content(b,g);return e},defineNodeNameProperties:function(a,b,e,c){for(var j in b)!c&&b[j].initAttr&&q.createTmpCache(a),e&&(b[j][e]?d.log("override: "+a+"["+j+"] for "+e):(b[j][e]={},["value","set","get"].forEach(function(a){a in b[j]&&(b[j][e][a]=b[j][a],delete b[j][a])}))),b[j]=d.defineNodeNameProperty(a,j,b[j]);c||q.flushTmpCache();return b},createElement:function(b,
c,e){var j;a.isFunction(c)&&(c={after:c});q.createTmpCache(b);c.before&&q.createElement(b,c.before);e&&(j=d.defineNodeNameProperties(b,e,!1,!0));c.after&&q.createElement(b,c.after);q.flushTmpCache();return j},onNodeNamesPropertyModify:function(b,g,e,j){"string"==typeof b&&(b=b.split(s));a.isFunction(e)&&(e={set:e});b.forEach(function(a){c[a]||(c[a]={});"string"==typeof g&&(g=g.split(s));e.initAttr&&q.createTmpCache(a);g.forEach(function(b){c[a][b]||(c[a][b]=[],u[b]=!0);if(e.set){if(j)e.set.only=j;
c[a][b].push(e.set)}e.initAttr&&q.content(a,b)});q.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,c,e){e||(e={});if(a.isFunction(e))e.set=e;d.defineNodeNamesProperty(b,c,{attr:{set:function(a){this.setAttribute(c,a);e.set&&e.set.call(this,!0)},get:function(){return null==this.getAttribute(c)?o:c}},removeAttr:{value:function(){this.removeAttribute(c);e.set&&e.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:e.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){if(c===
o)return c=(a.attributes[b]||{}).value,null==c?o:c;"boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c)}},activeLang:function(){var b=[],c={},e,j,f=/:\/\/|^\.*\//,h=function(b,c,e){return c&&e&&-1!==a.inArray(c,e.availabeLangs||[])?(b.loading=!0,e=e.langSrc,f.test(e)||(e=d.cfg.basePath+e),d.loader.loadScript(e+c+".js",function(){b.langObj[c]?(b.loading=!1,r(b,!0)):a(function(){b.langObj[c]&&r(b,!0);b.loading=!1})}),!0):!1},m=function(a){c[a]&&c[a].forEach(function(a){a.callback()})},
r=function(a,b){if(a.activeLang!=e&&a.activeLang!==j){var c=t[a.module].options;if(a.langObj[e]||j&&a.langObj[j])a.activeLang=e,a.callback(a.langObj[e]||a.langObj[j],e),m(a.module);else if(!b&&!h(a,e,c)&&!h(a,j,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],e),m(a.module)}};return function(f){if("string"==typeof f&&f!==e)e=f,j=e.split("-")[0],e==j&&(j=!1),a.each(b,function(a,b){r(b)});else if("object"==typeof f)if(f.register)c[f.register]||(c[f.register]=[]),c[f.register].push(f),
f.callback();else{if(!f.activeLang)f.activeLang="";b.push(f);r(f)}return e}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){d[a]=function(a,c,j,f){"string"==typeof a&&(a=a.split(s));var h={};a.forEach(function(a){h[a]=d[b](a,c,j,f)});return h}});d.isReady("webshimLocalization",!0)});
(function(a,d){var i=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<i)&&(!a.browser.msie||12>i&&7<i)){var l={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},o=function(a,d){a.getAttribute("role")||a.setAttribute("role",d)};a.webshims.addReady(function(i,s){a.each(l,function(d,c){for(var m=a(d,i).add(s.filter(d)),f=0,h=m.length;f<h;f++)o(m[f],c)});if(i===d){var n=d.getElementsByTagName("header")[0],u=d.getElementsByTagName("footer"),p=u.length;
n&&!a(n).closest("section, article")[0]&&o(n,"banner");p&&(n=u[p-1],a(n).closest("section, article")[0]||o(n,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(a,d,i,l,o){d.propTypes.element=function(i){d.createPropDefault(i,"attr");if(!i.prop)i.prop={get:function(){var d=i.attr.get.call(this);d&&(d=a("#"+d)[0])&&i.propNodeName&&!a.nodeName(d,i.propNodeName)&&(d=null);return d||null},writeable:!1}};(function(){if(!Modernizr.input.list){var t=0,s={submit:1,button:1,reset:1,hidden:1,range:1,date:1},n=a.browser.msie&&7>parseInt(a.browser.version,10),u={},p=function(a){if(!a)return[];if(u[a])return u[a];var m;
d.ready("json-storage",function(){try{m=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(f){}u[a]=m||[]});return m||[]},v={_create:function(c){if(!s[a.prop(c.input,"type")]){var d=c.datalist,f=a.data(c.input,"datalistWidget");if(d&&f&&f.datalist!==d)f.datalist=d,f.id=c.id,f._resetListCached();else if(d){if(!(f&&f.datalist===d)){t++;var h=this;this.timedHide=function(){clearTimeout(h.hideTimer);h.hideTimer=setTimeout(a.proxy(h,"hideList"),9)};this.datalist=d;this.id=c.id;this.hasViewableData=
!0;this._autocomplete=a.attr(c.input,"autocomplete");a.data(c.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill" />').appendTo("body");this.index=-1;this.input=c.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(b){var c=a("li:not(.hidden-item)",h.shadowList),j="mousedown"==b.type||"click"==b.type;h.markItem(c.index(b.currentTarget),j,c);"click"==b.type&&h.hideList();return"mousedown"!=
b.type}).bind("focusout",this.timedHide);c.input.setAttribute("autocomplete","off");a(c.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",a.proxy(this,"showHideOptions")).bind("keydown.datalistWidget",function(b){var c=b.keyCode;if(40==c&&!h.showList())return h.markItem(h.index+1,!0),!1;if(h.isListVisible){if(38==c)return h.markItem(h.index-1,!0),!1;if(!b.shiftKey&&(33==c||36==c))return h.markItem(0,!0),!1;if(!b.shiftKey&&(34==c||35==c))return b=a("li:not(.hidden-item)",h.shadowList),
h.markItem(b.length-1,!0,b),!1;if(13==c||27==c)return 13==c&&(b=a("li.active-item:not(.hidden-item)",h.shadowList),b[0]&&(a.prop(h.input,"value",a("span.option-value",b).text()),a(h.input).triggerHandler("updateInput"))),h.hideList(),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&h.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();
c.input.form&&c.input.id&&a(c.input.form).bind("submit.datalistWidget"+c.input.id,function(){var b=a.prop(c.input,"value"),f=(c.input.name||c.input.id)+a.prop(c.input,"type");if(!h.storedOptions)h.storedOptions=p(f);if(b&&-1==h.storedOptions.indexOf(b)&&(h.storedOptions.push(b),b=h.storedOptions,f)){b=b||[];try{localStorage.setItem("storedDatalistOptions"+f,JSON.stringify(b))}catch(j){}}});a(i).bind("unload",function(){h.destroy()})}}else f&&f.destroy()}},destroy:function(){var c=a.attr(this.input,
"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(l).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");c===o?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",c)},_resetListCached:function(a){var m=this,f;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||
(i.QUnit||(f=a&&l.activeElement==m.input)?m.updateListOptions(f):d.ready("WINDOWLOAD",function(){m.updateTimer=setTimeout(function(){m.updateListOptions();m=null;t=1},200+100*t)}))},updateListOptions:function(c){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.curCSS(this.input,"fontSize"),fontFamily:a.curCSS(this.input,"fontFamily")});var d=[],f=[],h=[],b,i,j,q;for(i=a.prop(this.datalist,"options"),j=0,q=i.length;j<q;j++){b=i[j];if(b.disabled)return;
b={value:a(b).val()||"",text:a.trim(a.attr(b,"label")||b.textContent||b.innerText||a.text([b])||""),className:b.className||"",style:a.attr(b,"style")||""};b.text?b.text!=b.value&&(b.className+=" different-label-value"):b.text=b.value;f[j]=b.value;h[j]=b}if(!this.storedOptions)this.storedOptions=p((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==f.indexOf(a)&&h.push({value:a,text:a,className:"stored-suggest",style:""})});for(j=0,q=h.length;j<q;j++)i=
h[j],d[j]='<li class="'+i.className+'" style="'+i.style+'" tabindex="-1" role="listitem"><span class="option-label">'+i.text+'</span><span class="option-value"> '+i.value+"</span></li>";this.arrayOptions=h;this.shadowList.html('<ul role="list" class="'+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom">'+d.join("\n")+"</ul>");a.fn.bgIframe&&n&&this.shadowList.bgIframe();(c||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(){var c=a.prop(this.input,"value").toLowerCase();
if(!(c===this.lastUpdatedValue||this.lastUnfoundValue&&0===c.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=c;var d=!1,f=a("li",this.shadowList);c?this.arrayOptions.forEach(function(h,b){if(!("lowerText"in h))h.lowerText=h.text!=h.value?h.text.toLowerCase()+h.value.toLowerCase():h.text.toLowerCase();-1!==h.lowerText.indexOf(c)?(a(f[b]).removeClass("hidden-item"),d=!0):a(f[b]).addClass("hidden-item")}):f.length&&(f.removeClass("hidden-item"),d=!0);(this.hasViewableData=d)?this.showList():(this.lastUnfoundValue=
c,this.hideList())}},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions();if(!this.hasViewableData)return!1;var c=this,d=a(this.input).offset();d.top+=a(this.input).outerHeight();d.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);n&&(this.shadowList.css("height","auto"),250<this.shadowList.height()&&this.shadowList.css("height",220));this.shadowList.css(d).addClass("datalist-visible");
this.isListVisible=!0;a(l).bind("mousedown.datalist"+this.id+" focusin.datalist"+this.id,function(f){f.target===c.input||c.shadowList[0]===f.target||a.contains(c.shadowList[0],f.target)?(clearTimeout(c.hideTimer),setTimeout(function(){clearTimeout(c.hideTimer)},0)):c.timedHide()});return!0},hideList:function(){if(!this.isListVisible)return!1;this.shadowList.removeClass("datalist-visible list-item-active").scrollTop(0).find("li.active-item").removeClass("active-item");this.index=-1;this.isListVisible=
!1;a(this.input).removeAttr("aria-activedescendant");a(l).unbind(".datalist"+this.id);return!0},scrollIntoView:function(c){var d=a("> ul",this.shadowList),f=c.position();f.top-=(parseInt(d.css("paddingTop"),10)||0)+(parseInt(d.css("marginTop"),10)||0)+(parseInt(d.css("borderTopWidth"),10)||0);0>f.top?this.shadowList.scrollTop(this.shadowList.scrollTop()+f.top-2):(f.top+=c.outerHeight(),c=this.shadowList.height(),f.top>c&&this.shadowList.scrollTop(this.shadowList.scrollTop()+(f.top-c)+2))},markItem:function(c,
d,f){f=f||a("li:not(.hidden-item)",this.shadowList);if(f.length)0>c?c=f.length-1:c>=f.length&&(c=0),f.removeClass("active-item"),this.shadowList.addClass("list-item-active"),f=f.filter(":eq("+c+")").addClass("active-item"),d&&(a.prop(this.input,"value",a("span.option-value",f).text()),a.attr(this.input,"aria-activedescendant",a.webshims.getID(f)),a(this.input).triggerHandler("updateInput"),this.scrollIntoView(f)),this.index=c}};(function(){d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,
get:function(){var c=a("select",this);return c[0]?c[0].options:[]}}});d.defineNodeNameProperties("input",{selectedOption:{prop:{writeable:!1,get:function(){var c=a.prop(this,"list"),d=null,f;if(!c)return d;f=a.attr(this,"value");if(!f)return d;c=a.prop(c,"options");if(!c.length)return d;a.each(c,function(c,b){if(f==a.prop(b,"value"))return d=b,!1});return d}}},autocomplete:{attr:{get:function(){var c=a.data(this,"datalistWidget");return c?c._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},
set:function(c){var d=a.data(this,"datalistWidget");d?(d._autocomplete=c,"off"==c&&d.hideList()):"autocomplete"in this?this.autocomplete=c:this.setAttribute("autocomplete",c)}}},list:{attr:{get:function(){var a=d.contentAttr(this,"list");return null==a?o:a},set:function(c){d.contentAttr(this,"list",c);d.objectCreate(v,o,{input:this,id:c,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}});if(a.event.customEvent)a.event.customEvent.updateDatalist=!0,
a.event.customEvent.updateInput=!0;d.addReady(function(c,d){d.filter("select, option").each(function(){var c=this.parentNode,d=a.nodeName(c,"datalist");if(c&&!d)c=c.parentNode,d=a.nodeName(c,"datalist");c&&d&&a(c).triggerHandler("updateDatalist")})})})()}})()});jQuery.webshims.gcEval=function(a,d){with(d&&d.form||window)with(d||window)return function(a){eval(a)}.call(d||window,a)};
(function(a){var d=window.Modernizr,i=a.webshims;i.capturingEventPrevented=function(d){var i=d.isDefaultPrevented,l=d.preventDefault;d.preventDefault=function(){clearTimeout(a.data(d.target,d.type+"DefaultPrevented"));a.data(d.target,d.type+"DefaultPrevented",setTimeout(function(){a.removeData(d.target,d.type+"DefaultPrevented")},30));return l.apply(this,arguments)};d.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!a.data(d.target,d.type+"DefaultPrevented"))};d._isPolyfilled=!0};
if(d.formvalidation){var l=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select /><input type="date" required name="a" /><input type="submit" /></form>');d.bugfreeformvalidation=d.requiredSelect=!!("required"in a("select",l)[0]);if(window.opera||a.browser.webkit||window.testGoodWithFix){var o=a("input",l),t,s=function(n){var p=["form-extend","form-native-fix"];n&&(n.preventDefault(),n.stopImmediatePropagation());clearTimeout(t);setTimeout(function(){l&&(l.remove(),l=o=null)},
9);if(!d.bugfreeformvalidation||!d.requiredSelect)i.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),i.modules["form-extend"].test=a.noop;i.isReady("form-number-date-api")&&p.push("form-number-date-api");i.bugs.validationMessage&&p.push("form-message");i.reTest(p);if(a.browser.opera||window.testGoodWithFix)i.loader.loadList(["dom-extend"]),i.ready("dom-extend",function(){var d=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(c){var l=i.defineNodeNameProperty(c,
"checkValidity",{prop:{value:function(){i.fromSubmit||a(this).bind("invalid.checkvalidity",d);i.fromCheckValidity=!0;var c=l.prop._supvalue.apply(this,arguments);i.fromSubmit||a(this).unbind("invalid.checkvalidity",d);i.fromCheckValidity=!1;return c}}})})}),d.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&i.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var c=a("select",this);
if(c[0]&&c[0].options&&c[0].options.length)d=c[0].options}return d}}})};l.appendTo("head");if(window.opera||window.testGoodWithFix){i.bugs.validationMessage=!o.prop("validationMessage");if((d.inputtypes||{}).date){try{o.prop("valueAsNumber",0)}catch(n){}i.bugs.valueAsNumberSet="1970-01-01"!=o.prop("value")}o.prop("value","")}l.bind("submit",function(a){d.bugfreeformvalidation=!1;s(a)});t=setTimeout(function(){l&&l.triggerHandler("submit")},9);i.capturingEvents(["input"]);i.capturingEvents(["invalid"],
!0);a("input, select",l).bind("invalid",s).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}else i.capturingEvents(["input"]),i.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(a,d,i,l,o,t){var s={radio:1},n={checkbox:1,radio:1},u=a([]),p=function(b){var b=a(b),c=b[0].name;return s[b[0].type]&&c?a(b[0].form&&b[0].form[c]||l.getElementsByName(c)).not(b[0]):u},v=d.getContentValidationMessage=function(b,c){var j=b.getAttribute("x-moz-errormessage")||b.getAttribute("data-errormessage")||"";if(j&&-1!=j.indexOf("{")){try{j=jQuery.parseJSON(j)}catch(f){return j}"object"==typeof j&&(c=c||a.prop(b,"validity")||{valid:1},c.valid||a.each(c,
function(a,b){if(b&&"valid"!=a&&j[a])return j=j[a],!1}));d.data(b,"contentErrorMessage",j);if("object"==typeof j)j=j.defaultMessage}return j||""},c={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,
"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!c[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!c[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr.filters[b]=
a.expr.filters[b+"-element"]});var i=a.event.customEvent||{},m=a.prop,f={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,c,d){var h=m.apply(this,arguments);if(b&&"form"in b&&f[c]&&d!==o&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),"checked"==c&&d&&p(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return h};var h=function(b,c){var d;a.each(b,function(b,f){if(f)return d="customError"==
b?a.prop(c,"validationMessage"):b,!1});return d};a(l).bind("focusout change refreshvalidityui",function(b){if(b.target&&"submit"!=b.target.type&&a.prop(b.target,"willValidate")){var c=a.data(b.target,"webshimsswitchvalidityclass");c&&clearTimeout(c);a.data(b.target,"webshimsswitchvalidityclass",setTimeout(function(){var c=a(b.target).getNativeElement()[0],d=a.prop(c,"validity"),f=a(c).getShadowElement(),i,g,e,k;d.valid?f.hasClass("form-ui-valid")||(i="form-ui-valid",g="form-ui-invalid",k="changedvaliditystate",
e="changedvalid",n[c.type]&&c.checked&&p(c).removeClass(g).addClass(i).removeAttr("aria-invalid"),a.removeData(c,"webshimsinvalidcause")):(d=h(d,c),a.data(c,"webshimsinvalidcause")!=d&&(a.data(c,"webshimsinvalidcause",d),k="changedvaliditystate"),f.hasClass("form-ui-invalid")||(i="form-ui-invalid",g="form-ui-valid",n[c.type]&&!c.checked&&p(c).removeClass(g).addClass(i),e="changedinvalid"));i&&(f.addClass(i).removeClass(g),setTimeout(function(){a(c).trigger(e)},0));k&&setTimeout(function(){a(c).trigger(k)},
0);a.removeData(b.target,"webshimsswitchvalidityclass")},9))}});i.changedvaliditystate=!0;i.changedvalid=!0;i.changedinvalid=!0;i.refreshvalidityui=!0;d.triggerInlineForm=function(b,c){b.jquery&&(b=b[0]);var f="on"+c,h=b[f]||b.getAttribute(f)||"",i,l,c=a.Event({type:c,target:b,currentTarget:b});h&&(d.warn("we will drop inline event handler support, with next release. use event binding: $.bind instead"),"string"==typeof h&&(l=d.gcEval(h,b),b[f]&&(i=!0,b[f]=!1)));!1===l&&(c.stopPropagation(),c.preventDefault());
a(b).trigger(c);i&&(b[f]=h);return l};i=function(){d.scrollRoot=a.browser.webkit||"BackCompat"==l.compatMode?a(l.body):a(l.documentElement)};i();d.ready("DOM",i);d.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",c={top:0,left:0},f={hideDelay:5E3,getBodyOffset:function(){c=h.offset()},showFor:function(b,c,d,l){f._create();var b=a(b),m=a(b).getShadowElement(),n=f.getOffsetFromBody(m);f.clear();l?this.hide():(this.getMessage(b,c),this.position(m,n),h.css({fontSize:b.css("fontSize"),
fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(i=setTimeout(g,this.hideDelay)));d||this.setFocus(m,n)},getOffsetFromBody:function(b){b=a(b).offset();a.swap(h[0],{visibility:"hidden",display:"inline-block",left:0,top:0},f.getBodyOffset);b.top-=c.top;b.left-=c.left;return b},setFocus:function(c,f){var j=a(c).getShadowFocusElement(),i=d.scrollRoot.scrollTop(),m=(f||j.offset()).top-30,n;d.getID&&"label"==b&&h.attr("for",d.getID(j));i>m&&(d.scrollRoot.animate({scrollTop:m-5},{queue:!1,duration:Math.max(Math.min(600,
1.5*(i-m)),80)}),n=!0);try{j[0].focus()}catch(o){}n&&(d.scrollRoot.scrollTop(i),setTimeout(function(){d.scrollRoot.scrollTop(i)},0));setTimeout(function(){a(l).bind("focusout.validityalert",g)},10)},getMessage:function(b,c){a("span.va-box",h).text(c||v(b[0])||b.prop("validationMessage"))},position:function(b,c){c=c?a.extend({},c):f.getOffsetFromBody(b);c.top+=b.outerHeight();h.css(c)},show:function(){"none"===h.css("display")&&h.css({opacity:0}).show();h.addClass("va-visible").fadeTo(400,1)},hide:function(){h.removeClass("va-visible").fadeOut()},
clear:function(){clearTimeout(m);clearTimeout(i);a(l).unbind("focusout.validityalert");h.stop().removeAttr("for")},_create:function(){if(!h)h=f.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),d.ready("DOM",function(){h.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&
h.bgIframe()})}},h,i=!1,m=!1,g=a.proxy(f,"hide");return f}();(function(){var b,c=[],d;a(l).bind("invalid",function(f){if(!f.wrongWebkitInvalid){var h=a(f.target),i=h.getShadowElement();i.hasClass("form-ui-invalid")||(i.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(f.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=f.isDefaultPrevented,i=a.Event("firstinvalidsystem"),a(l).triggerHandler(i,
{element:f.target,form:f.target.form,isInvalidUIPrevented:f.isDefaultPrevented}),h.trigger(b);b&&b.isDefaultPrevented()&&f.preventDefault();c.push(f.target);f.extraData="fix";clearTimeout(d);d=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(f.target).trigger(d,d)},9);i=h=null}})})();t.replaceValidationUI&&d.ready("DOM",function(){a(l).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,
a(b.target).prop("customValidationMessage")))})})});
