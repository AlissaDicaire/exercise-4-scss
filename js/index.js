// JavaScript Document

$('h1, h2, h3, h4, h5, h6').each(function (){
  var text = $(this).html().split(' '),
      length = text.length,
      result = []; 
  for (var i=0; i<length; i++) {
    result[i] = '<span>' + text[i] + '</span>';
  }
  $(this).html(result.join(' '));
});