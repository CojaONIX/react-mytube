import "bootstrap/dist/css/bootstrap.min.css"
import AllVideos from "./Components/AllVideos";


const App = () => {
    return (
        <div className="container">

            <h2>MyTube</h2>
            <hr/>

            <AllVideos />

        </div>
    );
}

export default App;
