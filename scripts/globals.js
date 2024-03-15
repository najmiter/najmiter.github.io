const close_preview = document.getElementById("project-preview-close");
const project_preview_window = document.getElementById(
    "project-preview-window"
);
const projects_section = document.getElementById("projects-section");
const preview_window = document.getElementById("project-preview-window");
const projects = [];

function render_preview_for(id) {
    const to_be = projects.at(id);

    if (to_be) {
        const title = document.getElementById("project-preview-title");
        const long_description = document.getElementById(
            "project-preview-description"
        );
        const img = document.getElementById("project-preview-img");

        preview_window.style.display = "flex";
        document.documentElement.style.overflow = "hidden";

        title.textContent = to_be.name ?? "Title not found";
        long_description.textContent =
            to_be.long_description ?? "Description not found";

        img.setAttribute("src", to_be.preview);
    }
}

function handle_close_preview() {
    project_preview_window.style.display = "none";
    document.documentElement.style.overflow = "auto";
}
