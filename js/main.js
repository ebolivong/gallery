
// var width = $('.galimg').css('width');
// var height = $('.galimg').css('height');


$('.galimg').each(function() {

	console.log($ (this).css('width') );
	console.log($ (this).css('height') );

	var width = $(this).width();
	var height = $(this).height(width);
	var currentimg = $("img")


		if (currentimg.width > currentimg.height) {
		currentimg.addClass('.landscape');
	}

		else {
		currentimg.addClass('.portrait');
	}

});

