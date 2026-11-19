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
prevButton.addEventListener("click", () => {
    showSlide(current - 1);
    if (timer) startAuto();
});

nextButton.addEventListener("click", () => {
    showSlide(current + 1);
    if (timer) startAuto();
});

playButton.addEventListener("click", () => {
    if (timer) stopAuto();
    else startAuto();
});

prevButton.disabled = false;
nextButton.disabled = false;
playButton.disabled = false;

startAuto();
