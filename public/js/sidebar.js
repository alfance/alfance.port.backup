
function sidebarTog(){
$('.chap-title').hide();
  $(".sidebar-wrapper").hover(function(e) {
      e.preventDefault();
      $(".wrapper, .sidebar-nav, .sidebar-wrapper, .sidebar-line").toggleClass("toggled");
      var sidebarLen = $('.sidebar-wrapper').width();
      var sidebar = $('.sidebar-wrapper');

    //    console.log ($('.sidebar-wrapper').width());
      if(sidebarLen < 50){
        //  $(sidebar).css('border','3px solid red');
         $(".chap-title").show();
         $(".nav-title-image").show();
         $(".nav-title-image-S").hide();
         $(".NavIcon").hide();
      }
      else if(sidebarLen > 50){
        $(".chap-title").hide();
        $(".nav-title-image").hide();
        $(".nav-title-image-S").show();
        $(".NavIcon").show();
      }
  });
}

$( document ).ready(function() {
sidebarTog();
$(".nav-title-image-S").show();
$(".nav-title-image").hide();
$(".NavIcon").show();
});
