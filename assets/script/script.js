var openBtn = document.getElementById("open-nav-links");
var closenav = document.getElementById("close-nav-links");
var nav = document.getElementById("nav-links");


openBtn.addEventListener("click", () => {
    nav.style.top = "0";
})

closenav.addEventListener("click", () => {
    nav.style.top= "-263px";
})

