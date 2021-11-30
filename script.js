$(document).ready(function() {
    //toggle menu 
    $('.btn-menu').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.btn-menu i').toggleClass('active');
    });

    //typing animation
    var typed = new Typed(".typing",{
        strings: ["Developer","Web Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2",{
        strings: ["Developer","Web Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });


    // owl carousel 
    $('.carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    }); 

    // scroll
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
});