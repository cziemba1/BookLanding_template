const menu = document.querySelector("#menu");
const menuClose = document.querySelector(".menu-close");


menuClose.addEventListener("click", () => {
    menuClose.classList.toggle("open");
    menu.classList.toggle("open");
});

new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    draggable: true,
    dots: "#dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next"
    },
    duration: 0.25,
    responsive: [
        {
            // screens greater than >= 1024px
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});