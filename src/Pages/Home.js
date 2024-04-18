import AllVideos from "../Components/AllVideos";
import SearchBar from "../Components/SearchBar";
import {useState} from "react";
import VIDEOS from "../videos.json";

const Home = () => {

    const [videos, setVideos] = useState(VIDEOS);
    const [filteredVideos, setFilteredVideos] = useState(VIDEOS);

    const handleSearchVideo = (results) => {
        setFilteredVideos(results);
    }


    return (
        <div className="container">
            <h2>MyTube</h2>
            <hr/>
            <SearchBar videos={videos} onSearchVideo={handleSearchVideo} />
            <hr/>
            <AllVideos videos={filteredVideos} />
        </div>
    );
}

export default Home;