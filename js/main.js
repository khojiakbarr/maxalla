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


