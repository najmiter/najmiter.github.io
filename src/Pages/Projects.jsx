/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects({ showCount }) {
    const [projects, set_projects] = useState([]);
    const [show_count, set_show_count] = useState(showCount);

    useEffect(
        function () {
            async function get_projects() {
                const jwb = await fetch("projects/projects.json");
                const { projects } = await jwb.json();
                set_show_count((p) => p ?? projects.length);

                set_projects(projects);
            }

            get_projects();

            document.title = "Projects";
        },
        [showCount]
    );

    return (
        <>
            <Navbar />
            <section className="projects-section" id="projects">
                <h1 className="section-heading">
                    <Link to="/projects">Projects</Link>
                </h1>
                <div className="wrapper projects-wrapper">
                    {projects?.map((project, i) =>
                        i < show_count ? (
                            <ProjectCard project={project} index={i} key={i} />
                        ) : (
                            ""
                        )
                    )}
                </div>
            </section>
        </>
    );
}
