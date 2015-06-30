Skip to content
This repository  
Pull requests
Issues
Gist
 @melodicodyssey
 Unwatch 1
  Star 0
  Fork 1
melodicodyssey/Steve-Portfolio---Redesigned
forked from azureowl/Steve-Portfolio---Redesigned
 branch: master  Steve-Portfolio---Redesigned/StevePortfolio.js
@azureowlazureowl an hour ago Edit copy, separated CSS and js in new files
1 contributor
RawBlameHistory     29 lines (27 sloc)  0.932 kB
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
Status API Training Shop Blog About Help
© 2015 GitHub, Inc. Terms Privacy Security Contact