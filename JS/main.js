$(document).ready(function () {
  let $btns = $(".project-area .button-group button");
  $btns.click(function (e) {
    $(".project-area .button-group buttons").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });
    return false;
  });

  $(".project-area .button-group #btn1").trigger("click");

  $(".project-area .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
    // other options
  });

  $(".site-main .about-area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      544: {
        items: 2,
      },
    },
  });

  //sticky navbar

//   let nav_offset_top = $(".header_area").height() + 50;

//   function navbarFixed() {
//     if ($(".header_area").length) {
//       $(window).scroll(function () {
//         let scroll = $(window).scrollTop;
//         if (scroll >= nav_offset_top) {
//           $(".header_area .main-menu").addClass("navbar_fixed");
//         } else {
//           $(".header_area .main-menu").removeClass("navbar_fixed");
//         }
//       });
//     }
//   }

//   navbarFixed();

  // sticky navigation menu

  let nav_offset_top = $('.header_area').height();
  $('.main-menu').css('transition', '.3s ease-out');
  
  function navbarFixed() {
    if ($('.header_area').length) {
          $(window).scroll(function () {
              let scroll = $(window).scrollTop();
              if (scroll > 0) {
                  $('.header_area .main-menu').addClass('navbar_fixed');
                  $('body').css('padding-top', nav_offset_top);
                } else {
                  $('.header_area .main-menu').removeClass('navbar_fixed');
                  $('body').css('padding-top', 0);
              }
          })
      }
  }

  // Function for dynamic sizing of home section
  function setViewportHeight() {
    const navHeight = document.querySelector('.header_area').offsetHeight;
    $('.vh-dynamic').css('height', `calc(100vh - ${navHeight}px)`);
  }

  // Function for active states in navbar
  function activeStates() {
    const sections = document.querySelectorAll('section'); 
    const navLinks = document.querySelectorAll('ul li a.nav-link');

    window.addEventListener('scroll', () => {
      let activeDiv = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if(pageYOffset >= sectionTop - nav_offset_top) {
          activeDiv = section.getAttribute('id');
        }
      });

      navLinks.forEach( link => {
        link.classList.remove('active');
        let currentLinkHref = link.getAttribute('href');
        let finalActiveState = document.querySelector('#youtube').offsetTop + document.querySelector('#youtube').offsetHeight;
        currentLinkHref = currentLinkHref.replace('#','');
        if(currentLinkHref == activeDiv && !(pageYOffset >= finalActiveState)) {
          link.classList.add('active');
        } else if(pageYOffset >= finalActiveState) {
          link.classList.remove('active');
          document.querySelector('.final-active').classList.add('active');
        }
      });
    });
  }

  
  navbarFixed();
  setViewportHeight();
  activeStates();

});
