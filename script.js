/*menu hamburger*/
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


/*carousel*/
const carousel = document.getElementById("carousel");
const slides = carousel.children;
const total = slides.length;
let index = 1; // começa no primeiro slide real

// posição inicial
carousel.style.transform = `translateX(-${index * 100}%)`;

function moveTo(i) {
    carousel.style.transition = "transform 0.5s ease";
    carousel.style.transform = `translateX(-${i * 100}%)`;
}

document.getElementById("next").onclick = () => {
    index++;
    moveTo(index);

    if (index === total - 1) {
        setTimeout(() => {
            carousel.style.transition = "none";
            index = 1; // volta para o primeiro real
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }, 500);
    }
};

document.getElementById("prev").onclick = () => {
    index--;
    moveTo(index);

    if (index === 0) {
        setTimeout(() => {
            carousel.style.transition = "none";
            index = total - 2; // volta para o último real
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }, 500);
    }
};
