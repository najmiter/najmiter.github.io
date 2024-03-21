export default function ProjectPreview() {
    return (
        <div style={{ display: "none" }} className="project-preview-window">
            <button className="project-preview-close">&times;</button>
            <h1 className="project-preview-title"></h1>
            <div className="project-preview-tags"></div>
            <div className="project-preview-start-date"></div>
            <div className="project-preview-description"></div>
            <img
                className="project-preview-img"
                src=""
                loading="lazy"
                alt="project preview"
            />
        </div>
    );
}
