import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}
