var $body = $('body');

$('html').on ('keydown', function (){
  var $div = $('<div>');

  $body.append($div);
  $div.addClass('ball');
  $div.css('left', Math.random() * 1000);
  $div.css('top', Math.random() * 1000);
});
