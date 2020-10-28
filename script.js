
// start button,  right menu
$(".startM").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".pseudoNav").offset().top
    }, 500)
})


//skils button, right menu
$(".skillsM").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top - $("nav").height() +3

    }, 500)
})





$(".skillsMM").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".skills").offset().top - $("nav").height() 
    }, 500)
})



// projects button, right menu
$(".projectsM").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".projectsContener").offset().top - $("nav").height() + 3
    }, 500)
})


// my project button
$(".myProjects").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".projectsContener").offset().top - $("nav").height() 
    }, 500)
})



// contact button, right menu
$(".contactM").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".contact").offset().top - 30
    }, 500)
})


// left logo
$(".navMain").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".pseudoNav").offset().top
    }, 500)
})





function myFunction(x) {
    x.classList.toggle("change");
}


//hamburger menu
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






$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100){
            $("nav").addClass('  navShrink ')
          
        } else {
            $("nav").removeClass(' navShrink ')
          
        }
    })
})



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