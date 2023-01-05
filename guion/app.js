const images = document.querySelectorAll(".img-gallery");
const lightImages = document.querySelector(".add-img");
const lightContainer = document.querySelector(".light-image");
const close = document.querySelector(".close");
const hamburguerOff = document.querySelector(".menu");

images.forEach(image => {
    image.addEventListener("click", () => {
        growImage(image.getAttribute("src"));
    });
});

const growImage = (image) => {
    lightImages.src = image;
    lightContainer.classList.toggle("show");
    lightImages.classList.toggle("showImage");
    hamburguerOff.style.opacity = "0";
};

lightContainer.addEventListener("click", (e) => {
    if (e.target === close) {
        lightContainer.classList.toggle("show");
        lightImages.classList.toggle("showImage");
        hamburguerOff.style.opacity = "1";
    };
});