const projects_wrapper = document.getElementById("projects-wrapper");

async function get_projects() {
    const jwb = await fetch("../projects/projects.json");
    const { projects } = await jwb.json();

    return projects;
}

async function render_projects() {
    const projects_ = await get_projects();

    projects.length = 0;
    projects.push(...projects_);

    projects_wrapper.innerHTML = "";

    for (const [i, project] of projects_.entries()) {
        const new_project = create_project_card(project, i);
        projects_wrapper.appendChild(new_project);
    }

    return projects_wrapper.innerHTML !== "";
}

async function bruh() {
    const we_rendered_something = await render_projects();

    if (we_rendered_something) {
        const project_preview_btns = document.querySelectorAll(
            ".project-preview-btn"
        );

        project_preview_btns.forEach((btn) =>
            btn.addEventListener("click", function (click) {
                const id = +click.target.getAttribute("data-id");
                render_preview_for(id);
            })
        );
    } else {
        projects_wrapper.textContent = "no projects found";
    }
}

bruh();
