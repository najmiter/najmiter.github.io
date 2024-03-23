import { Link } from "react-router-dom";
// import BurgerMenu from "./BurgerMenu";
import "../styles/globals.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">
                <Link to="/">najmiter</Link>
            </h1>

            <ul className="links">
                <li className="link-item">
                    <Link to="/projects">Projects</Link>
                </li>

                <li className="link-item">
                    <Link
                        href="https://youtube.com/najmiter"
                        target="_blank"
                        className="nav-link"
                    >
                        YouTube
                    </Link>
                </li>
            </ul>
            {/* <BurgerMenu /> */}
        </nav>
    );
}
