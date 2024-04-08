import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1 style={{ paddingBlockEnd: "2rem" }}>⚠️ 404 - Page not found</h1>
            <NavLink to="/">Go back home</NavLink>
        </div>
    );
}
