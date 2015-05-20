$(document).ready(function() {

  setTimeout(function() {
    $(".right-panel").show().addClass("animated fadeInRight");
    $(".left-panel").show().addClass("animated fadeInLeft");
    $(".close").css("visibility", "visible").addClass("animated fadeInRight");

  }, 1000);

  setTimeout(function() {
    $(".logo").animate({ opacity: "show" });
  }, 1300);

  $(".close").click(function() {
    $(".right-panel").show().addClass("animated fadeOutRight");
    $(".left-panel").show().addClass("animated fadeOutLeft");
    $(".close").css("visibility", "visible").addClass("animated fadeOutRight");
  });
});
