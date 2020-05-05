//NAV

const menu = document.querySelector("#menu");
const menuClose = document.querySelector(".menu-close");

menuClose.addEventListener("click", () => {
  menuClose.classList.toggle("open");
  menu.classList.toggle("open");
});

//SLIDER
new Glider(document.querySelector(".glider"), {
  slidesToShow: 1,
  draggable: true,
  dots: "#dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  duration: 0.25,
  responsive: [
    {
      // screens greater than >= 1024px
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

//ANIMATION

const tl = new TimelineMax();

tl.fromTo(".nav", 2, { opacity: 0 }, { opacity: 1 });
tl.fromTo(".landing-title-anim", 1, { x: "-150%" }, { x: "0%" }, "-=1.5");
tl.fromTo(".landing-subtitle-anim", 1, { x: "-150%" }, { x: "0%" }, "-=1.5");
tl.fromTo(".landing-parag-anim", 1, { x: "-150%" }, { x: "0%" }, "-=1.5");
tl.fromTo(".landing-list-anim", 1, { x: "-150%" }, { x: "0%" }, "-=1.5");
tl.fromTo(".landing-img-anim", 1, { x: "150%" }, { x: "0%" }, "-=1.4");
tl.fromTo(".landing-button-anim", 2, { opacity: 0 }, { opacity: 1 }, "-=.9");
tl.fromTo(".book-info-landing", 1, { opacity: 0 }, { opacity: 1 }, "-=.5");
