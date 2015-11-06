
// var width = $('.galimg').css('width');
// var height = $('.galimg').css('height');


$('.galimg').each(function() {

	console.log($ (this).css('width') );
	console.log($ (this).css('height') );

	var width = $(this).width();
	$(this).height(width)

});


