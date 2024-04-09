/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";

import styles from "./ProjectPreview.module.css";

export default function ProjectPreview({ projects }) {
    const { id } = useParams();
    const clickedProject = projects.at(id);

    return (
        <section className={styles.projectPreview}>
            <Link to="..">Go back</Link>
            <h1>{clickedProject.name}</h1>
            <div className={styles.projectPreviewTags}>
                {clickedProject.tags.map((tag) => (
                    <div key={tag}>{tag}</div>
                ))}
            </div>
            <div className={styles.projectPreviewStartDate}>
                {clickedProject.start_date}
            </div>

            <p>{clickedProject.long_description}</p>
            {clickedProject.previews.map((img) => (
                <img src={img} key={img} alt="" />
            ))}
        </section>
    );
}
