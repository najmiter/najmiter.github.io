function create_project_card(
    { name, thumbnail, short_description, try_link },
    i
) {
    const card = document.createElement("div");
    card.setAttribute("class", "project-card");

    card.innerHTML = `
        <img
            loading="lazy"
            src="${thumbnail}"
            class="project-thumbnail"
            alt="chitter thumbnail"
        />
        <h2 class="project-title">${name}</h2>

        <div class="project-description">${short_description}</div>
        <div class="project-actions">
            <button class="project-preview-btn" data-id=${i}>Preview</button>
            <button class="project-try-btn">
                <a
                    href="${try_link}"
                    target="_blank"
                    >Try</a
                >
            </button>
        </div>`;

    return card;
}
