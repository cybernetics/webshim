jQuery.webshims.ready("dom-support",function(e,f,p,r){var n=r.createElement("a");["poster","src"].forEach(function(k){f.defineNodeNamesProperty(k=="src"?["audio","video","source"]:["video"],k,{prop:{get:function(){var h=e.attr(this,k);if(h==null)return"";n.setAttribute("href",h);return n.href},set:function(h){e.attr(this,k,h)}}})});["autoplay","controls"].forEach(function(e){f.defineNodeNamesBooleanProperty(["audio","video"],e)});f.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},
HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop")});
jQuery.webshims.register("mediaelement-swf",function(e,f,p,r,n,k){var h=f.mediaelement,C=p.swfobject,D=Modernizr.audio&&Modernizr.video,E=C.hasFlashPlayerVersion("9.0.115"),u,w={paused:!0,ended:!1,currentSrc:"",duration:p.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:n},i=Object.keys(w),v={currentTime:0,volume:1,muted:!1};Object.keys(v);var x=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,currentTime:0,_ppFlag:n},
w,v),y=/^jwplayer-/,o=function(a){if(a=r.getElementById(a.replace(y,"")))return a=f.data(a,"mediaelement"),a.isActive=="flash"?a:null},q=function(a){return(a=f.data(a,"mediaelement"))&&a.isActive=="flash"?a:null},j=function(a,b){b=e.Event(b);b.preventDefault();e.event.trigger(b,n,a)},c,d=f.cfg.basePath+"swf/jwwebshims.swf",m=f.cfg.basePath+"jwplayer/player.swf";E&&f.ready("WINDOWLOAD",function(){u||e.ajax(d,f.xhrPreloadOption)});f.extendUNDEFProp(k.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",
wmode:"transparent"});f.extendUNDEFProp(k.jwVars,{screencolor:"ffffffff",controlbar:"over"});f.extendUNDEFProp(k.jwAttrs,{bgcolor:"#000000"});h.jwEvents={View:{PLAY:function(a){var b=o(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;j(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(a){var b=o(a.id);if(b&&b._bufferEnd!=a.percentage){b.networkState=a.percentage==100?1:2;if(!b.duration){try{if(b.duration=b.jwapi.getPlaylist()[0].duration,
b.duration<=0)b.duration=p.NaN}catch(c){}b.duration&&(j(b._elem,"durationchange"),b._elemNodeName=="audio"&&this.META(e.extend({duration:b.duration},a),b))}if(b.ended)b.ended=!1;if(b.duration){b._bufferedEnd=a.percentage;b.buffered.length=1;if(a.percentage==100)b.networkState=1,b.readyState=4;e.event.trigger("progress",n,b._elem,!0)}}},META:function(a,b){if("duration"in a||"youtubequalitylevels"in a)if((b=b&&b.networkState?b:o(a.id))&&!b._metadata){b._metadata=!0;if(!b.duration||"duration"in a||!("youtubequalitylevels"in
a)){var c=b.duration;b.duration=a.duration;b.videoHeight=a.height||0;b.videoWidth=a.width||0;if(!b.networkState)b.networkState=2;if(b.readyState<1)b.readyState=1;c!==b.duration&&j(b._elem,"durationchange")}j(b._elem,"loadedmetadata")}},TIME:function(a){var b=o(a.id);if(b&&b.currentTime!==a.position){b.currentTime=a.position;if(b.readyState<2)b.readyState=2;if(b.ended)b.ended=!1;j(b._elem,"timeupdate")}},STATE:function(a){var b=o(a.id);if(b)switch(a.newstate){case "BUFFERING":if(b.readyState>1)b.readyState=
1;if(b.ended)b.ended=!1;j(b._elem,"waiting");break;case "PLAYING":b.paused=!1;b._ppFlag=!0;if(b.readyState<3)b.readyState=3,j(b._elem,"canplay");if(b.ended)b.ended=!1;j(b._elem,"playing");break;case "PAUSED":if(!b.paused&&!b.stopPlayPause)b.paused=!0,b._ppFlag=!0,j(b._elem,"pause");break;case "COMPLETED":if(b.readyState<4)b.readyState=4;b.ended=!0;j(b._elem,"ended")}}},Controller:{ERROR:function(a){o(a.id)&&h.setError(elem,a.message)},SEEK:function(a){var b=o(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play",
"false")}catch(c){}if(b.currentTime!=a.position)b.currentTime=a.position,j(b._elem,"timeupdate")}},VOLUME:function(a){var b=o(a.id);if(b&&(a=a.percentage/100,b.volume!=a))b.volume=a,j(b._elem,"volumechange")},MUTE:function(a){if(!c||!a.state){var b=o(a.id);if(b&&b.muted!=a.state)b.muted=a.state,j(b._elem,"volumechange")}}}};var g=function(a){e.each(h.jwEvents,function(b,c){e.each(c,function(c){a.jwapi["add"+b+"Listener"](c,"jQuery.webshims.mediaelement.jwEvents."+b+"."+c)})})},z=function(a){a&&(a._ppFlag===
n&&e.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if(a.isActive=="flash"&&(a._ppFlag===n||!a.paused))try{e(a._elem).play()}catch(b){}},1)},H=function(a){if(a&&a._elemNodeName=="video"){var b,c,d,m,s,l=function(l,h){if(h&&l&&!(h<1||l<1||a.isActive!="flash"))if(b&&(b.remove(),b=!1),clearTimeout(s),c=a._elem.style.width=="auto",d=a._elem.style.height=="auto",c||d){m=m||e(a._elem).getShadowElement();var f;c&&!d?(f=e(a._elem).height(),l*=f/h,h=f):!c&&d&&(f=e(a._elem).width(),h*=f/l,l=f);
m.css({width:l,height:h})}},h=function(){if(!(a.isActive!="flash"||e.prop(a._elem,"readyState"))){var h=e.prop(a._elem,"poster");if(h&&(c=a._elem.style.width=="auto",d=a._elem.style.height=="auto",c||d))b&&(b.remove(),b=!1),b=e('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),b.bind("load error alreadycomplete",function(){clearTimeout(s);e(this).unbind();var a=this,c=a.naturalWidth||a.width||a.offsetWidth,d=a.naturalHeight||a.height||a.offsetHeight;
d&&c?(l(c,d),a=null):setTimeout(function(){c=a.naturalWidth||a.width||a.offsetWidth;d=a.naturalHeight||a.height||a.offsetHeight;l(c,d);b&&(b.remove(),b=!1);a=null},9)}).prop("src",h).appendTo("body").each(function(){this.complete||this.error?e(this).triggerHandler("alreadycomplete"):(clearTimeout(s),s=setTimeout(function(){e(a._elem).triggerHandler("error")},9E3))})}};e(a._elem).bind("loadedmetadata",function(){l(e.prop(this,"videoWidth"),e.prop(this,"videoHeight"))}).bind("emptied",h).each(function(){e.prop(a._elem,
"readyState")?l(e.prop(this,"videoWidth"),e.prop(this,"videoHeight")):h()})}};e(r).bind("emptied",function(a){a=q(a.target);z(a)});var A;h.jwPlayerReady=function(a){var b=o(a.id);if(b&&b.jwapi){clearTimeout(A);b.jwData=a;if(b.wasSwfReady){var a=b.actionQueue.length,c=0,d;if(a&&b.isActive=="flash")for(;b.actionQueue.length&&a>c;)c++,d=b.actionQueue.shift(),b.jwapi[d.fn].apply(b.jwapi,d.args);if(b.actionQueue.length)b.actionQueue=[]}else a=parseFloat(a.version,10),(a<5.6||a>=6)&&f.warn("mediaelement-swf is only testet with jwplayer 5.6+"),
e.prop(b._elem,"volume",b.volume),e.prop(b._elem,"muted",b.muted),g(b);b.wasSwfReady=!0;z(b)}};var F=e.noop;if(D){var I={play:1,playing:1},B=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"].map(function(a){return a+".webshimspolyfill"}).join(" "),G=function(a){var b=f.data(a.target,"mediaelement");b&&(a.originalEvent&&a.originalEvent.type===a.type)==(b.activating=="flash")&&(a.stopImmediatePropagation(),I[a.type]&&b.isActive!=b.activating&&
e(a.target).pause())};e(r).bind(B,G);F=function(a){e(a).unbind(B).bind(B,G)}}h.setActive=function(a,b,c){c||(c=f.data(a,"mediaelement"));if(c&&c.isActive!=b)b!="html5"&&b!="flash"&&f.warn("wrong type for mediaelement activating: "+b),c.activating=b,e(a).pause(),f.data(a,"mediaelementError",!1),c.isActive=b,b=="flash"?e(a).hide().getShadowElement().show():e(a).show().getShadowElement().hide()};var J=function(){return function(a){if(a){for(var b=12,c=a.networkState;--b;)delete a[b];a.actionQueue=[];
a.buffered.length=0;c&&j(a._elem,"emptied")}}}();h.createSWF=function(a,b,c){if(E){u=!0;var g=e.extend({},k.jwVars,{image:e.prop(a,"poster")||"",file:b.srcProp}),i=e(a).data("jwvars")||{};if(c)h.setActive(a,"flash",c),J(c),c.currentSrc=b.srcProp,e.extend(g,i),k.changeJW(g,a,b,c,"load"),t(a,"sendEvent",["LOAD",g]);else{var s=e.prop(a,"controls"),l="jwplayer-"+f.getID(a),z=e.extend({},k.jwParams,e(a).data("jwparams")),j=a.nodeName.toLowerCase(),n=e.extend({},k.jwAttrs,{name:l,id:l},e(a).data("jwattrs")),
o=e('<div class="polyfill-'+j+'" id="wrapper-'+l+'"><div id="'+l+'"></div>').css({width:a.style.width||e(a).width(),height:a.style.height||e(a).height(),position:"relative"}).insertBefore(a),c=f.data(a,"mediaelement",f.objectCreate(x,{actionQueue:{value:[]},_elemNodeName:{value:j},_elem:{value:a},currentSrc:{value:b.srcProp},buffered:{value:{start:function(b){if(b>=c.buffered.length)f.error("buffered index size error");else return 0},end:function(b){if(b>=c.buffered.length)f.error("buffered index size error");
else return c.duration*c._bufferedEnd/100+c._bufferedStart},length:0}}}));D&&e.extend(c,{volume:e.prop(a,"volume"),muted:e.prop(a,"muted")});e.extend(g,{id:l,controlbar:s?k.jwVars.controlbar||"over":"none",icons:""+s},i,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});g.plugins?g.plugins+=","+d:g.plugins=d;f.addShadowDom(a,o);F(a);h.setActive(a,"flash",c);k.changeJW(g,a,b,c,"embed");H(c);C.embedSWF(m,l,"100%","100%","9.0.0",!1,g,z,n,function(b){if(b.success)c.jwapi=b.ref,s||e(b.ref).attr("tabindex",
"-1").css("outline","none"),A||(clearTimeout(A),A=setTimeout(function(){var a=e(b.ref);a[0].offsetWidth>1&&a[0].offsetHeight>1&&location.protocol.indexOf("file:")===0?f.warn("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):f.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){e(a).mediaLoad()},1)};var t=function(a,
b,c,d){return(d=d||q(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),d.actionQueue.length>10&&setTimeout(function(){d.actionQueue.length>5&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var b={},d,e=function(c){a=="audio"&&(c=="videoHeight"||c=="videoWidth")||(b[c]={get:function(){var b=q(this);if(b)return b[c];else if(d[c].prop._supget)return d[c].prop._supget.apply(this)},writeable:!1})},h=function(a,c){e(a);delete b[a].writeable;
b[a].set=c};h("volume",function(b){var a=q(this);if(a){if(b*=100,!isNaN(b)){(b<0||b>100)&&f.error("volume greater or less than allowed "+b/100);a.muted&&(c=!0);t(this,"sendEvent",["VOLUME",b],a);if(c){try{a.jwapi.sendEvent("mute","true")}catch(e){}c=!1}setTimeout(function(){if(!(a.volume==b||a.isActive!="flash"))a.volume=b,j(a._elem,"volumechange"),a=null},1)}}else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)});h("muted",function(b){var a=q(this);if(a)b=!!b,t(this,"sendEvent",
["mute",""+b],a),setTimeout(function(){if(!(a.muted==b||a.isActive!="flash"))a.muted=b,j(a._elem,"volumechange"),a=null},1);else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)});h("currentTime",function(b){var a=q(this);if(a){if(b*=1,!isNaN(b)){if(a.paused)clearTimeout(a.stopPlayPause),a.stopPlayPause=setTimeout(function(){a.paused=!0;a.stopPlayPause=!1},50);t(this,"sendEvent",["SEEK",""+b],a);if(a.paused){if(a.readyState>0)a.currentTime=b,j(a._elem,"timeupdate");try{a.jwapi.sendEvent("play",
"false")}catch(c){}}}}else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){b[a]={value:function(){var b=q(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),t(this,"sendEvent",["play",a=="play"],b),setTimeout(function(){if(b.isActive=="flash"&&(b._ppFlag=!0,b.paused!=(a!="play")))b.paused=a!="play",j(b._elem,a)},1);else if(d[a].prop._supvalue)return d[a].prop._supvalue.apply(this,arguments)}}});i.forEach(e);f.onNodeNamesPropertyModify(a,
"controls",function(a,b){t(this,b?"showControls":"hideControls")});d=f.defineNodeNameProperties(a,b,"prop")})});
(function(e,f,p){var r=f.audio&&f.video,n=!1;if(r){var k=document.createElement("video");f.videoBuffered="buffered"in k;n="loop"in k;f.videoBuffered||(p.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:f.videoBuffered,dependencies:["dom-support"]}),p.cfg.waitReady&&e.readyWait++,p.loader.loadScript("mediaelement-native-fix",function(){p.cfg.waitReady&&e.ready(!0)}))}e.webshims.ready("dom-support",function(e,f,k,p,u){var w=f.cfg.mediaelement,i=f.mediaelement,v=!k.swfobject||swfobject.hasFlashPlayerVersion("9.0.115"),
x=function(){f.ready("mediaelement-swf",function(){if(!i.createSWF)f.modules["mediaelement-swf"].test=!1,delete e.event.special["mediaelement-swfReady"],f.loader.loadList(["mediaelement-swf"])})},y=function(c,d){var c=e(c),m={src:c.attr("src")||"",elem:c,srcProp:c.prop("src")};if(!m.src)return m;var g=c.attr("type");if(g)m.type=g,m.container=e.trim(g.split(";")[0]);else if(d||(d=c[0].nodeName.toLowerCase(),d=="source"&&(d=(c.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),
g=i.getTypeForSrc(m.src,d))m.type=g,m.container=g,e.nodeName(c[0],"source")&&(f.warn("you should always provide a proper mime-type. "+m.src+" detected as: "+g),c.attr("type",g));if(g=c.attr("media"))m.media=g;return m};f.ready("WINDOWLOAD",function(){f.loader.loadList(["swfobject"])});f.ready("swfobject",function(){(v=swfobject.hasFlashPlayerVersion("9.0.115"))&&f.ready("WINDOWLOAD",x)});r&&f.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay",
"volumechange"]);i.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r"],"audio/wav":["wav"],"audio/x-m4a":["m4a"],"audio/x-m4p":["m4p"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],
"video/webm":["webm"]}};i.mimeTypes.source=e.extend({},i.mimeTypes.audio,i.mimeTypes.video);i.getTypeForSrc=function(c,d){if(c.indexOf("youtube.com/watch?")!=-1)return"video/youtube";var c=c.split("?")[0].split("."),c=c[c.length-1],f;e.each(i.mimeTypes[d],function(d,e){if(e.indexOf(c)!==-1)return f=d,!1});return f};i.srces=function(c,d){c=e(c);if(d)c.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(d)||(d=[d]),d.forEach(function(d){var e=p.createElement("source");typeof d=="string"&&
(d={src:d});e.setAttribute("src",d.src);d.type&&e.setAttribute("type",d.type);d.media&&e.setAttribute("media",d.media);c.append(e)});else{var d=[],f=c[0].nodeName.toLowerCase(),g=y(c,f);g.src?d.push(g):e("source",c).each(function(){g=y(this,f);g.src&&d.push(g)});return d}};e.fn.loadMediaSrc=function(c,d){return this.each(function(){d!==u&&(e(this).removeAttr("poster"),d&&e.attr(this,"poster",d));i.srces(this,c);e(this).mediaLoad()})};i.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime",
"video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube"];i.canSwfPlaySrces=function(c,d){var f="";v&&(c=e(c),d=d||i.srces(c),e.each(d,function(c,d){if(d.container&&d.src&&i.swfMimeTypes.indexOf(d.container)!=-1)return f=d,!1}));return f};i.canNativePlaySrces=function(c,d){var f="";r&&(c=e(c),d=d||i.srces(c),e.each(d,function(d,e){if(e.type&&
c.canPlayType(e.type))return f=e,!1}));return f};i.setError=function(c,d){d||(d="can't play sources");f.data(c,"mediaelementError",d);f.warn("mediaelementError: "+d);setTimeout(function(){f.data(c,"mediaelementError")&&e(c).trigger("mediaerror")},1)};var o=function(){var c;return function(d,e,g){f.ready("mediaelement-swf",function(){i.createSWF?i.createSWF(d,e,g):c||(c=!0,x(),o(d,e,g))})}}(),q=function(c,d,e,g,h){g=g||i.srces(c);f.data(c,"mediaelementError",!1);g.length&&(e||e!==!1&&d&&d.isActive==
"flash"?(e=i.canSwfPlaySrces(c,g))?o(c,e,d):h?i.setError(c):q(c,d,!1,g,!0):(e=i.canNativePlaySrces(c))?d&&d.isActive=="flash"&&i.setActive(c,"html5",d):h?i.setError(c):q(c,d,!0,g,!0))};e(p).bind("ended",function(c){var d=f.data(c.target,"mediaelement");(!n||d&&d.isActive!="html5"||e.prop(c.target,"loop"))&&setTimeout(function(){!e.prop(c.target,"paused")&&e.prop(c.target,"loop")&&e(c.target).prop("currentTime",0).play()},1)});n||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");var j=/^(?:embed|object)$/i;
f.addReady(function(c,d){e("video, audio",c).add(d.filter("video, audio")).each(function(){var c=this.parentNode;if(!c||!j.test(c.nodeName||""))q(this,!1,w.preferFlash||u)})});["audio","video"].forEach(function(c){var d=f.defineNodeNameProperty(c,"load",{prop:{value:function(){var c=f.data(this,"mediaelement");q(this,c);r&&(!c||c.isActive=="html5")&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}})});f.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);
