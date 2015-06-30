
$(document).ready(function(){
    $(".share-nav").on("click", function () {
      showInfo($(this), ".info-share");
    });
    $(".aquaintly-nav").on("click", function () {
      showInfo($(this), ".info-aquaintly");
    });
    $(".gnosis-nav").on("click", function () {
      showInfo($(this), ".info-gnosis");
    });
    $(".bio-nav").on("click", function () {
      showInfo($(this), ".info-bio");
    });
    $(".contact-nav").on("click", function () {
      showInfo($(this), ".info-contact");
    });

    var infoArray = [$(".info-bio"), $(".info-contact"), $(".info-gnosis"), $(".info-aquaintly"), $(".info-helio"), $(".info-share")];  

    function hideArray () {
      for (var i = 0; i < infoArray.length; i++) {
        infoArray[i].hide();
      }
    }
    function showInfo (thisElement,elementInfo) {
      hideArray();
      thisElement.closest(".page-wrapper").find(elementInfo).fadeToggle("slow");
    }
  });