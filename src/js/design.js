const body = document.querySelector("body");
const bg = document.querySelector(".design");
const phone = document.querySelector(".phone");
const tablet = document.querySelector(".tablet");
const topDom = document.querySelector(".top");
const storyDom = document.querySelector(".story");
const statisticsDom = document.querySelector(".statistics");
const servicesDom = document.querySelector(".services");
let firstShowing = true;

const updateDefaultStyles = () => {
    if (tablet) {
        tablet.style.transform = `translateX(-${window.innerWidth / 2 + tablet.getBoundingClientRect().width / 2}px)`;
    }

    if (phone) {
        phone.style.transform = `translateX(${window.innerWidth - phone.getBoundingClientRect().x}px)`;
    }
};
updateDefaultStyles();

function animateDesign() {
    if (!topDom || !storyDom || !statisticsDom || !servicesDom) {
        return;
    }

    const height =
        topDom.clientHeight
        + storyDom.clientHeight
        + statisticsDom.clientHeight
        + servicesDom.clientHeight;

    if (
        firstShowing &&
        (window.pageYOffset + window.innerHeight) > (height + document.querySelector(".design").clientHeight) &&
        (window.pageYOffset < height)
    ) {
        firstShowing = false;

        setTimeout(() => {
            phone.style.transform = null;
            tablet.style.transform = null;
        }, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    animateDesign();

    document.addEventListener("scroll", animateDesign);

    body.onmousemove = function (e) {
        let result;
        const x = (e.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2) * 50;
        const y = (e.clientY - (window.innerHeight / 2)) / (window.innerHeight / 2) * 50;

        result = "top " + (50 + y) + "%";
        result += " left " + (50 + x) + "%";

        if (bg) {
            bg.style.backgroundPosition = result;
        }
    };
});
