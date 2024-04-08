import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    function handleSetMenuActive() {
        setMenuActive(false);
    }

    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <h1 className={styles.logo}>najmiter</h1>
            </Link>
            <div onClick={() => setMenuActive(true)} className={styles.burger}>
                🍔
            </div>

            <div
                className={`${styles.explore} ${!menuActive ? styles.none : ""}`}
            >
                <h3 className={styles.exploreHeading}>Explore</h3>
                <NavLink
                    onClick={handleSetMenuActive}
                    to="/"
                    className={styles.exploreItem}
                >
                    🏠 Homepage
                </NavLink>
                <NavLink
                    onClick={handleSetMenuActive}
                    to="projects"
                    className={styles.exploreItem}
                >
                    👨🏻‍💻 Projects
                </NavLink>
                <NavLink
                    onClick={handleSetMenuActive}
                    to="contact"
                    className={styles.exploreItem}
                >
                    📩 Contact
                </NavLink>
                <NavLink
                    onClick={handleSetMenuActive}
                    to="links"
                    className={styles.exploreItem}
                >
                    🔗 Links
                </NavLink>
                {menuActive && (
                    <button onClick={handleSetMenuActive}>BACK</button>
                )}
            </div>
        </nav>
    );
}
