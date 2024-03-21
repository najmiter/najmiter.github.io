import Khero from "./components/Khero";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";

import { useEffect, useState } from "react";

export default function App() {
    const [projects, set_projects] = useState([]);

    useEffect(function () {
        async function get_projects() {
            const jwb = await fetch("projects/projects.json");
            const { projects } = await jwb.json();
            set_projects(projects);
        }

        get_projects();
    }, []);

    return (
        <>
            <Khero>
                <Navbar />
                <Main />
            </Khero>

            <Projects projects={projects} />
        </>
    );
}
