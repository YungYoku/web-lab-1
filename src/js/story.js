const storyDesktop = document.querySelector("#storyDesktop").style;
const storyMobile = document.querySelector("#storyMobile").style;

storyDesktop.display = "none";
storyMobile.display = "block";

const imageWraps = [
    document.querySelector(".story__image1Wrap").style,
    document.querySelector(".story__image2Wrap").style,
    document.querySelector(".story__image3Wrap").style
];

let index = 0;
let animationIsGoing = false;

function prevImage() {
    swapImage(false);

    setTimeout(() => {
        swapImage();
    }, 5000);
}

function nextImage() {
    swapImage(false);

    setTimeout(() => {
        swapImage();
    }, 5000);
}

function swapImage(continuation = true, time = 5000) {
    if (!animationIsGoing) {
        animationIsGoing = true;
        imageWraps[index % 3].opacity = "0";

        setTimeout(() => {
            imageWraps[(index + 1) % 3].opacity = "1";
            imageWraps[(index + 1) % 3].display = "flex";

            setTimeout(() => {
                imageWraps[index % 3].display = "none";
                animationIsGoing = false;
                index++;

                if (continuation) {
                    setTimeout(() => {
                        swapImage();
                    }, time);
                }
            }, 500);
        }, 500);
    }
}

setTimeout(() => {
    swapImage();
}, 5000);

window.nextImage = nextImage;
window.prevImage = prevImage;
