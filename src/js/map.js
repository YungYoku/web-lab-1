const body = document.querySelector("body");
const mapDom = document.querySelector(".map");
const map = document.querySelector(".yandex");
const mapClose = document.querySelector(".mapClose");

if (mapDom) {
    mapDom.addEventListener("click", e => {
        if (e.target.id !== "mapClose") {
            mapClose.style.display = "block";
            map.style.display = "block";
            body.style.overflow = "hidden";
        }
    });
}

if (mapClose) {
    mapClose.addEventListener("click", () => {
        mapClose.style.display = "none";
        map.style.display = "none";
        body.style.overflow = null;
    });
}