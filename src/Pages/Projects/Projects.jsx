/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ProjectCard from "../../components/ProjectCard";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Projects({ showCount, projects }) {
    const showCountInner = showCount ?? projects.length;

    useEffect(function () {
        window.scrollTo(0, 0);
        document.title = "Projects";
    }, []);

    return (
        <>
            <Navbar />
            <section className="projects-section" id="projects">
                <h1 className="section-heading">
                    <Link to="/projects">Projects</Link>
                </h1>
                <div className="wrapper projects-wrapper">
                    {projects?.map((project, i) =>
                        i < showCountInner ? (
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
