"use strict";function mailto(){window.location.href="mailto:"+"naitsabes".split("").reverse().join("")+"@"+"krow.flovv".split("").reverse().join("")}!function(o){function a(){var a=o("header a");if(window.location.pathname.length>3)for(var i=window.location.origin+window.location.pathname,t=0;t<a.length;t++)a[t].href.indexOf(i)>-1&&o(a[t]).addClass("active")}o(document).ready(function(){smoothScroll.init(),o(".lazyload").addClass("lazy"),a();var i=o("body"),t=o("#root"),n=o("html, body"),e="fade";t.smoothState({anchors:"a.smooth",onBefore:function(a){window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.init=!1;var i=o("[data-viewport]").first().data("viewport"),t=a.data("target");i=i||0,t=t||0,e=i===t?"fade":i<t?"moveright":"moveleft"},onStart:{duration:500,render:function(){t.addClass("is-exiting"),n.animate({scrollTop:0})}},onProgress:{duration:0,render:function(){i.addClass("loading")}},onReady:{duration:0,render:function(t,n){t.html(n),a(),i.removeClass("loading"),t.removeClass("is-exiting"),t.removeClass("in-progress"),setTimeout(function(){o(".lazyload").addClass("lazy")},400)}}}).data("smoothState")})}(jQuery);