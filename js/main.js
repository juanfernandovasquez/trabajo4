/*Menú de hamburguesa */
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});

$(".hamburger").on("click", function () {
  $(".navegation").slideToggle();
});
