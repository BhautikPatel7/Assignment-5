
// Responsive Design for trending projects
$(document).ready(function () {
    $('#first1').owlCarousel({
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,

        responsive: {
            0: { items: 1, margin: 20, dots: false, autoplay: true, },
            600: { items: 2, margin: 20, dots: false, autoplay: true, nav: true },
            860: { items: 4, margin: 20, dots: false, autoplay: true, nav: true },
            1352: { items: 4, margin: 20, dots: false, autoplay: true, nav: true },
        }
    });

    $('#second2').owlCarousel({
        loop: true,
        margin: 10,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        nav: true,
        responsive: {
            0: { items: 2, margin: 20, touchDrag: true, freeDrag: true, dots: false, autoplay: true, nav: true },
            600: { items: 3, margin: 20, touchDrag: true, freeDrag: true, dots: false, autoplay: true, nav: true },
            860: { items: 6, margin: 20, touchDrag: true, freeDrag: true, dots: false, autoplay: true, nav: true },
            1352: { items: 6, margin: 20, touchDrag: true, freeDrag: true, dots: false, autoplay: true, nav: true },
        }
    });

    $('#third3').owlCarousel({
        loop: true,
        margin: 10,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: { items: 1, margin: 20, touchDrag: true, freeDrag: true, autoplay: true },
            600: { items: 3, margin: 20, touchDrag: true, freeDrag: true, autoplay: true },
            800: { items: 5, margin: 20, touchDrag: true, freeDrag: true, autoplay: true },
            1280: { items: 5, margin: 20, touchDrag: true, freeDrag: true, autoplay: true },
            1603: { items: 5, margin: 20, touchDrag: true, freeDrag: true, autoplay: true, nav: true },

        }

    });

    $('.owl-carousel').find('.owl-nav').removeClass('disabled');
    $('.owl-carousel').on('changed.owl.carousel', function (event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });

    // JQuery Ui For Auto Suggestion
    $(function () {
        var availableTags = [
            "India",
            "Germany",
            "Japan",
            "Brazil",
            "Canada",
            "United Kingdom",
            "Italy",
            "France",
            "South Korea",
            "Australia",
            "Russia",
            "Mexico",
            "China",
            "Spain",
            "Indonesia",
            "Nigeria",
            "Saudi Arabia",
            "Turkey",
            "Egypt",
            "Vietnam",
            "Iran",
            "Philippines",
            "Thailand",
            "Poland",
            "Argentina",
            "Ukraine",
            "South Africa",
            "Colombia",
            "Netherlands",
            "Bangladesh"
        ];
        $("#Anywhere_").autocomplete({
            source: availableTags
        });
        $("#mobile-location").autocomplete({
            source: availableTags
        });
    });
    //
    
    //    Drop Kick

    //  $('first_drop').dropkick({
    //     mobile: true,

    // });

});

