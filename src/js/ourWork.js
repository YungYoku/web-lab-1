import image1 from "../assets/img/work1.png";
import image2 from "../assets/img/work2.png";
import image3 from "../assets/img/work3.png";
import image4 from "../assets/img/work4.png";
import image5 from "../assets/img/work5.png";
import image6 from "../assets/img/work6.png";
import image7 from "../assets/img/work7.png";

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
];

const photoWrap = document.querySelector(".ourWork__openedPhotoWrap");
const photo = document.querySelector(".openedPhoto");

function openPhoto(index) {
    photoWrap.style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
    photo.src = images[index - 1];
}

function closePhoto(id) {
    if (id === "close") {
        photoWrap.style.display = "none";
        document.querySelector("body").style.overflow = null;
    }
}

document.openPhoto = openPhoto;
document.closePhoto = closePhoto;