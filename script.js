$(".startM").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".pseudoNav").offset().top
    }, 5)
})



$(".skillsM").on("click", function () {

    $("body, html").animate({
        scrollTop: $(".skills").offset().top - $("nav").height() - 30

    }, 5)
})

$(".skillsMM").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".skills").offset().top - $("nav").height() - 18
    }, 5)
})


$(".projectsM").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".projectsContener").offset().top - $("nav").height() + 3
    }, 5)
})



$(".myProjects").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".projectsContener").offset().top - $("nav").height() + 3
    }, 5)
})



$(".contactM").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".contact").offset().top - 30
    }, 5)
})



$(".navMain").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".pseudoNav").offset().top
    }, 5)
})





function myFunction(x) {
    x.classList.toggle("change");
}



$(".containerM").on("click", function () {
    $(".menuSlide").toggleClass("off");
})



$(".navMain").on("click", function () {
    $(".menuSlide").addClass("off");
})

$(".navMain").on("click", function () {
    $(".change").removeClass("change");
})


$(".menuSlide").on("click", function () {
    $(".menuSlide").toggleClass("off");
})


$(".menuSlide").on("click", function () {
    $(".containerM").removeClass("change");
})



$(window).scroll(function () {
    if ($(this).scrollTop() > 55) {
        $('nav').addClass('navShrink menuLeftShrink menuRightShrink');
    } else {
        $('nav').removeClass('navShrink menuLeftShrink menuRightShrink');
    }
});


// proba

// $(document).on("scroll", function () {

//     if ($(document).scrollTop() > 100) {
//         $("header").removeClass("large").addClass("small");
//     } else {
//         $("header").removeClass("small").addClass("large");
//     }

// });

//próba end

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 55) {
//         $('nav').addClass('nowaKlasa');
//     } else {
//         $('nav').removeClass('nowaKlasa');
//     }
// });






var $window = $(window);
var windowsize = $window.width();

$(window).scroll(function () {
    var windowsize = $window.width();
    if (windowsize < 1024) {
        $('nav').removeClass('navShrink');
    }

});



$(window).on('load', function () {
    $("#cover").hide();
});