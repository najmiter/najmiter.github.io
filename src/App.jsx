import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Links from "./pages/Links";
import ProjectPreview from "./components/ProjectPreview";
import { useEffect, useState } from "react";
import Courses from "./pages/Courses";

export default function App() {
    const [projects, setProjects] = useState(null);

    useEffect(function () {
        (async function () {
            fetch("projects/projects.json")
                .then((jwb) => jwb.json())
                .then((projs) => setProjects(projs.projects));
        })();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="links" element={<Links />} />
                    <Route path="*" element={<NotFound />} />

                    <Route path="projects">
                        <Route
                            index
                            element={<Projects projects={projects} />}
                        />
                        <Route
                            path=":id"
                            element={<ProjectPreview projects={projects} />}
                        />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
