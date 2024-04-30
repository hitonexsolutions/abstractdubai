(function ($) {
    'use strict';
        
    jQuery(document).ready(function () {
    	// Popup Video
        $('.fancybox-media').fancybox({
          openEffect  : 'none',
          closeEffect : 'none',
          helpers : {
            media : {}
          }
        });
    });
        
})(jQuery);