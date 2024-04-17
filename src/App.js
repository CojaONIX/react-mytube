import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
