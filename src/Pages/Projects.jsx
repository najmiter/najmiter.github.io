import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export default function Projects() {
    const [projects, set_projects] = useState([]);

    useEffect(function () {
        async function get_projects() {
            const jwb = await fetch("projects/projects.json");
            const { projects } = await jwb.json();
            set_projects(projects);
        }

        get_projects();
    }, []);

    return (
        <>
            <Navbar />
            <section className="projects-section" id="projects">
                <h1 className="section-heading">Projects</h1>
                <div className="wrapper projects-wrapper">
                    {projects?.map((project, i) => (
                        <ProjectCard project={project} index={i} key={i} />
                    ))}
                </div>
            </section>
        </>
    );
}
