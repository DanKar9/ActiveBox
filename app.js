


$(function() {

/* Fixed Header */

    let header = $("#header");

    let intro = $("#intro");
     
    let introH = intro.innerHeight();

    let scrollPos = $(window).scrollTop();

    checkScroll(introH,scrollPos);

    
    $(window).on("scroll  resize" , function() {
        introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    
    checkScroll(introH,scrollPos);
    
    });



    function checkScroll(introH,scrollPos){
        if(scrollPos>introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Scroll */
    
    $("[data-scroll").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data("scroll");
        nav.removeClass("show");
        let elementOffset = $(elementId).offset().top;

        $("html,body").animate({
            scrollTop:elementOffset - 65
        } ,700)
    })



    /* Nav Toggle Menu */
    let navToggle = $("#navToggle");
    let nav = $("#nav");
    navToggle.on("click", function(event){
        event.preventDefault();
    
    nav.toggleClass("show");

    })


    /* Reviews */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots:true
      });
              

});