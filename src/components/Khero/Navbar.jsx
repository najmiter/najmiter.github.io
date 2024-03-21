export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">
                <a href="/">najmiter</a>
            </h1>
            <ul className="links">
                <li className="link-item">
                    <a href="#about-me-section" className="nav-link">
                        About me
                    </a>
                </li>
                <li className="link-item">
                    <a href="#projects" className="nav-link">
                        Projects
                    </a>
                </li>
                <li className="link-item">
                    <a
                        href="https://youtube.com/najmiter"
                        target="_blank"
                        className="nav-link"
                    >
                        YouTube
                    </a>
                </li>
                <li className="link-item">
                    <a href="" id="poo" className="nav-link">
                        thingk
                    </a>
                </li>
            </ul>
            <span role="button" className="burger">
                🍔
            </span>
        </nav>
    );
}
