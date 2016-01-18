var randomPrice = Math.round(Math.random() * 100); 

// $('#random-price').text(randomPrice);

$(document).ready(function(){

	$('#random-price').text(randomPrice);
	
	$('#gen-btn').click(function(){
		randomPrice = Math.round(Math.random() * 100); 
		$('#random-price').text(randomPrice);
		$('#book-title').css({
			'color':'#f48064',
			'font-family':'Arial',
			'font-size':'3rem',
			'text-align':'center',});
	});

});

$('#grn-btn').click(function(){
	$('#book-title').css({
		'color':'green',
		'font-family':'Arial',
		'font-size':'4rem',});
});
$('#book-title').css({
	'color':'grey',
	'font-family':'Arial',
	'font-size':'4rem',});

$('#bkgd').click(function(){
	$('body').css({
		'background-color':'#f48064',
	});

// $('#hide').click(function() {
// 	$('.books').hide();
// })
// $('#show').click(function() {
// 	$('.books').show();
// })

$('#hide').click(function() {
	$('.books').fadeOut();
});
$('#show').click(function() {
	$('.books').fadeIn();
});

$('.bxslider').bxSlider();
});