import {useParams} from "react-router-dom";
import VIDEOS from '../videos.json';
import YoutubeEmbed from "./YoutubeEmbed";

const Video = () => {

    const { id } = useParams();
    const video = VIDEOS.find((e) => {
                        return e.id === parseInt(id);
                    });

    console.log(video);
    if(video === undefined) {
        return (
            <h2>Video id: {id} not exists!</h2>
        )
    }


    return (
        <div className="card-group">
            <div className="card">

                <div className="card-header">
                    <h5>{video.id}: {video.title}</h5>
                </div>

                <YoutubeEmbed embedId={video.embedId} />

                <div className="card-footer d-flex justify-content-between">
                    <p>{video.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Video;