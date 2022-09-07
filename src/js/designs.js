const designsDesktop = document.querySelector("#designsDesktop");
const designsMobile = document.querySelector("#designsMobile");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    if (designsDesktop) {
        designsDesktop.style.display = "none";
    }
} else {
    if (designsMobile) {
        designsMobile.style.display = "none";
    }
}
