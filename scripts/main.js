!function(){
//scrolling


$(".links li:nth-child(1) a").css("background-color","#DCDCDC");
var array = []

function recordPositions(){
  array.push(-10);
  $('.point').each(function() {
       array.push($(this).offset()["top"] - 8);
  });
  array.push($(document).height());
}
recordPositions()

$(window).resize(function(){
  array = []
  recordPositions()
})


$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  for(var i=0; i < array.length; i++){
    if (array[i] < scrollTop && scrollTop < (array[i+1])){
      $(".links li a").css("background-color", "white");
      $(".links li:nth-child(" + (i + 1) + ") a").css("background-color","#DCDCDC");
    };
  };
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing');
	});
});

//nav
$('#drop-down-icon').click(function(){
  $('.links').slideToggle();
});

$(window).resize(function(){
	if(window.innerWidth >= 480) {
		$(".links").removeAttr("style");
	}
})

//parallex
$(window).bind('scroll',function(){
   	parallaxScroll();
});

function parallaxScroll(){
		var scrolledY = $(window).scrollTop();
    $('.sub-title').css('top',''+((scrolledY*0.5))+'px');
	};

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
}()
