$(document).ready(function () {
  
  
    $("#desaparecer").click(function () {
    $(this).hide();
  });

  $("input").focus(function(){
    $(this).css("background-color", "#F2EEE5");
  });
  $("input").blur(function(){
    $(this).css("background-color", "#F2EEE5");
  });


  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
});
