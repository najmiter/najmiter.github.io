close_preview.addEventListener("click", handle_close_preview);

document.addEventListener("keydown", function (key) {
    if (key.code === "Escape") {
        handle_close_preview();
    }
});

let previous_scroll = 0;
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
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
