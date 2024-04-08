/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";

import styles from "./Projects.module.css";

export default function Projects({ projects }) {
    return (
        <section className={styles.projectsSection}>
            <Outlet />
            {projects ? (
                <div className={styles.projects}>
                    <h1>Projects</h1>
                    <div className={styles.projectsList}>
                        {projects.map((project, i) => (
                            <Link to={`${i}`} key={project.name}>
                                <div className={styles.projectCard}>
                                    <img
                                        src={project.thumbnail}
                                        alt={project.name}
                                    />
                                    <div>
                                        <h2>{project.name}</h2>
                                        <p>{project.short_description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                ""
            )}
        </section>
    );
}
