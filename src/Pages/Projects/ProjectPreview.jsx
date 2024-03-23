/* eslint-disable react/prop-types */
import ProjectActions from "../../components/ProjectActions";

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
            <ProjectActions try_link={project.try_link} project={project} />
            <p className="project-preview-description">
                {project.long_description}
            </p>
            <img className="project-thumbnail" src={project.preview} alt="" />
        </div>
    );
}
