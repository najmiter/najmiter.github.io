import { useState } from "react";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="burger-menu">
            <span
                role="button"
                className="burger"
                onClick={() => {
                    setMenuActive(!menuActive);
                }}
            >
                🍔
            </span>
            {false && (
                <div className="mobile-menu-items">
                    <Link to="/projects">Projects</Link>
                    <Link target="_blank" to="https://youtube.com/najmiter">
                        YouTube
                    </Link>
                </div>
            )}
        </div>
    );
}
