import styles from "./Homepage.module.css";

export default function Homepage() {
    return (
        <main className={styles.homepage}>
            <h1>Najam ul Hassan</h1>
            <img className={styles.kheroImg} src="/imgs/khero.webp" alt="" />
        </main>
    );
}
