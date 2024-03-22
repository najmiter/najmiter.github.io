/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index, setActiveProject }) {
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
            <div className="project-actions">
                <Link to="/projects">
                    <button
                        className="project-preview-btn"
                        data-id={index}
                        onClick={() => setActiveProject(project)}
                    >
                        Preview
                    </button>
                </Link>

                <button className="project-try-btn">
                    <a href={try_link} target="_blank">
                        Try
                    </a>
                </button>
            </div>
        </div>
    );
}
