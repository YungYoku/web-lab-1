const swiperTop = document.querySelector(".swiperTop");
const lines = [
    document.querySelector(".top__line1__bg"),
    document.querySelector(".top__line2__bg"),
    document.querySelector(".top__line3__bg"),
    document.querySelector(".top__line4__bg")
];

let i = 0;
let timerInterval;

const endTimer = () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
};

const startTimer = () => {
    endTimer();

    let width = 0;

    timerInterval = setInterval(() => {
        const line = lines[i];
        if (line) {
            line.style.width = width + "%";
        }
        width += 0.1;

        if (width >= 100) {
            endTimer();

            i++;
            if (i === 4) {
                resetLinesWidth();
                i = 0;
            }

            topSlide(i);
        }
    }, 10);
};

const resetLinesWidth = () => {
    for (let i = 0; i < 4; i++) {
        const line = lines[i];
        if (line) {
            lines[i].style.width = "0";
        }
    }
};

function topSlide(slide) {
    if (swiperTop) {
        swiperTop.swiper.slideTo(slide);
    }
    i = slide;

    resetLinesWidth();
    for (let i = 0; i < slide; i++) {
        const line = lines[i];
        if (line) {
            line.style.width = "100%";
        }
    }

    startTimer();
}

document.addEventListener("DOMContentLoaded", startTimer);

window.topSlide = topSlide;
