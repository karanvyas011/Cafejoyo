$(document).ready(function() {
  $(window).scrollTop(0);
  var tempcust = true;
  /* Preloader */
  setTimeout(function(){
    $('.preloader').hide();
  }, 1800);
});


// header fix
var header = $('header');  
$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    header.addClass('fix');
  } else {
    header.removeClass('fix');
  }
});


// offcanvas menu close
$('.nav-link').on( "click", function(){
  $('.close').click(); 
});


// scroll active menu change 
  $('#nav_ul').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 300,
    scrollThreshold: 0.5, 
    filter: '',
    offset: 90,
    easing: 'swing'
  }); 


// dark & light mode
  const togButton = document.getElementById("btnSwitch");
  let currThemeMode = localStorage.getItem("dark") === "true";
// Set initial theme
  setTheme(currThemeMode);
  togButton.addEventListener("click", () => {
    currThemeMode = !currThemeMode;
    setTheme(currThemeMode);
    localStorage.setItem("dark", currThemeMode);
  });
  function setTheme(isDark) {
    if (isDark) {
      document.documentElement.setAttribute("data-cafejoyo-theme", "dark");
      togButton.innerHTML = `<i class="fa fa-sun"></i>`;
    } else {
      document.documentElement.setAttribute("data-cafejoyo-theme", "light");
      togButton.innerHTML = `<i class="fa fa-moon"></i>`;
    }
  }

// current year
$(document).ready(function () {
var year = new Date().getFullYear();
$('#currentyear').text(year);
});

// star rating
$(function(){
  $('.star-rating').each(function(){
    let $c = $(this), r = parseFloat($c.data('rating'));
    for(let i=1;i<=5;i++) $c.append('<span class="star">&#9733;</span>');
    $c.find('.star').each(function(i){
      if(i+1 <= r) $(this).addClass('filled');
      else if(i < r) $(this).addClass('half');
    });
  });
});




// testimonial slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#testimonial-slider', {
        type      : 'loop',
        perPage   : 3,
        gap       : '1.5rem',
        autoplay  : true,
        perMove   : 1,
        pauseOnHover: false,
        arrows    : false,
        pagination: true,
        breakpoints: {
            992: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            }
        }
    }).mount();
});

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let images = [...galleryImages];

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.classList.add("active");
  });
});

function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

AOS.init();

//   back to top
  var btn = $('#backtotop');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function scrollToTop(e){
      window.scrollTo(0, 0);
  });
  
