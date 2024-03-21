import Khero from "../components/Khero";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Projects from "./Projects";
import { useEffect } from "react";

export default function Homepage() {
    useEffect(function () {
        document.title = "Homepage";
    }, []);

    return (
        <>
            <Khero>
                <Navbar />
                <Main />
            </Khero>

            <Projects showCount={9} />
        </>
    );
}
