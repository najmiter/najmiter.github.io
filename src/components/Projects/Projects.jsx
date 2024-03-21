import ProjectCard from "./ProjectCard";

/* eslint-disable react/prop-types */
export default function Projects({ projects }) {
    return (
        <section className="projects-section" id="projects">
            <h1 className="section-heading">Projects</h1>
            <div className="wrapper projects-wrapper">
                {projects?.map((project, i) => (
                    <ProjectCard project={project} index={i} key={i} />
                ))}
            </div>

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
        </section>
    );
}
