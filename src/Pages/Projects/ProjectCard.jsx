/* eslint-disable react/prop-types */
export default function ProjectCard({ project, setActiveProject, isActive }) {
    return (
        <div
            className={`project-card ${isActive ? "active-preview-project-card" : ""}`}
            onClick={() => {
                setActiveProject(project);
            }}
        >
            <img src={project.thumbnail} className="project-thumbnail" alt="" />
            <div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-short-des">
                    {project.short_description.substring(0, 45)}...
                </p>
            </div>
        </div>
    );
}
