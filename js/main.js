
// var width = $('.galimg').css('width');
// var height = $('.galimg').css('height');


$('.galimg').each(function() {

	console.log($ (this).css('width') );
	console.log($ (this).css('height') );

	var width = $(this).width();
	var height = $(this).height(width);

			if (width > height) {
	$('.galimg').addClass('.landscape');
}

	if (height > width) {
	$('.galimg').addClass('.portrait');
}
});

