import VIDEOS from '../videos.json';

const SearchBar = () => {

    const SearchVideo = (e) => {
        const searchString = e.target.value.toLowerCase();
        let counter = 0;
        VIDEOS.forEach(video => {
            if(video.title.toLowerCase().includes(searchString)) {
                counter++;
            }
        });
        console.log(counter);
    };

    return (
        <form className="col-md-4">
            <label className="form-label">Search:</label>
            <input onInput={ SearchVideo } className="form-control" type="text" name="search" autoFocus />
        </form>
    );
}

export default SearchBar;