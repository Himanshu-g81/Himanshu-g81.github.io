$(document).ready(function() {
    
    $(window).scroll(function() {

        if(this.scrollY > 20) {
            $('.navbar-custom').addClass('sticky');
        }
        else {
            $('.navbar-custom').removeClass('sticky');
        }

        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        }
        else {
            $('.scroll-up-btn').removeClass('show');
        }
    })

    // slide up
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        })
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ['Software Developer', 'Competitive Programmar', 'Guy who try to Rap'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    })

    // typing animation script
    var typed_1 = new Typed(".typing-1", {
        strings: ['Software Developer', 'Competitive Programmar', 'Guy who try to Rap'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    })

    $('.menu-btn').click(function() {
        console.log("clicked");
        $('.navbar-custom .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })

    $('.navbar-custom .menu li').click(function() {
        console.log("navbar")
        $('.navbar-custom .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })

    // owl carousel script

    $('.carousel').owlCarousel({
        margin: 20,
        
        autoplay: true,
        // autolayTimeOut: 2000,
        autoplayHoverPauseon: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },

            600: {
                items: 2,
                nav: false
            },

            1000: {
                items: 3,
                nav: false
            }
        }

    })

    

})