/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ProjectCard from "./ProjectCard";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ProjectPreview from "./ProjectPreview";

export default function Projects({ projects }) {
    const [activeProject, setActiveProject] = useState(null);

    useEffect(function () {
        window.scrollTo(0, 0);
        document.title = "Projects";
    }, []);

    return (
        <>
            <Navbar />
            <section className="projects-page">
                <div className="projects">
                    {projects.map((project, i) => (
                        <ProjectCard
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
        </>
    );
}
