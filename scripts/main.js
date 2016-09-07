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
  $overlay.show();
});

$overlay.click(function(){
  $overlay.hide();
});
