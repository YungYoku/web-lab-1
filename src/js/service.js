const infoBlocks = [
    document.querySelector(".weDoInfo1"),
    document.querySelector(".weDoInfo2"),
    document.querySelector(".weDoInfo3")
];
const buttons = [
    document.querySelector(".weDoBtn1"),
    document.querySelector(".weDoBtn2"),
    document.querySelector(".weDoBtn3")
];

let previousShow = 1;

function reset(number = 0) {
    for (let i = 1; i <= 3; i++) {
        if (number === i) {
            continue;
        }

        const infoBlock = infoBlocks[i - 1];
        const button = buttons[i - 1];
        if (infoBlock && button) {
            infoBlock.style.height = "0";
            infoBlock.style.paddingBottom = null;
            infoBlock.style.paddingTop = null;
            button.style.transform = null;
            setTimeout(() => {
                infoBlock.style.borderTop = null;
            }, 150);
        }
    }
}

function showInfo(number) {
    const infoBlock = infoBlocks[number - 1];

    if (!(previousShow === number && infoBlock && infoBlock.style.height === "160px")) {
        previousShow = number;
        reset(number);

        const button = buttons[number - 1];
        if (infoBlock && button) {
            button.style.transform = "rotate(180deg)";
            infoBlock.style.height = "160px";
            infoBlock.style.paddingTop = "10px";
            infoBlock.style.paddingBottom = "10px";
            setTimeout(() => {
                infoBlock.style.borderTop = "1px solid #cccccc";
            }, 50);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.onload = function () {
        showInfo(1);
    };
});

document.showInfo = showInfo;