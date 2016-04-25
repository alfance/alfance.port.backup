
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
      }
      if(sidebarLen > 50){
        $(".chap-title").hide();
      }
  });
}

$( document ).ready(function() {
sidebarTog();
imageGrid();
});
