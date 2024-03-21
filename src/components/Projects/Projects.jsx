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
        </section>
    );
}
