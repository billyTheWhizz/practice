//nav
$('#drop-down-icon').click(function(){
  $('.links').slideToggle();
});

$(window).resize(function(){
	if(window.innerWidth >= 480) {
		$(".links").removeAttr("style");
	}
})

//lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $background = $('<div id="background"></div>')
var $caption = $("<p></p>");

$overlay.append($image);
$background.append($caption)
$overlay.append($background);


$("body").append($overlay);


$(".gallery a").click(function(event){
  event.preventDefault();
  var href = $(this).attr("href");
  $image.attr("src", href);
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  $("body").addClass("no-scroll");
  $overlay.show();
});

$overlay.click(function(){
  $overlay.hide();
  $("body").removeClass("no-scroll");
});
