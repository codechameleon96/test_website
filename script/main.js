//Navigation =======================================
const button = document.querySelector('.nav__icon');
const dropdown = document.querySelector('.nav__dropdown');

button.addEventListener('click',(e)=>{

  if(dropdown.style.display !== 'grid'){
    dropdown.classList.toggle('active');
  }else{
    dropdown.style.display='none';
  }

  
})

//About Us=========================================================
const about = document.querySelector('.about__pagination-1');
const mission = document.querySelector('.about__pagination-2');
const vision = document.querySelector('.about__pagination-3');

const about_content = document.querySelector('.about-content');
const mission_content = document.querySelector('.mission-content');
const vision_content= document.querySelector('.vision-content');

about.addEventListener('click',()=>{
  if(mission_content.classList.contains('active')){
    mission_content.classList.remove('active');
    mission.classList.remove('active');
  }
  if(vision_content.classList.contains('active')){
    vision_content.classList.remove('active');
    vision.classList.remove('active');
  }

  if(!about_content.classList.contains('active')){
    about_content.classList.add('active')
    about.classList.add('active');
  }
});

mission.addEventListener('click',()=>{
  if(about_content.classList.contains('active')){
    about_content.classList.remove('active');
    about.classList.remove('active');
  }
  if(vision_content.classList.contains('active')){
    vision_content.classList.remove('active');
    vision.classList.remove('active');
  }

  if(!mission_content.classList.contains('active')){
    mission_content.classList.add('active')
    mission.classList.add('active');
  }
});

vision.addEventListener('click',()=>{
  if(about_content.classList.contains('active')){
    about_content.classList.remove('active');
    about.classList.remove('active');
  }
  if(mission_content.classList.contains('active')){
    mission_content.classList.remove('active');
    mission.classList.remove('active');
  }

  if(!vision_content.classList.contains('active')){
    vision_content.classList.add('active')
    vision.classList.add('active');
  }
});


// ===============================================================
// Gallery

// using plain js
new SimpleLightbox({elements: '.portfolio__gallery a'});




// ==================================================================
var mySwiper = new Swiper ('.choose-swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  mousewheel: true,
  loop: true,
  direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },


  breakpoints: {
  
    // when window width is >= 640px
    900: {
      // slidesPerView: 4,
      // spaceBetween: 40,
      direction: 'vertical',
    }
  },


  
});

// =============================================================
var teamSwiper = new Swiper('.team-swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  mousewheel: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
  
    // when window width is >= 640px
    500: {
      slidesPerView: 2,
      spaceBetween: 40,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});