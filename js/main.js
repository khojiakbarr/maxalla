const tabletka = document.getElementById("tabletka");
const vektor_two = document.getElementById("vektor_two");
const oval = document.getElementById("oval");
const vector_one = document.getElementById("vector_one");

tabletka.addEventListener("mouseover", (e) => {
  vektor_two.classList.toggle("animateVectorTwo");
  oval.classList.toggle("animateOval");
  vector_one.classList.toggle("animateVector");
});

tabletka.addEventListener("mouseout", (e) => {
  vektor_two.classList.toggle("animateVectorTwo");
  oval.classList.toggle("animateOval");
  vector_one.classList.toggle("animateVector");
});

//? swiper


var swiper = new Swiper(".mySwip__swiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swip-next",
    prevEl: ".swip-prev",
  },
  breakpoints: {
    // when window width is <= 767px
    767: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
    // when window width is <= 1300px
    1300: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
  },
});

var swiper = new Swiper(".prostata_swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});