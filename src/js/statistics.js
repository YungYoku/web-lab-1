const statisticsCurrent = [0, 0, 0, 0, 0];
const statistics = [42, 123, 15, 99, 24];
const statisticsDom = [
    document.querySelector(".statistics__1"),
    document.querySelector(".statistics__2"),
    document.querySelector(".statistics__3"),
    document.querySelector(".statistics__4"),
    document.querySelector(".statistics__5")
];
const topDom = document.querySelector(".top");
const storyDom = document.querySelector(".story");
let firstShowing = true;

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
    if (!topDom || !storyDom) {
        return;
    }
    
    const height = topDom.clientHeight + storyDom.clientHeight;

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
