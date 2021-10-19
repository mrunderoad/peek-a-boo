$(document).ready(function() {
  $(".clickWalrus").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".clickDobby").click(function() {
    $("#dobby-showing").fadeToggle();
    $("#dobby-hidden").fadeToggle();
  });
  $(".clickVol").click(function() {
    $(".volHidden").fadeToggle();
  });

  $("button#beach-bg").click(function() {
    $("body").removeClass();
    $("p").removeClass();
    $("body").addClass("beach");
    $("p").addClass("beachText");
  });
  $("button#pisa-bg").click(function() {
    $("body").removeClass();
    $("p").removeClass();
    $("body").addClass("pisa");
    $("p").addClass("pisaText");
  });
  $("button#mordor-bg").click(function() {
    $("body").removeClass();
    $("p").removeClass();
    $("body").addClass("mordor");
    $("p").addClass("mordorText");
  });
});