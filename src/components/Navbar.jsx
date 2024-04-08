import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(window.innerWidth <= 1000);

    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <h1 className={styles.logo}>najmiter</h1>
            </Link>
            <div
                onClick={() => setMenuActive(!menuActive)}
                className={styles.burger}
            >
                🍔
            </div>

            <div
                className={`${styles.explore} ${!menuActive ? styles.none : ""}`}
            >
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
                {menuActive && (
                    <button
                        onClick={() => {
                            setMenuActive(false);
                        }}
                    >
                        BACK
                    </button>
                )}
            </div>
        </nav>
    );
}
