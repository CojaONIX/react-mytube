import {useParams} from "react-router-dom";

const Video = () => {

    const { id } = useParams();

    return (
        <h2>Test Video {id}</h2>
    )
}

export default Video;