	$(document).on('ready', function() {
	  $(".center").slick({
		dots:false,
		infinite: true,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		//arrows: false,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				centerMode: false,
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				centerMode: false,
				centerPadding: '40px',
				slidesToShow: 1
			  }
			}
		 ]
	  });
	});