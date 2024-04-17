
import VIDEOS from '../videos.json';

const AllVideos = () => {

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                VIDEOS.map((video) => {
                    return (
                        <div className="card-group">
                            <div className="card">

                                <div className="card-header">
                                    <p>id: {video.id}</p>
                                </div>

                                <img src={video.cover} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5>{video.title}</h5>
                                </div>

                                <div className="card-footer d-flex justify-content-between">
                                    <a href={video.link} className="btn btn-primary" target="_blank">Play</a>
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