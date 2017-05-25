(function($) {
  "use strict";
  $(document).ready(function() {
    smoothScroll.init();
    $(".lazyload").addClass("lazy");
    updateActiveMenuItem();

    // Init here.
    var $body = $("body"),
      $page = $("#root"),
      $site = $("html, body"),
      transition = "fade",
      smoothState;

    smoothState = $page
      .smoothState({
        anchors: "a.smooth",
        onBefore: function($anchor, $container) {
          window.lazySizesConfig = window.lazySizesConfig || {};
          window.lazySizesConfig.init = false;

          var current = $("[data-viewport]").first().data("viewport"),
            target = $anchor.data("target");
          current = current ? current : 0;
          target = target ? target : 0;

          if (current === target) {
            transition = "fade";
          } else if (current < target) {
            transition = "moveright";
          } else {
            transition = "moveleft";
          }
        },
        onStart: {
          duration: 500,
          render: function(url, $container) {
            $page.addClass("is-exiting");
            $site.animate({ scrollTop: 0 });
          }
        },

        onProgress: {
          duration: 0,
          render: function(url, $container) {
            $body.addClass("loading");
          }
        },

        onReady: {
          duration: 0,
          render: function($container, $newContent) {
            $container.html($newContent);
            updateActiveMenuItem();
            $body.removeClass("loading");
            $container.removeClass("is-exiting");
            $container.removeClass("in-progress");
            setTimeout(() => {
              $(".lazyload").addClass("lazy");
            }, 400);
          }
        }
      })
      .data("smoothState");
  });

  function updateActiveMenuItem() {
    var $navLinks = $("header a");
    if (window.location.pathname.length > 3) {
      var location = window.location.origin + window.location.pathname;
      for (var x = 0; x < $navLinks.length; x++) {
        if ($navLinks[x].href.indexOf(location) > -1) {
          $($navLinks[x]).addClass("active");
        }
      }
    }
  }
})(jQuery);

function mailto() {
  var user = "naitsabes";
  var website = "krow.flovv";

  window.location.href =
    "mailto:" +
    user.split("").reverse().join("") +
    "@" +
    website.split("").reverse().join("");
}
