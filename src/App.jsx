import Homepage from "./Pages/HomePage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects/Projects";
import { useEffect, useState } from "react";

const DEFAUL_PROJECT_SHOW_COUNT = 9;

export default function App() {
    const [projects, setProjects] = useState([]);
    const [showCount, setShowCount] = useState(DEFAUL_PROJECT_SHOW_COUNT);
    const [activeProject, setActiveProject] = useState(null);

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
                        <Homepage
                            projects={projects}
                            showCount={showCount}
                            setActiveProject={setActiveProject}
                        />
                    }
                />
                <Route
                    path="projects"
                    element={
                        <Projects
                            projects={projects}
                            activeProject={activeProject}
                            setActiveProject={setActiveProject}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
