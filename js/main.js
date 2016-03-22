/*
 Main JS functions and function settings
 v 0.5.0
*/

// for .full-height when VH CSS until not understood.
if($('.no-cssvhunit body.logged-in header.dynamic-height, .no-cssvhunit header.full-height').length) {
	$(window).load(function(){
		var maxheight = $( window ).height();
		$('.no-cssvhunit body.logged-in header.dynamic-height, .no-cssvhunit header.full-height').height(maxheight);
	});
}


// READY!
$( document ).ready(function() {
	
	// Hamberger Cross
	if($('nav.hamburger-cross').length) {
		var trigger = $('.navbar-toggler'), isClosed = false;
		trigger.click(function () {
			hamburger_cross();      
		});
		function hamburger_cross() {
			if (isClosed == true) {          
				trigger.removeClass('is-open is-closed');
				trigger.addClass('is-closed');
				//trigger.switchClass( "is-open", "is-closed");
				isClosed = false;
			} else {   
				trigger.removeClass('is-open is-closed');
				trigger.addClass('is-open');
				//trigger.switchClass( "is-closed", "is-open");
				isClosed = true;
			}
		}
	}
	
	// Processing Buttons
	$('.btn-process').click(function() {
		$(this).addClass('processing');
		setTimeout(function(){
			$(this).removeClass('processing');
		}, 1200);
		
	});
	
	// Vertical Center WITHOUT flexbox...
	if($('.vcenter').length) {
		if (Modernizr.mq('(min-width : 600px)')) {
			// vcenter tricks
			$('.vcenter').each(function() {
				var text = $(this);
				var vheight = $(this).parent().parent().height();
				var lheight = vheight + 'px';
				$(text).addClass('see-u');
				$(text).css({'line-height':lheight,'height':vheight});
				$(text).addClass('htest-'+vheight);
			});
		}
	}
	
	// Smooth ScrollTo Function (just add class .scrollto)
	$('a.scrollto').click(function(evt){
		evt.preventDefault();
		var scrollto = $(this).attr('href');
		if (scrollto.indexOf('#') >= 0) {
			$("html, body").animate({scrollTop: $(scrollto).offset().top }, 900); 
		}
	});
	
	if($('.jumboscroll').length) {
		$('.jumboscroll button, .skip-link').click(function(evt){
			evt.preventDefault();
			var scrollto = $('section:first-of-type');
			$("html, body").animate({scrollTop: $(scrollto).offset().top }, 900); 
		});
	}
	
	// IE Fix - http://getbootstrap.com/getting-started/#support-ie10-width
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	  var msViewportStyle = document.createElement('style')
	  msViewportStyle.appendChild(
		document.createTextNode(
		  '@-ms-viewport{width:auto!important}'
		)
	  )
	  document.querySelector('head').appendChild(msViewportStyle)
	}
	
	$("img.lazy").lazyload({effect : "fadeIn"});
	
	// SVGeezy Init
	svgeezy.init('nocheck', 'png');
	
	// For social small window
	$('.mini').click(function(event) {
		var width 	= 	575,
		height 		= 	400,
		left   		= 	($(window).width()  - width)  / 2,
		top    		= 	($(window).height() - height) / 2,
		url    		= 	this.href,
		opts   		= 	'status=1' +
						',width='  + width  +
						',height=' + height +
						',top='    + top    +
						',left='   + left;
	
		window.open(url, 'Share', opts);
		return false;
	});
	
	// Adds .vp to the footer container when it's 15px inside in the current viewport
	$('footer .container').viewportChecker({
		classToAdd: 'vp',
		offset: 15,
		repeat: true
	});
	
	// Back To Top Function
	$('a.back-to-top').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 750);
		return false;
	});
	
	// 4-Column slick
	$('.slick-col-3').slick({
	  arrows: false,
	  dots: true,
	  infinite: false,
	  speed: 400,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 900,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		}]
	});
	
	
	// Three-Column Slick
	$('.slick-col-4').slick({
	  arrows: false,
	  dots: true,
	  infinite: false,
	  speed: 400,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 900,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}]
	});
	
	// Two-Column Slick
	$('.slick-col-6').slick({
	  arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 400,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 900,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}]
	});
	
	// One-Column Slick
	$('.slick-col-12').slick({
	  arrows: false,
	  dots: true,
	  infinite: false,
	  speed: 400,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	
	// One-Column Slick for Testimonials
	$('.jdm-testimonials').slick({
	  arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 400,
	  autoplay: true,
  	  autoplaySpeed: 9000,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	
	/* DEMO-ONLY */
	function toggleCodes(on) {
		var obj = document.getElementById('icondemo');
		if (on) {
			obj.className += ' codesOn';
		} else {
			obj.className = obj.className.replace(' codesOn', '');
		}
	}
	
	
}) // END doc.ready