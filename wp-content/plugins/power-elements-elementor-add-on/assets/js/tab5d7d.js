var PowerTabHandler = function ($scope, $) {
    $('.power_tab_nav > .power_tab_button_group > li > a').eq(0).addClass( "selected" );
    $('.power_tab_nav > .power_tab_container > .power_tab_info').eq(0).css('display','block');

    $('.power_tab_nav > .power_tab_button_group').on("click",function(e){

        if($(e.target).is("a")){

            /*Handle Tab Nav*/
            $('.power_tab_nav > .power_tab_button_group > li > a').removeClass( "selected");
            $(e.target).addClass( "selected");

            /*Handles Tab Content*/
            var clicked_index = $("a",this).index(e.target);
            $('.power_tab_nav > .power_tab_container > .power_tab_info').css('display','none');
            $('.power_tab_nav > .power_tab_container > .power_tab_info').eq(clicked_index).fadeIn();

        }

        $(this).blur();
        return false;

    });
}
jQuery(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/power_element_tabs.default",
        PowerTabHandler
    );
});