import VIDEOS from '../videos.json';

const SearchBar = () => {

    const SearchVideoByTitle = (searchString) => {
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
            <input onInput={ (e) => SearchVideoByTitle(e.target.value.toLowerCase()) } className="form-control" type="text" name="search" autoFocus />
        </form>
    );
}

export default SearchBar;