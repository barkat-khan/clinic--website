let nav = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
})

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }

})
