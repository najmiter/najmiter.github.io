const navbar = document.getElementById("navbar");
close_preview.addEventListener("click", handle_close_preview);

document.addEventListener("keydown", function (key) {
    if (key.code === "Escape") {
        handle_close_preview();
    }
});

let previous_scroll = 0;
window.addEventListener("scroll", function () {
    hide_mobile_navbar();
    const threshold = 500;

    if (
        window.scrollY - previous_scroll >= 0 &&
        window.scrollY > threshold &&
        !navbar.classList.contains("goaway")
    ) {
        navbar.classList.add("goaway");
        navbar.classList.remove("comeback");
    }

    if (
        window.scrollY - previous_scroll < 0 &&
        !navbar.classList.contains("comeback")
    ) {
        navbar.classList.add("comeback");
        navbar.classList.remove("goaway");
    }

    previous_scroll = window.scrollY;
});

const burger = document.getElementById("burger");
const mobile_navbar = document.querySelector(".mobile-navbar");
burger.addEventListener("click", function (click) {
    mobile_navbar.style.display = "grid";

    mobile_navbar.style.top = click.clientY + "px";
    mobile_navbar.style.left = click.clientX - 225 + "px";
    mobile_navbar.classList.remove("fadeout");
    mobile_navbar.classList.add("fadein");
});

mobile_navbar.addEventListener("click", function (click) {
    if (click.target.closest("li")) {
        click.target.querySelector("a")?.click();
        hide_mobile_navbar();
    }
});

function hide_mobile_navbar() {
    mobile_navbar.classList.remove("fadein");
    mobile_navbar.classList.add("fadeout");
    setTimeout(() => {
        mobile_navbar.style.display = "none";
    }, 500);
}
