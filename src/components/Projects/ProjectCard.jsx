/* eslint-disable react/prop-types */
export default function ProjectCard({ project, index }) {
    const { name, thumbnail, short_description, try_link } = project;
    return (
        <div className="project-card">
            <img
                loading="lazy"
                src={thumbnail}
                className="project-thumbnail"
                alt="chitter thumbnail"
            />
            <h2 className="project-title">{name}</h2>
            <div className="project-description">{short_description}</div>
            <div className="project-actions">
                <button className="project-preview-btn" data-id={index}>
                    Preview
                </button>
                <button className="project-try-btn">
                    <a href={try_link} target="_blank">
                        Try
                    </a>
                </button>
            </div>
        </div>
    );
}
