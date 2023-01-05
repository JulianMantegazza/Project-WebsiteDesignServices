const hamburguer = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");

hamburguer.addEventListener("click", () => {
    menuNav.classList.toggle("spread");
    hamburguer.style.opacity = "0";
});

window.addEventListener("click", e => {
    if (menuNav.classList.contains("spread") && e.target !== hamburguer && e.target !== menuNav) {
        menuNav.classList.toggle("spread");
        hamburguer.style.opacity = "1";
    };
});