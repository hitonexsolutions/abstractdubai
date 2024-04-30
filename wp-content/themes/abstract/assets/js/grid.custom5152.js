(function (jQuery) {
	'use strict';
	jQuery(document).ready(function () {
        
        
        var $grid = jQuery('.grid').isotope({
          itemSelector: '.grid-item', 
          percentPosition: true,
          //layoutMode: 'fitRows',
          transformsEnabled: true,
          transitionDuration: "700ms",
          resize: true,
          fitWidth: true,
            columnWidth: '.grid-sizer'
        });

        var iso = $grid.data('isotope');
        var $filterCount = jQuery('.filter-count');

        // bind filter button click
        jQuery('.filters-button-group .button').on( 'click', function() {
            var filterValue = jQuery( this ).attr('data-filter');
            // use filterFn if matches value
            $grid.isotope({ filter: filterValue });
            updateFilterCount();
        });

        function updateFilterCount() {
            $filterCount.text( iso.filteredItems.length);
        }
        // updateFilterCount();

        // change is-checked class on buttons
        jQuery('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = jQuery( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                jQuery( this ).addClass('is-checked');
            });
        });


    });
})(jQuery);