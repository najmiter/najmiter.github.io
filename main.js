const poo = document.getElementById("poo");
const poo_img = document.getElementById("poo-img");
let timeout_id = undefined;

poo.addEventListener("click", function (click) {
    click.preventDefault();
    clearTimeout(timeout_id);

    poo_img.setAttribute("src", "imgs/poo.webp");
    poo_img.classList.add("poop");
    timeout_id = setTimeout(() => {
        poo_img.classList.remove("poop");
        poo_img.setAttribute("src", "");
    }, 3 * 1000);
});
