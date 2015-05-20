$(document).ready(function() {

  setTimeout(function() {
  // $(".logo").show().addClass("animated fadeInLeft");

    $(".right-panel").show().addClass("animated fadeInRight");
    $(".left-panel").show().addClass("animated fadeInLeft");
    $(".close").css("visibility", "visible").addClass("animated fadeInRight");

  }, 1000);

  setTimeout(function() {
    $(".logo").animate({ opacity: "show" });
  }, 1300);
});
