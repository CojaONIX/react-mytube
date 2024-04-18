import AllVideos from "../Components/AllVideos";
import SearchBar from "../Components/SearchBar";
import {useState} from "react";
import VIDEOS from "../videos.json";

const Home = () => {

    const [videos, setVideos] = useState(VIDEOS);

    return (
        <div className="container">
            <h2>MyTube</h2>
            <hr/>
            <SearchBar />
            <hr/>
            <AllVideos />
        </div>
    );
}

export default Home;