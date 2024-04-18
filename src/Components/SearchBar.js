

const SearchBar = ({videos, onSearchVideo}) => {

    const SearchVideoByTitle = (searchString) => {
        searchString = searchString.toLowerCase();
        let foundVideos = [];
        videos.forEach(video => {
            let title = video.title.toLowerCase();
            if(title.includes(searchString)) {
                foundVideos.push(video);
            }
        });
        onSearchVideo(foundVideos);
    };

    return (
        <form className="col-md-4">
            <label className="form-label">Search:</label>
            <input onInput={ (e) => SearchVideoByTitle(e.currentTarget.value) } className="form-control" type="text" name="search" autoFocus />
        </form>
    );
}

export default SearchBar;