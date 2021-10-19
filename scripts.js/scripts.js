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
    $("body").addClass("beach");
  });
  $("button#pisa-bg").click(function() {
    $("body").removeClass();
    $("body").addClass("pisa");
  });
  $("button#mordor-bg").click(function() {
    $("body").removeClass();
    $("body").addClass("mordor");
  });
});