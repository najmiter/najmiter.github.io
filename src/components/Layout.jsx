import styles from "./Layout.module.css";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <main className={styles.wrapper}>
            <Navbar />
            <Outlet />
        </main>
    );
}
