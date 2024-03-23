/* eslint-disable react/prop-types */
import ProjectActions from "./ProjectActions";

export default function ProjectCard({ project, setActiveProject }) {
    const { name, thumbnail, short_description, try_link } = project;
    return (
        <div className="project-card">
            <img
                loading="lazy"
                src={thumbnail}
                className="project-thumbnail"
                alt={`${name} thumbnail`}
            />
            <h2 className="project-title">{name}</h2>
            <div className="project-description">{short_description}</div>
            <ProjectActions
                showPreviewBtn={true}
                try_link={try_link}
                setActiveProject={setActiveProject}
                project={project}
            />
        </div>
    );
}
