(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $('[data-toggle="tooltip"]').tooltip();
		
		
        $(".header-area").sticky({topSpaceng: 0});
		
		
		
		
		
		 $('li.smoot-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '60';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        });
		
		
		
		
		
		
		 $('body').scrollspy({ 
            target: '.navbar-collapse',
            offset: 95
        });   
		
		
		$('.paralux-bg,.top-area-bg').scrolly({bgParallax: true});
		
		
		$(".navbar-toggle").click(function(){
			$("body").addClass("mobile-menu")
		});
		
		$("ul.nav.navbar-nav").click(function(){
			$("body").removeClass("in")
		});
	
    });


    jQuery(window).load(function(){
		
        
    });


}(jQuery));	