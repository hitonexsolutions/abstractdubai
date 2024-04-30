(function ($) {
    'use strict';
        
    jQuery(document).ready(function () {
    	// Isotope Portfolio
        var $grid = $('.power_portfolio_wrapper').isotope({
          itemSelector: '.power_portfolio_item', 
          percentPosition: true,
          layoutMode: 'fitRows',
          masonry: {
            columnWidth: '.grid-sizer'
          }
        });
        
        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });
        
        var iso = $grid.data('isotope');

        var $filterCount = $('.filter-count');

        // bind filter button click
        $('.power_portfolio_button_group .power_portfolio_button').on( 'click', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            $grid.isotope({ filter: filterValue });
            updateFilterCount();
        });

        function updateFilterCount() {
            if( typeof iso != 'undefined' || iso != null ) {
                $filterCount.text(iso.filteredItems.length);
            }
        }
        updateFilterCount();

        // change is-checked class on buttons
        $('.power_portfolio_button_group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });
        });
    });
        
})(jQuery);