jQuery.webshims.register("mediaelement-swf",function(e,f,p,r,q,n){var k=f.mediaelement,C=p.swfobject,D=Modernizr.audio&&Modernizr.video,E=C.hasFlashPlayerVersion("9.0.115"),u,w={paused:!0,ended:!1,currentSrc:"",duration:p.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:q},h=Object.keys(w),v={currentTime:0,volume:1,muted:!1};Object.keys(v);var x=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,currentTime:0,_ppFlag:q},
w,v),y=/^jwplayer-/,m=function(a){if(a=r.getElementById(a.replace(y,"")))return a=f.data(a,"mediaelement"),a.isActive=="flash"?a:null},o=function(a){return(a=f.data(a,"mediaelement"))&&a.isActive=="flash"?a:null},i=function(a,b){b=e.Event(b);b.preventDefault();e.event.trigger(b,q,a)},c,d=f.cfg.basePath+"swf/jwwebshims.swf",j=f.cfg.basePath+"jwplayer/player.swf";E&&f.ready("WINDOWLOAD",function(){u||e.ajax(d,f.xhrPreloadOption)});f.extendUNDEFProp(n.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",
wmode:"transparent"});f.extendUNDEFProp(n.jwVars,{screencolor:"ffffffff",controlbar:"over"});f.extendUNDEFProp(n.jwAttrs,{bgcolor:"#000000"});k.jwEvents={View:{PLAY:function(a){var b=m(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;i(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(a){var b=m(a.id);if(b&&b._bufferEnd!=a.percentage){b.networkState=a.percentage==100?1:2;if(!b.duration){try{if(b.duration=b.jwapi.getPlaylist()[0].duration,
b.duration<=0)b.duration=p.NaN}catch(c){}b.duration&&(i(b._elem,"durationchange"),b._elemNodeName=="audio"&&this.META(e.extend({duration:b.duration},a),b))}if(b.ended)b.ended=!1;if(b.duration){b._bufferedEnd=a.percentage;b.buffered.length=1;if(a.percentage==100)b.networkState=1,b.readyState=4;e.event.trigger("progress",q,b._elem,!0)}}},META:function(a,b){if("duration"in a||"youtubequalitylevels"in a)if((b=b&&b.networkState?b:m(a.id))&&!b._metadata){b._metadata=!0;if(!b.duration||"duration"in a||!("youtubequalitylevels"in
a)){var c=b.duration;b.duration=a.duration;b.videoHeight=a.height||0;b.videoWidth=a.width||0;if(!b.networkState)b.networkState=2;if(b.readyState<1)b.readyState=1;c!==b.duration&&i(b._elem,"durationchange")}i(b._elem,"loadedmetadata")}},TIME:function(a){var b=m(a.id);if(b&&b.currentTime!==a.position){b.currentTime=a.position;if(b.readyState<2)b.readyState=2;if(b.ended)b.ended=!1;i(b._elem,"timeupdate")}},STATE:function(a){var b=m(a.id);if(b)switch(a.newstate){case "BUFFERING":if(b.readyState>1)b.readyState=
1;if(b.ended)b.ended=!1;i(b._elem,"waiting");break;case "PLAYING":b.paused=!1;b._ppFlag=!0;if(b.readyState<3)b.readyState=3,i(b._elem,"canplay");if(b.ended)b.ended=!1;i(b._elem,"playing");break;case "PAUSED":if(!b.paused&&!b.stopPlayPause)b.paused=!0,b._ppFlag=!0,i(b._elem,"pause");break;case "COMPLETED":if(b.readyState<4)b.readyState=4;b.ended=!0;i(b._elem,"ended")}}},Controller:{ERROR:function(a){m(a.id)&&k.setError(elem,a.message)},SEEK:function(a){var b=m(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play",
"false")}catch(c){}if(b.currentTime!=a.position)b.currentTime=a.position,i(b._elem,"timeupdate")}},VOLUME:function(a){var b=m(a.id);if(b&&(a=a.percentage/100,b.volume!=a))b.volume=a,i(b._elem,"volumechange")},MUTE:function(a){if(!c||!a.state){var b=m(a.id);if(b&&b.muted!=a.state)b.muted=a.state,i(b._elem,"volumechange")}}}};var g=function(a){e.each(k.jwEvents,function(b,c){e.each(c,function(c){a.jwapi["add"+b+"Listener"](c,"jQuery.webshims.mediaelement.jwEvents."+b+"."+c)})})},z=function(a){a&&(a._ppFlag===
q&&e.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if(a.isActive=="flash"&&(a._ppFlag===q||!a.paused))try{e(a._elem).play()}catch(b){}},1)},H=function(a){if(a&&a._elemNodeName=="video"){var b,c,d,j,s,l=function(l,k){if(k&&l&&!(k<1||l<1||a.isActive!="flash"))if(b&&(b.remove(),b=!1),clearTimeout(s),c=a._elem.style.width=="auto",d=a._elem.style.height=="auto",c||d){j=j||e(a._elem).getShadowElement();var f;c&&!d?(f=e(a._elem).height(),l*=f/k,k=f):!c&&d&&(f=e(a._elem).width(),k*=f/l,l=f);
j.css({width:l,height:k})}},k=function(){if(!(a.isActive!="flash"||e.prop(a._elem,"readyState"))){var j=e.prop(a._elem,"poster");if(j&&(c=a._elem.style.width=="auto",d=a._elem.style.height=="auto",c||d))b&&(b.remove(),b=!1),b=e('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),b.bind("load error alreadycomplete",function(){clearTimeout(s);e(this).unbind();var a=this,c=a.naturalWidth||a.width||a.offsetWidth,d=a.naturalHeight||a.height||a.offsetHeight;
d&&c?(l(c,d),a=null):setTimeout(function(){c=a.naturalWidth||a.width||a.offsetWidth;d=a.naturalHeight||a.height||a.offsetHeight;l(c,d);b&&(b.remove(),b=!1);a=null},9)}).prop("src",j).appendTo("body").each(function(){this.complete||this.error?e(this).triggerHandler("alreadycomplete"):(clearTimeout(s),s=setTimeout(function(){e(a._elem).triggerHandler("error")},9E3))})}};e(a._elem).bind("loadedmetadata",function(){l(e.prop(this,"videoWidth"),e.prop(this,"videoHeight"))}).bind("emptied",k).each(function(){e.prop(a._elem,
"readyState")?l(e.prop(this,"videoWidth"),e.prop(this,"videoHeight")):k()})}};e(r).bind("emptied",function(a){a=o(a.target);z(a)});var A;k.jwPlayerReady=function(a){var b=m(a.id);if(b&&b.jwapi){clearTimeout(A);b.jwData=a;if(b.wasSwfReady){var a=b.actionQueue.length,c=0,d;if(a&&b.isActive=="flash")for(;b.actionQueue.length&&a>c;)c++,d=b.actionQueue.shift(),b.jwapi[d.fn].apply(b.jwapi,d.args);if(b.actionQueue.length)b.actionQueue=[]}else a=parseFloat(a.version,10),(a<5.6||a>=6)&&f.warn("mediaelement-swf is only testet with jwplayer 5.6+"),
e.prop(b._elem,"volume",b.volume),e.prop(b._elem,"muted",b.muted),g(b);b.wasSwfReady=!0;z(b)}};var F=e.noop;if(D){var I={play:1,playing:1},B=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"].map(function(a){return a+".webshimspolyfill"}).join(" "),G=function(a){var b=f.data(a.target,"mediaelement");b&&(a.originalEvent&&a.originalEvent.type===a.type)==(b.activating=="flash")&&(a.stopImmediatePropagation(),I[a.type]&&b.isActive!=b.activating&&
e(a.target).pause())};e(r).bind(B,G);F=function(a){e(a).unbind(B).bind(B,G)}}k.setActive=function(a,b,c){c||(c=f.data(a,"mediaelement"));if(c&&c.isActive!=b)b!="html5"&&b!="flash"&&f.warn("wrong type for mediaelement activating: "+b),c.activating=b,e(a).pause(),f.data(a,"mediaelementError",!1),c.isActive=b,b=="flash"?e(a).hide().getShadowElement().show():e(a).show().getShadowElement().hide()};var J=function(){return function(a){if(a){for(var b=12,c=a.networkState;--b;)delete a[b];a.actionQueue=[];
a.buffered.length=0;c&&i(a._elem,"emptied")}}}();k.createSWF=function(a,b,c){if(E){u=!0;var g=e.extend({},n.jwVars,{image:e.prop(a,"poster")||"",file:b.srcProp}),h=e(a).data("jwvars")||{};if(c)k.setActive(a,"flash",c),J(c),c.currentSrc=b.srcProp,e.extend(g,h),n.changeJW(g,a,b,c,"load"),t(a,"sendEvent",["LOAD",g]);else{var s=e.prop(a,"controls"),l="jwplayer-"+f.getID(a),z=e.extend({},n.jwParams,e(a).data("jwparams")),i=a.nodeName.toLowerCase(),m=e.extend({},n.jwAttrs,{name:l,id:l},e(a).data("jwattrs")),
o=e('<div class="polyfill-'+i+'" id="wrapper-'+l+'"><div id="'+l+'"></div>').css({width:a.style.width||e(a).width(),height:a.style.height||e(a).height(),position:"relative"}).insertBefore(a),c=f.data(a,"mediaelement",f.objectCreate(x,{actionQueue:{value:[]},_elemNodeName:{value:i},_elem:{value:a},currentSrc:{value:b.srcProp},buffered:{value:{start:function(b){if(b>=c.buffered.length)f.error("buffered index size error");else return 0},end:function(b){if(b>=c.buffered.length)f.error("buffered index size error");
else return c.duration*c._bufferedEnd/100+c._bufferedStart},length:0}}}));D&&e.extend(c,{volume:e.prop(a,"volume"),muted:e.prop(a,"muted")});e.extend(g,{id:l,controlbar:s?n.jwVars.controlbar||"over":"none",icons:""+s},h,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});g.plugins?g.plugins+=","+d:g.plugins=d;f.addShadowDom(a,o);F(a);k.setActive(a,"flash",c);n.changeJW(g,a,b,c,"embed");H(c);C.embedSWF(j,l,"100%","100%","9.0.0",!1,g,z,m,function(b){if(b.success)c.jwapi=b.ref,s||e(b.ref).attr("tabindex",
"-1").css("outline","none"),A||(clearTimeout(A),A=setTimeout(function(){var a=e(b.ref);a[0].offsetWidth>1&&a[0].offsetHeight>1&&location.protocol.indexOf("file:")===0?f.warn("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):f.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){e(a).mediaLoad()},1)};var t=function(a,
b,c,d){return(d=d||o(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),d.actionQueue.length>10&&setTimeout(function(){d.actionQueue.length>5&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var b={},d,e=function(c){a=="audio"&&(c=="videoHeight"||c=="videoWidth")||(b[c]={get:function(){var b=o(this);if(b)return b[c];else if(d[c].prop._supget)return d[c].prop._supget.apply(this)},writeable:!1})},j=function(a,c){e(a);delete b[a].writeable;
b[a].set=c};j("volume",function(b){var a=o(this);if(a){if(b*=100,!isNaN(b)){(b<0||b>100)&&f.error("volume greater or less than allowed "+b/100);a.muted&&(c=!0);t(this,"sendEvent",["VOLUME",b],a);if(c){try{a.jwapi.sendEvent("mute","true")}catch(e){}c=!1}setTimeout(function(){if(!(a.volume==b||a.isActive!="flash"))a.volume=b,i(a._elem,"volumechange"),a=null},1)}}else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)});j("muted",function(b){var a=o(this);if(a)b=!!b,t(this,"sendEvent",
["mute",""+b],a),setTimeout(function(){if(!(a.muted==b||a.isActive!="flash"))a.muted=b,i(a._elem,"volumechange"),a=null},1);else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)});j("currentTime",function(b){var a=o(this);if(a){if(b*=1,!isNaN(b)){if(a.paused)clearTimeout(a.stopPlayPause),a.stopPlayPause=setTimeout(function(){a.paused=!0;a.stopPlayPause=!1},50);t(this,"sendEvent",["SEEK",""+b],a);if(a.paused){if(a.readyState>0)a.currentTime=b,i(a._elem,"timeupdate");try{a.jwapi.sendEvent("play",
"false")}catch(c){}}}}else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){b[a]={value:function(){var b=o(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),t(this,"sendEvent",["play",a=="play"],b),setTimeout(function(){if(b.isActive=="flash"&&(b._ppFlag=!0,b.paused!=(a!="play")))b.paused=a!="play",i(b._elem,a)},1);else if(d[a].prop._supvalue)return d[a].prop._supvalue.apply(this,arguments)}}});h.forEach(e);f.onNodeNamesPropertyModify(a,
"controls",function(a,b){t(this,b?"showControls":"hideControls")});d=f.defineNodeNameProperties(a,b,"prop")})});
(function(e,f,p){var r=f.audio&&f.video,q=!1;if(r){var n=document.createElement("video");f.videoBuffered="buffered"in n;q="loop"in n;f.videoBuffered||(p.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:f.videoBuffered,dependencies:["dom-support"]}),p.cfg.waitReady&&e.readyWait++,p.loader.loadScript("mediaelement-native-fix",function(){p.cfg.waitReady&&e.ready(!0)}))}e.webshims.ready("dom-support",function(e,f,n,p,u){var w=f.cfg.mediaelement,h=f.mediaelement,v=!n.swfobject||swfobject.hasFlashPlayerVersion("9.0.115"),
x=function(){f.ready("mediaelement-swf",function(){if(!h.createSWF)f.modules["mediaelement-swf"].test=!1,delete e.event.special["mediaelement-swfReady"],f.loader.loadList(["mediaelement-swf"])})},y=function(c,d){var c=e(c),j={src:c.attr("src")||"",elem:c,srcProp:c.prop("src")};if(!j.src)return j;var g=c.attr("type");if(g)j.type=g,j.container=e.trim(g.split(";")[0]);else if(d||(d=c[0].nodeName.toLowerCase(),d=="source"&&(d=(c.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),
g=h.getTypeForSrc(j.src,d))j.type=g,j.container=g,e.nodeName(c[0],"source")&&(f.warn("you should always provide a proper mime-type. "+j.src+" detected as: "+g),c.attr("type",g));if(g=c.attr("media"))j.media=g;return j};f.ready("WINDOWLOAD",function(){f.loader.loadList(["swfobject"])});f.ready("swfobject",function(){(v=swfobject.hasFlashPlayerVersion("9.0.115"))&&f.ready("WINDOWLOAD",x)});r&&f.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay",
"volumechange"]);h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r"],"audio/wav":["wav"],"audio/x-m4a":["m4a"],"audio/x-m4p":["m4p"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],
"video/webm":["webm"]}};h.mimeTypes.source=e.extend({},h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(c,d){if(c.indexOf("youtube.com/watch?")!=-1)return"video/youtube";var c=c.split("?")[0].split("."),c=c[c.length-1],f;e.each(h.mimeTypes[d],function(d,e){if(e.indexOf(c)!==-1)return f=d,!1});return f};h.srces=function(c,d){c=e(c);if(d)c.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(d)||(d=[d]),d.forEach(function(d){var e=p.createElement("source");typeof d=="string"&&
(d={src:d});e.setAttribute("src",d.src);d.type&&e.setAttribute("type",d.type);d.media&&e.setAttribute("media",d.media);c.append(e)});else{var d=[],f=c[0].nodeName.toLowerCase(),g=y(c,f);g.src?d.push(g):e("source",c).each(function(){g=y(this,f);g.src&&d.push(g)});return d}};e.fn.loadMediaSrc=function(c,d){return this.each(function(){d!==u&&(e(this).removeAttr("poster"),d&&e.attr(this,"poster",d));h.srces(this,c);e(this).mediaLoad()})};h.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime",
"video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube"];h.canSwfPlaySrces=function(c,d){var f="";v&&(c=e(c),d=d||h.srces(c),e.each(d,function(c,d){if(d.container&&d.src&&h.swfMimeTypes.indexOf(d.container)!=-1)return f=d,!1}));return f};h.canNativePlaySrces=function(c,d){var f="";r&&(c=e(c),d=d||h.srces(c),e.each(d,function(d,e){if(e.type&&
c.canPlayType(e.type))return f=e,!1}));return f};h.setError=function(c,d){d||(d="can't play sources");f.data(c,"mediaelementError",d);f.warn("mediaelementError: "+d);setTimeout(function(){f.data(c,"mediaelementError")&&e(c).trigger("mediaerror")},1)};var m=function(){var c;return function(d,e,g){f.ready("mediaelement-swf",function(){h.createSWF?h.createSWF(d,e,g):c||(c=!0,x(),m(d,e,g))})}}(),o=function(c,d,e,g,i){g=g||h.srces(c);f.data(c,"mediaelementError",!1);g.length&&(e||e!==!1&&d&&d.isActive==
"flash"?(e=h.canSwfPlaySrces(c,g))?m(c,e,d):i?h.setError(c):o(c,d,!1,g,!0):(e=h.canNativePlaySrces(c))?d&&d.isActive=="flash"&&h.setActive(c,"html5",d):i?h.setError(c):o(c,d,!0,g,!0))};e(p).bind("ended",function(c){var d=f.data(c.target,"mediaelement");(!q||d&&d.isActive!="html5"||e.prop(c.target,"loop"))&&setTimeout(function(){!e.prop(c.target,"paused")&&e.prop(c.target,"loop")&&e(c.target).prop("currentTime",0).play()},1)});q||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");var i=/^(?:embed|object)$/i;
f.addReady(function(c,d){e("video, audio",c).add(d.filter("video, audio")).each(function(){var c=this.parentNode;if(!c||!i.test(c.nodeName||""))o(this,!1,w.preferFlash||u)})});["audio","video"].forEach(function(c){var d=f.defineNodeNameProperty(c,"load",{prop:{value:function(){var c=f.data(this,"mediaelement");o(this,c);r&&(!c||c.isActive=="html5")&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}})});f.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);
