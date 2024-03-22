import Homepage from "./Pages/HomePage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects/Projects";
import { useEffect, useState } from "react";

const DEFAUL_PROJECT_SHOW_COUNT = 9;

export default function App() {
    const [projects, setProjects] = useState([]);
    const [showCount, setShowCount] = useState(DEFAUL_PROJECT_SHOW_COUNT);

    useEffect(function () {
        async function fetchProjects() {
            const jwb = await fetch("projects/projects.json");
            const { projects } = await jwb.json();
            setShowCount((p) => p ?? projects.length);

            setProjects(projects);
        }

        fetchProjects();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Homepage projects={projects} showCount={showCount} />
                    }
                />
                <Route
                    path="projects"
                    element={<Projects projects={projects} />}
                />
            </Routes>
        </BrowserRouter>
    );
}
