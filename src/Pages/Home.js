import AllVideos from "../Components/AllVideos";
import SearchBar from "../Components/SearchBar";

const Home = () => {

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