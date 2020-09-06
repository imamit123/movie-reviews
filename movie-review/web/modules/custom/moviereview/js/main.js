(function($) {
	function img_SrcChange(){
        var settingAttribute;
        $('img.imgSrcChange').each(function(index, image) {
            $.each(['src', 'alt'], function(index, attribute) {
                settingAttribute = attribute + (($(window).width() <= 767) ? '-mobile' : (($(window).width() <= 1023) ? '-tablet' : '-desktop'));
                settingAttribute = $(image).attr(settingAttribute);
                if (settingAttribute) {
                    if ($(image).hasClass('lazyload')) {
                        $(image).attr('data-' + attribute, settingAttribute);
                    } else {
                        $(image).attr(attribute, settingAttribute);
                    }
                }
            });
        });
        $("img.imgSrcChange").attr('style','')
    }



	/* Main Banner */
	$('.main-banner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		swipe: true,
		infinite: true,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 9000,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: false,
					swipe: true,
					infinite: true,
					autoplay: true,
				}
			}
		]
	});

	
	
	
	/* Accordion */
      $('.fund-item h5').click(function () {
      $('.fund-item-con').not($(this).next()).slideUp();
      $('.fund-item h5').not(this).removeClass('open');
      $(this).next('.fund-item-con').slideToggle().toggleClass('active');
      $(this).toggleClass('close open');
    });

	/* Welcome Services */
	$('.pricing-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		swipe: true,
		autoplay: true,
		speed: 1000,
		infinite: false,
		pauseOnHover:true,
		responsive: [
		{
		  breakpoint: 9999,
		  settings: "unslick"
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			centerMode: false,
			swipe: true,
			adaptiveHeight: false
		  }
		},
			{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			swipe: true,
			adaptiveHeight: true
		  }
		}
	  ]
	});
	
	
	/* Welcome Services */
	$('.our-services-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		swipe: true,
		autoplay: true,
		speed: 1000,
		infinite: false,
		pauseOnHover:true,
		responsive: [
		{
		  breakpoint: 9999,
		  settings: "unslick"
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			centerMode: false,
			swipe: true,
			adaptiveHeight: false
		  }
		},
			{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			swipe: true,
			adaptiveHeight: true
		  }
		}
	  ]
	});
	
	/* Photo gallery */
        $('.product-slider').slick({
           infinite:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipe: false,
            fade: true,
			arrows: false,
            dots: false,
            asNavFor: '.product-slider-thumbs',
        
        });
        $('.product-slider-thumbs').slick({
			
			slidesToShow: 7,
            slidesToScroll: 1,
            asNavFor: '.product-slider',
			centerMode: false,
			centerPadding: '0px',
			focusOnSelect: true,
			arrows: true,
			responsive: [
		
		
			{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: false,
			swipe: true,
			adaptiveHeight: false
		  }
		}
	  ]

        });
	

	/* policies coming slider */
	$('.policies-coming-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		swipe: true,
		autoplay: true,
		speed: 1000,
		infinite: false,
		pauseOnHover:true,
		responsive: [
		{
		  breakpoint: 9999,
		  settings: "unslick"
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			centerMode: false,
			swipe: true,
			adaptiveHeight: true
		  }
		},
			{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			swipe: true,
			adaptiveHeight: false
		  }
		}
	  ]
	});

	
	/* policies coming slider */
	$('.collections-tab-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		swipe: true,
		autoplay: true,
		speed: 1000,
		infinite: false,
		pauseOnHover:true,
		responsive: [
		{
		  breakpoint: 9999,
		  settings: "unslick"
		},
	
			{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			swipe: true,
			adaptiveHeight: true
		  }
		}
	  ]
	});
	
	/* collections tabs slider */
	$('.collections-tabs').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		swipe: true,
		autoplay: false,
		speed: 1000,
		infinite: false,
		pauseOnHover:true,
		responsive: [
		{
		  breakpoint: 9999,
		  settings: "unslick"
		},
	
			{
		  breakpoint: 767,
		  settings: {
			slidesToShow:1,
			slidesToScroll: 1,
			centerMode: false,
			swipe: true,
			adaptiveHeight: false
		  }
		}
	  ]
	});
	
	
	
	
	
	
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

	$(document).ready(function(){
		$(".datepicker-switch").click( function(event) {
                    event.stopPropagation();
                });
		
		img_SrcChange();
		$(window).resize(function() {
			img_SrcChange();
		});

	

	$('.pricing-slider').slick('slickRemove',0);
		chkHamburger();
		$('.menu-icon').click(function(){
			$('.main-menu').addClass('active');
			return;
		});
		$('.menu-close').click(function(){ 
			$('.main-menu').removeClass('active');
		});
		 /* Navigation */

         $('.main-menu > ul > li.dropdwon > a').click(function(e) {
             if ($(window).width() <= 991) {
                //e.preventDefault();
                $('.main-menu li').removeClass('mob-active');
                
                $(this).parent().toggleClass('mob-active');
                var $div = $(this).next('.submenu');
                $('.submenu').not($div).slideUp();
                if ($div.is(":visible")) {
                    $div.slideUp();
                    $('.main-menu li').removeClass('mob-active');
                    
                } else {
                    $div.slideDown();
                    
                }
            }
        });
		function chkHamburger() {
			if ($(window).width() <= 991) {
			$('.menu-icon').click(function(){
					$('.main-menu').addClass('active');
					return;
				});
				$('.menu-close').click(function(){
					$('.main-menu').removeClass('active');
				});
			}
			else {
			       $('.main-menu').removeClass('active');
			}
		} 
        if ($(window).width() >= 991) {
            $(".main-menu li.dropdwon").mouseover(function() {
                $('.submenu').addClass('opened').css({
                    'transition': 'all ease-out 0.8s'
                });
               
            });
            $(".main-menu li.dropdwon").mouseleave(function() {
               
                $('.submenu').removeClass('opened').css({
                    'transition': 'all ease-in 0.8s'
                });
            });

        }
		
		
		
		if ($(window).width() <= 767) {
			
			$('.our-services-slider').slick('slickRemove',1);
			$('.our-services-slider').slick('slickRemove',2);
			$('.our-services-slider').slick('slickRemove',3);
			$('.our-services-slider').slick('slickRemove',4);
			
		}
		
		/* Accordion */
	if ($(window).width() <= 767) {
      $('.membership-item h5').click(function () {
      $('.fund-item-con').not($(this).next()).slideUp();
      $('.membership-item h5').not(this).removeClass('open');
      $(this).next('.fund-item-con').slideToggle().toggleClass('active');
      $(this).toggleClass('close open');
    });
	}
        
	
		
		var windowWidth = $(window).width();
		$(window).resize(function () {
			if ($(window).width() != windowWidth) {
				windowWidth = $(window).width();
				chkHamburger();
			}
		});
		
	});

	$(window).resize(function() {
		$('.pricing-slider, .policies-coming-slider, .our-services-slider, .collections-tab-slider, .collections-tabs').slick('destroy');
		$('.pricing-slider, .policies-coming-slider, .our-services-slider, .collections-tab-slider, .collections-tabs').slick('reinit');
		
	});


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.policies-coming-slider').slick('setPosition');
	$('.collections-tab-slider').slick('setPosition');
	$('.collections-tabs').slick('setPosition');
	
})
})(jQuery);




	// if desktop device, use DateTimePicker
		if ($("#datepicker").length > 0) {
			$("#datepicker").datetimepicker({
				useCurrent: false,
				format: "L",
				showTodayButton: true,
				icons: {
					next: "fa fa-chevron-right",
					previous: "fa fa-chevron-left",
					today: 'todayText'
				}
			});
		}
		if ($("#timepicker").length > 0) {
			$("#timepicker").datetimepicker({
				format: "LT",
				icons: {
					up: "fa fa-chevron-up",
					down: "fa fa-chevron-down"
				}
			});
		}




































+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)
  
    // Added to update dropdown text with selected title value and
    // update the hidden title input value with the selected title
    // value
  
    .on('click.bs.dropdown.data-api', '.title-item', function (e) {
      e.stopPropagation();
      e.preventDefault();
      var title = $(this).text();
      $('.dropdown-toggle').html( title +  ' <b class="caret"></b>').parent().toggleClass('open');
      $('#title').attr('value', title);
    });
			   
    
}(window.jQuery);






(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();