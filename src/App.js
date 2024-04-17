import "bootstrap/dist/css/bootstrap.min.css"

const VIDEOS = [
    {
        id: 1,
        title: "Realna situacija u IT-u",
        link: "https://www.youtube.com/watch?v=eV0E2-_8UJg&t=801s",
        cover: "https://i.ytimg.com/vi/eV0E2-_8UJg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoK3KQilouChVzsc5yBSh8NP9MOw"
    },
    {
        id: 2,
        title: "Kako naučiti programiranje?",
        link: "https://www.youtube.com/watch?v=Dtdr505IuYM",
        cover: "https://i.ytimg.com/vi/Dtdr505IuYM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_ToFytfp9PU8DPYz9wfZI1cPHFQ"
    }
];
const App = () => {
    return (
        <div className="container">

            <h2>MyTube</h2>

            <hr/>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                VIDEOS.map((video) => {
                    return  <div className="card-group">
                                <div className="card">

                                    <div className="card-header">
                                        <p>id: {video.id}</p>
                                    </div>

                                    <img src={video.cover} className="card-img-top" alt="..."/>

                                    <div className="card-body">
                                        <h5>{video.title}</h5>
                                    </div>

                                    <div className="card-footer d-flex justify-content-between">
                                        <a href={video.link} className="btn btn-primary" target="_blank">Play</a>
                                    </div>
                                </div>
                            </div>
                })
            }
            </div>
        </div>
    );
}

export default App;
