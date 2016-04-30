// $(window).on('resize',imageGrid);
// $(window).load(imageGrid);
//
// $('.sidebar-nav').children().click(function() {
//     imageGrid();
// });

// function imageGrid() {
//     var $vw = $('.wrapper').height();
//     var $imageEach = $('.image-grid-each');
//     var image = $('.image-grid-each img');
//
//         // slice every 3 images to make a row.
//         if ($vw > 400)  {
//             for (var i = 0; i < $imageEach.length; i += 3) {
//                 $imageEach.slice(i, i+3).wrapAll("<div class='image-grid-slice'></div>");
//             }
//         }
//         //adjust the margin according to screen size.
//         if ($vw < 700) {
//             $($imageEach).css('margin','7px 7px');
//         }
//         else if ($vw > 700) {
//             $($imageEach).css('margin','14px 14px');
//         }
//     }
    // $('.image-grid-each').each(function(i){
    //     var $object_bottom = $(this).offset().top + $(this).height();
    //     var $object_right = $(this).offset().left + $(this).width();
    //     var $object_top = $(this).offset().top;
    //
    //     if($vw < $object_bottom){
    //         $(this).css({
    //
    //         });
    //     }
    //     console.log($object_right);
    // });

$(function() {

    $("html, body").mousewheel(function(event, delta) {
        var mult = 1;
        var $this = $(this);
        if (event.timeStamp - $this.data('oldtimeStamp') < 1000) {
            //calculate easing here
            mult = 1000 / (event.timeStamp - $this.data('oldtimeStamp'));
        }
        $this.data('oldtimeStamp', event.timeStamp);
        this.scrollLeft -= (delta) * mult;
        event.preventDefault();
    });
});

var green = ["#fff", "#98D1D1", "#16A0A1", "#154B4C", "#020101"];
var red = ["#fff", "#EE3C2F", "#B50D02", "#621A15", "#020101"];
var yellow = ["#fff", "#E0F53B", "#B2B515", "#727307", "#020101"];
var black = ["#fff", "#C4C4C4", "#939393", "#565656", "#020101"];
var blue = ["#fff", "#93C6F5", "#3F65B5", "#0C2973", "#020101"];
var pink = ["#fff", "#F59A87", "#B55743", "#732423", "#020101"];
var purple = ["#fff", "#E8A8D2", "#AB4C9B", "#5C2251", "#020101"];
var orange = ["#fff", "#F0AB4F", "#C53913", "#65170F", "#020101"];
var yellow2 = ["#fff", "#FFE53C", "#CC9D0E", "#917005", "#020101"];
var blue2 = ["#fff", "#A7E9D0", "#64B4D1", "#244F98", "#020101"];

// 10 in total now

var siteColor = [];

$(window).load(randomColor);

function randomColor() {
var pick = Math.floor((Math.random() * 10) + 1);
console.log(pick);

switch (pick) {
	case 1:
        siteColor = green;
		console.log(siteColor);
		break;
	case 2:
        siteColor = red;
		console.log(siteColor);
		break;
	case 3:
        siteColor = yellow;
        console.log(siteColor);
		break;
	case 4:
        siteColor = black;
        console.log(siteColor);
		break;
    case 5:
        siteColor = blue;
        console.log(siteColor);
		break;
    case 6:
        siteColor = pink;
        console.log(siteColor);
		break;
    case 7:
        siteColor = purple;
        console.log(siteColor);
        break;
    case 8:
        siteColor = orange;
        console.log(siteColor);
        break;
    case 9:
        siteColor = yellow2;
        console.log(siteColor);
        break;
    case 10:
        siteColor = blue2;
        console.log(siteColor);
        break;
	default:
        siteColor = black;
        console.log(siteColor);
}
    $(".st0").css('fill',siteColor[1]);
    $(".st2").css('fill',siteColor[2]);
    $(".st1").css('fill',siteColor[3]);
    $(".st3").css('fill',siteColor[4]);
    $(".NavIcon").css({'background-color': siteColor[0],
                    'fill':siteColor[2],});
    $('.tabActive').css('background-color',siteColor[0]);
}


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
