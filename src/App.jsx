import Khero from "./components/Khero";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
    return (
        <>
            <Khero>
                <Navbar />
                <Main />
            </Khero>
        </>
    );
}
