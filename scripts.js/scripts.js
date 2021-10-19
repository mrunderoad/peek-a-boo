$(document).ready(function() {
  $(".clickWalrus").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".clickDobby").click(function() {
    $("#dobby-showing").fadeToggle();
    $("#dobby-hidden").fadeToggle();
  });
});