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


// portfolio tabs
const tabs = document.querySelectorAll(".menu-tabs .nav-links");
const items = document.querySelectorAll(".masonry-item");

tabs.forEach(tab => {
  tab.addEventListener("click", function () {

    tabs.forEach(t => t.classList.remove("active"));
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");

    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
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

// blog slider
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#blog-slider', {
        type       : 'loop',
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
  
