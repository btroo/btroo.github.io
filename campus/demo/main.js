$(document).ready(function(){
  $.UISlideout();
  $.UISlideout.populate([{resources:'Check-in'},{games:'Games'},{battle:'Battle!'},{redeem:'Redeem'}]);

  $('.unt').height($(window).height());

  var points = 30;
  $('.points').text(points.toString());
  $('li.i').click(function(){
  	points += 10;
  	$('.points').text(points.toString());
  });

  $('li.d').click(function(){
  	if((points - 10) < 0){
  		alert("Not enough points");
  	} else{
  		points -= 10;
  	}
  	$('.points').text(points.toString());
  });
});