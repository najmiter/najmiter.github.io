import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

export default function Homepage() {
    return (
        <section className={styles.homepage}>
            <div>
                The name... is:
                <h1>Najam ul Hassan</h1>
                Sounds way cooler when Prime does it but anyway. <br />
                <br />
                Lacking the skills to make a really creative portfolio. What
                you&apos;ll notice is that, on the{" "}
                <strong>
                    <Link to="projects">next</Link>
                </strong>{" "}
                page, I do have got some of my <strong>projects</strong> done
                over the last couple of months. Kindly look at those and judge
                me as developer after looking at them.
            </div>
            <img className={styles.kheroImg} src="/imgs/khero.webp" alt="" />
        </section>
    );
}
