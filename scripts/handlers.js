close_preview.addEventListener("click", handle_close_preview);

document.addEventListener("keydown", function (key) {
    if (key.code === "Escape") {
        handle_close_preview();
    }
});
