

const SearchBar = ({videos, onSearchVideo}) => {

    const SearchVideoByTitle = (searchString, videos, onSearchVideo) => {
        searchString = searchString.toLowerCase();
        let counter = 0;
        videos.forEach(video => {
            let title = video.title.toLowerCase();
            if(title.includes(searchString)) {
                counter++;
            }
        });
        console.log(counter);
    };

    return (
        <form className="col-md-4">
            <label className="form-label">Search:</label>
            <input onInput={ (e) => SearchVideoByTitle(e.currentTarget.value, videos, onSearchVideo) } className="form-control" type="text" name="search" autoFocus />
        </form>
    );
}

export default SearchBar;