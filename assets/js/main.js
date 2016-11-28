;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	var sliderMain = function() {
		if(Modernizr.csstransitions) {
			$('#hero-slider .flexslider').flexslider({
				animation: "fade",
				slideshowSpeed: 5000,
				directionNav: true,
				start: function(){
					setTimeout(function(){
						$('.slider-text').removeClass('animated fadeInUp');
						$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
					}, 500);
				},
				before: function(){
					setTimeout(function(){
						$('.slider-text').removeClass('animated fadeInUp');
						$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
					}, 500);
				}
	  	});
		} else {
			// support for browsers that don't have css3 transitions
			$('#hero-slider .flexslider').flexslider({
				animation: "fade",
				slideshowSpeed: 5000,
				directionNav: true,
				start: function(){
					setTimeout(function(){
						$('.slider-text').animate({opacity: 1}, 1000)
					}, 500);
				}
	  	});
		}
	  	

	  	$('#hero-slider .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#hero-slider .flexslider .slides > li').css('height', $(window).height());	
	  	});

	};

	var centerBlock = function() {
		$('.fh5co-section-with-image .fh5co-box').css('margin-top', -($('.fh5co-section-with-image .fh5co-box').outerHeight()/2));
	  	$(window).resize(function(){
	  		$('.fh5co-section-with-image .fh5co-box').css('margin-top', -($('.fh5co-section-with-image .fh5co-box').outerHeight()/2));
	  	});
	};

	var responseHeight = function() {
		setTimeout(function(){
			$('.js-responsive > .v-align').css('height', $('.js-responsive > img').height());
		}, 1);
		
		$(window).resize(function(){
			setTimeout(function(){
				$('.js-responsive > .v-align').css('height', $('.js-responsive > img').height());
			}, 1);
		})
	};


	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas-visible') ) {

    			$('body').removeClass('offcanvas-visible');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {
		$('body').prepend('<div id="fh5co-offcanvas" />');
		$('#fh5co-offcanvas').prepend('<ul id="fh5co-side-links">');
		$('body').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>');
		$('#fh5co-offcanvas').append($('#fh5co-header nav').clone());
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);

			$('body').toggleClass('fh5co-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

	};


	var toggleBtnColor = function() {
		if ( $('#hero-slider').length > 0 ) {	
			$('#hero-slider').waypoint( function( direction ) {
				if( direction === 'down' ) {
					$('.fh5co-nav-toggle').addClass('dark');
				}
			} , { offset: - $('#hero-slider').height() } );

			$('#hero-slider').waypoint( function( direction ) {
				if( direction === 'up' ) {
					$('.fh5co-nav-toggle').removeClass('dark');
				}
			} , { 
				offset:  function() { return -$(this.element).height() + 0; }
			} );
		}
	};


	var smoothScrollify = function() {
		function smoothify(hash) {
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000)
		}
		var aTags = document.querySelectorAll('.smooth')
		for(var i = 0; i < aTags.length; i++) {
			if(aTags[i].addEventListener) {
				aTags[i].addEventListener("click", function(e) {
					smoothify(e.target.hash);
				})
			} else {
				// support for older browsers
				aTags[i].attachEvent("onclick", function(e) {
					smoothify(e.target.hash);
				})
			}
		}
	}


	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if(Modernizr.csstransitions) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					
					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function(){

						$('body .animate-box.item-animate').each(function(k){
							var el = $(this);
							setTimeout( function () {
								var effect = el.data('animate-effect');
								if ( effect === 'fadeIn') {
									el.addClass('fadeIn animated');
								} else if ( effect === 'fadeInLeft') {
									el.addClass('fadeInLeft animated');
								} else if ( effect === 'fadeInRight') {
									el.addClass('fadeInRight animated');
								} else {
									el.addClass('fadeInUp animated');
								}

								el.removeClass('item-animate');
							},  k * 200, 'easeInOutExpo' );
						});
						
					}, 100);
				}
			} else {
				// fallback for for browsers that don't support css animations
				$('.animate-box').animate({opacity: 1}, 1000);
			}

		} , { offset: '85%' } );

	};

	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			animateOut: 'fadeOut',
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: true,
			dots: true,
			smartSpeed: 500,
			autoHeight: false
		});
	};


	// Support for placeholders in older browsers
	if(!Modernizr.input.placeholder) {
		$('input, textarea').placeholder();
	} 
	// No support for opacity
	if(!Modernizr.opacity) {
		$('#contact-section, .slides li').css('background-image', 'url(images/slide_2_opacity_added.jpg)');
	}


	//***********
	// HANDLEBARS TEMPLATING
	//***********
	// Location template
	var source   = $("#location-template").html();
	var template = Handlebars.compile(source);
	// price template
	var pricingSource   = $("#pricing-template").html();
	var priceTemplate = Handlebars.compile(pricingSource);
	// get the proper info, make it usable by handlebars, and then pass it to the template for compilation
	$.getJSON('./json/coworking-locations.json', function(data){
		var cheapestLocation = data
			.map(function(location){
				console.log(location.japan)
				return {
					name: location.name,
					price: location.price,
					city: location.address.split('<br>')[2].split(' ')[0],
					japan: location.japan
				}
			})
			.filter(function(location){
				return location.japan
			})
			.reduce(function(min, location){
				var locationPrice = Number(location.price.replace(/円|,/g, ''))
				var minPrice = Number(min.price.replace(/円|,/g, ''))
				return Math.min(minPrice, locationPrice) < minPrice ? location : min
			})
		$('#featured-coworking-space').html('<a href="#">'+cheapestLocation.name+'</a>' + ', ' + cheapestLocation.city + ' is only ' + cheapestLocation.price + ' per month!')

		var context = {};
		var exampleCity = "Level 1 Yusen Building<br>2-3-2 Marunouchi, Chiyoda-ku<br>Tokyo 100-0005 Japan";
		context.locations = data;
		
		var html = template(context);
		var priceHtml = priceTemplate(context);
		$('#locations-body').html(html)
		$('.pricing-body').html(priceHtml)
	
		$(function(){
			fullHeight();
			sliderMain();
			centerBlock();
			responseHeight();
			mobileMenuOutsideClick();
			offcanvasMenu();
			burgerMenu();
			toggleBtnColor();
			contentWayPoint();
			testimonialCarousel();
			smoothScrollify();
		});
	});

}());