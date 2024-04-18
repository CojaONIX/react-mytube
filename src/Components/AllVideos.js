

const AllVideos = ({videos}) => {

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                videos.map((video) => {
                    return (
                        <div className="card-group">
                            <div className="card">

                                <div className="card-header d-flex justify-content-between">
                                    <p>id: {video.id}</p>
                                    <a href={video.link} className="btn btn-outline-danger" target="_blank">PlayOnYouTube</a>
                                </div>

                                <img src={video.cover} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5>{video.title}</h5>
                                </div>

                                <div className="card-footer d-flex justify-content-end">
                                    <a href={'/video/'+video.id} className="btn btn-outline-primary">Details&Play</a>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default AllVideos;