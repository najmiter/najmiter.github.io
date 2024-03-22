/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ProjectCard from "./ProjectCard";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import ProjectPreview from "./ProjectPreview";
import "./style.css";

export default function Projects({
    projects,
    activeProject,
    setActiveProject,
}) {
    useEffect(
        function () {
            window.scrollTo(0, 0);
            document.title = activeProject?.name ?? "Projects";
        },
        [activeProject]
    );

    return (
        <>
            <div className="projects-main-wrapper">
                <Navbar />
                <section className="projects-page">
                    <div className="projects">
                        {projects.map((project, i) => (
                            <ProjectCard
                                isActive={activeProject?.name === project?.name}
                                setActiveProject={setActiveProject}
                                project={project}
                                key={i}
                            />
                        ))}
                    </div>
                    {activeProject ? (
                        <ProjectPreview project={activeProject} />
                    ) : (
                        <div className="preview">
                            Please select a project to preview
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}
