/*
Theme Name: 
Version: 
Author: 
Author URI: 
Description: 
*/
/*	IE 10 Fix*/

(function ($) {
	'use strict';
	
	jQuery(document).ready(function () {

		// menu js start
		$.fn.menumaker = function (options) {
	        var flexmenu = $(this), settings = $.extend({
	                format: 'dropdown',
	                sticky: false
	            }, options);
	        return this.each(function () {
	           
	            flexmenu.find('li ul').parent().addClass('menu-item-has-children');
	            var subToggle;
	            subToggle = function () {
	                flexmenu.find('.menu-item-has-children').prepend('<span class="submenu-button"></span>');
	                flexmenu.find('.menu-item-has-children>a').append('<i class="fa fa-angle-down"></i>');
	                flexmenu.find('.submenu-button').on('click', function () {
	                    $(this).toggleClass('submenu-opened');
	                    if ($(this).siblings('ul').hasClass('open')) {
	                        $(this).siblings('ul').removeClass('open').slideToggle();
	                    } else {
	                        $(this).siblings('ul').addClass('open').slideToggle();
	                    }
	                });
	            };
	            if (settings.format === 'multitoggle')
	                subToggle();
	            else
	                flexmenu.addClass('dropdown');
	            if (settings.sticky === true)
	                flexmenu.css('position', 'fixed');
	            var resizeFix;
	            resizeFix = function () {
	                var mediasize = 1000;
	                if ($(window).width() > mediasize) {
	                    flexmenu.find('ul').show();
	                }
	                if ($(window).width() <= mediasize) {
	                    flexmenu.find('ul').hide().removeClass('open');
	                }
	            };
	            resizeFix();
	            return $(window).on('resize', resizeFix);
	        });
	    };

	    $('#flexmenu').menumaker({ format: 'multitoggle' });
	    // menu js end

	    // Search bar open
		
		$('.closebtn').on('click', function (e) {
		  	e.preventDefault();
		  	$('.search_overlay').removeClass('active');
		});

		// Overlay Navigation Start
		$('.mobile-btn').on('click', function (e) {
			e.preventDefault();
			$('.overlaynav').toggleClass('popup');
		});

		$('.overlaynavclose').click(function(e){
			e.preventDefault();
		    $('.overlaynav').removeClass('popup');
		});

		// Side Navigation Action
		$('#overlaymenu ul li').has('>ul').addClass('menu-item-has-children');
		$('#overlaymenu ul li.menu-item-has-children>a').append('<i class="fa fa-angle-down"></i>');
		$('#overlaymenu ul li.menu-item-has-children>a').on("click", function(e){
			$(this).next().slideToggle();
			$(this).next().closest('.menu-item-has-children').siblings().find('.sub-menu').slideUp();
	    	e.stopPropagation();
			e.preventDefault();
		});

		// Side Navigation Start
		$('.sidenavopen').click(function(e){
			e.preventDefault();
			$('.navigation').css("left", "0px");
		});

		$('.sidenavclose').click(function(e){
			e.preventDefault();
		    $('.navigation').css("left", "-250px");
		});

 	});
	
})(jQuery);
