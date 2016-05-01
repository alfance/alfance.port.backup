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

switch (pick) {
	case 1:
        siteColor = green;
		break;
	case 2:
        siteColor = red;
		break;
	case 3:
        siteColor = yellow;
		break;
	case 4:
        siteColor = black;
		break;
    case 5:
        siteColor = blue;
		break;
    case 6:
        siteColor = pink;
		break;
    case 7:
        siteColor = purple;
        break;
    case 8:
        siteColor = orange;
        break;
    case 9:
        siteColor = yellow2;
        break;
    case 10:
        siteColor = blue2;
        break;
	default:
        siteColor = black;
}
    $(".st0").css('fill',siteColor[1]);
    $(".st2").css('fill',siteColor[2]);
    $(".st1").css('fill',siteColor[3]);
    $(".st3").css('fill',siteColor[4]);
    $(".NavIcon").css({'background-color': siteColor[0],
                    'fill':siteColor[2],});
    $('.tabActive').css('background-color',siteColor[0]);
}
