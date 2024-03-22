/* eslint-disable react/prop-types */

export default function ProjectPreview({ project }) {
    return (
        <div className="preview">
            <h1 className="preview-project-title">{project.name}</h1>
            <div className="preview-project-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className="preview-project-tag-item">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="project-preview-start-date">{project.start_date}</p>
            <p className="project-preview-description">
                {project.long_description}
            </p>
            <img className="project-preview" src={project.preview} alt="" />
        </div>
    );
}
