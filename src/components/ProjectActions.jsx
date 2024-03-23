/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ProjectActions({
    setActiveProject,
    project,
    showPreviewBtn = false,
}) {
    return (
        <div className="project-actions">
            {showPreviewBtn && (
                <Link to="/projects">
                    <button
                        className="project-preview-btn"
                        onClick={() => setActiveProject?.(project)}
                    >
                        Preview
                    </button>
                </Link>
            )}

            <Link to={project.source_link} target="_blank">
                <button>Source Code</button>
            </Link>
            <Link to={project.try_link} target="_blank">
                <button className="btn">Try</button>
            </Link>
        </div>
    );
}
