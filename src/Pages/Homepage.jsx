import Khero from "../components/Khero";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Projects from "./Projects";

export default function Homepage() {
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
