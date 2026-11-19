// Karuseļa elementi
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-previous");
const nextButton = document.querySelector(".carousel-next");
const playButton = document.querySelector(".carousel-playback");

let current = 0;
let timer = null;

// Slaidu pārslēgšana
function showSlide(index) {
    slides[current].hidden = true;
    current = (index + slides.length) % slides.length;
    slides[current].hidden = false;
}

function move(step) {
    showSlide(current + step);
    if (timer) startAuto();
}

function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 5000);
    playButton.textContent = "Apturēt automātisko pārslēgšanu";
}

function stopAuto() {
    clearInterval(timer);
    timer = null;
    playButton.textContent = "Sākt automātisko pārslēgšanu";
}

// Pogas
prevButton.addEventListener("click", () => move(-1));
nextButton.addEventListener("click", () => move(1));

playButton.addEventListener("click", () => {
    if (timer) stopAuto();
    else startAuto();
});

startAuto();
