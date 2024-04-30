var PowerTestimonialCarouselHandler = function ($scope, $) {
    var $carousel = jQuery('[data-owl-carousel]');
    if ($carousel.length) {
        $carousel.each(function(index, el) {
            jQuery(this).owlCarousel(jQuery(this).data('owl-carousel'));
        });
    }
}
jQuery(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/power_element_testimonial_carousel.default",
        PowerTestimonialCarouselHandler
    );
});