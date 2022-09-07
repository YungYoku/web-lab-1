const statisticsCurrent = [0, 0, 0, 0, 0];
const statistics = [42, 123, 15, 99, 24];
const statisticsDom = [
    document.querySelector(".statistics__1"),
    document.querySelector(".statistics__2"),
    document.querySelector(".statistics__3"),
    document.querySelector(".statistics__4"),
    document.querySelector(".statistics__5")
];
let firstShowing = true;
const height =
    document.querySelector(".top").clientHeight
    + document.querySelector(".story").clientHeight;

const animateStatistics = i => {
    setTimeout(() => {
        statisticsDom[i].innerHTML = "" + statisticsCurrent[i];
        statisticsCurrent[i]++;

        if (statistics[i] >= statisticsCurrent[i]) {
            animateStatistics(i);
        }
    }, 10);
};

function validate() {
    if (
        firstShowing &&
        (window.pageYOffset + window.screen.availHeight) > (height + document.querySelector(".statistics").clientHeight) &&
        (window.pageYOffset < height)
    ) {
        firstShowing = false;

        for (let i = 0; i < 5; i++) {
            animateStatistics(i);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    validate();

    document.addEventListener("scroll", validate);
});
