var PowerAccordionHandler = function ($scope, $) {
    var $controller = $scope.find(".power_accordion");
    $controller.on("click", ".power_accordion_tab", function () {
        jQuery(this).next().slideDown();
        jQuery(".power_accordion_info").not($(this).next()).slideUp();
    });

    $controller.on("click", ".item", function () {
        jQuery(this).addClass("active").siblings().removeClass("active");
    });
}
jQuery(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/power_element_accordion.default",
        PowerAccordionHandler
    );
});