(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

	});

	           /* affix the navbar after scroll below header */
	$('#nav').affix({
	     offset: {
	       top: $('header').height()-$('#nav').height()
	     }
	});

	/* highlight the top nav as scrolling occurs */
	$('body').scrollspy({ target: '#nav' })

	/* smooth scrolling for scroll to top */
	$('.scroll-top').click(function(){
	 $('body,html').animate({scrollTop:0},1000);
	})

	/* smooth scrolling for nav sections */
	$('#nav .navbar-nav li>a').click(function(){
	 var link = $(this).attr('href');
	 var posi = $(link).offset().top;
	 $('body,html').animate({scrollTop:posi},700);
	});

})(jQuery);

/*$(document).ready(function() {

          //  affix the navbar after scroll below header 
$('#nav').affix({
     offset: {
       top: $('header').height()-$('#nav').height()
     }
});

//highlight the top nav as scrolling occurs
$('body').scrollspy({ target: '#nav' })

// smooth scrolling for scroll to top
$('.scroll-top').click(function(){
 $('body,html').animate({scrollTop:0},1000);
})

// smooth scrolling for nav sections
$('#nav .navbar-nav li>a').click(function(){
 var link = $(this).attr('href');
 var posi = $(link).offset().top;
 $('body,html').animate({scrollTop:posi},700);
});
  });
  /*fin navbar*/
