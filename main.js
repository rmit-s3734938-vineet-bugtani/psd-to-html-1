$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    })
});