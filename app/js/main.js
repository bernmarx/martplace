$(function () {

    $(".showcase_info-rating").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
        spacing: "3px",
        ratedFill: "#ffc000",
        normalFill: "#ffffff"
    });

    $('.weekly_products-slider').slick({
        infinite: true,
        appendArrows: '.weekly_products_top',
        nextArrow: '<button type="button" class="slick-next icon-chevron-right" style=""></button>',
        prevArrow: '<button type="button" class="slick-prev icon-chevron-left" style=""></button>',
    });

});