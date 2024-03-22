/* eslint-disable react/prop-types */
import Khero from "../../components/Khero";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Projects from "./HomeProjects";
import { useEffect } from "react";

export default function Homepage({ projects, showCount, setActiveProject }) {
    useEffect(function () {
        document.title = "Homepage";
    }, []);

    return (
        <>
            <Khero>
                <Navbar />
                <Main />
            </Khero>

            <Projects
                showCount={showCount}
                projects={projects}
                setActiveProject={setActiveProject}
            />
        </>
    );
}
