import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>najmiter.</h1>

            <div className={styles.explore}>
                <h3 className={styles.exploreHeading}>Explore</h3>
                <NavLink to="/" className={styles.exploreItem}>
                    🏠 Homepage
                </NavLink>
                <NavLink to="projects" className={styles.exploreItem}>
                    👨🏻‍💻 Projects
                </NavLink>
                <NavLink to="contact" className={styles.exploreItem}>
                    📩 Contact
                </NavLink>
                <NavLink to="links" className={styles.exploreItem}>
                    🔗 Links
                </NavLink>
            </div>
        </nav>
    );
}
