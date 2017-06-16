$( document ).ready(function() {
  $("#menu").click(function(){
    $("#menu-wrapper").addClass("open");
    $(this).hide();
    $("#close").addClass("open");
  });
  $("#close").click(function(){
    $(this).removeClass("open");
    $("#menu-wrapper").removeClass("open");
    $("#menu").show();
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $(".animate").addClass("loaded");
    }
    else{
      $(".animate").removeClass("loaded");
    }
  });
});
