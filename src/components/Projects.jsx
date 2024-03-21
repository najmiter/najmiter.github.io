/* eslint-disable react/prop-types */
export default function Projects({ projects }) {
    return (
        <section className="projects-section" id="projects">
            <h1 className="section-heading">Projects</h1>
            <div className="wrapper projects-wrapper">
                {projects?.map(
                    ({ name, thumbnail, short_description, try_link }, i) => (
                        <div className="project-card" key={i}>
                            <img
                                loading="lazy"
                                src={thumbnail}
                                className="project-thumbnail"
                                alt="chitter thumbnail"
                            />
                            <h2 className="project-title">{name}</h2>
                            <div className="project-description">
                                {short_description}
                            </div>
                            <div className="project-actions">
                                <button
                                    className="project-preview-btn"
                                    data-id={i}
                                >
                                    Preview
                                </button>
                                <button className="project-try-btn">
                                    <a href={try_link} target="_blank">
                                        Try
                                    </a>
                                </button>
                            </div>
                        </div>
                    )
                )}
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
