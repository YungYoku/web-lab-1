const whoWeAreDesktop = document.querySelector("#whoWeAreDesktop").style;
const whoWeAreMobile = document.querySelector("#whoWeAreMobile").style;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    whoWeAreDesktop.display = "none";
} else {
    whoWeAreMobile.display = "none";
}
