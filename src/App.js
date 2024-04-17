import "bootstrap/dist/css/bootstrap.min.css"
import AllVideos from "./Components/AllVideos";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                        <div className="container">
                            <h2>MyTube</h2>
                            <hr/>
                            <AllVideos/>
                        </div>
                    }
                />


            </Routes>
        </BrowserRouter>

    );
}

export default App;
