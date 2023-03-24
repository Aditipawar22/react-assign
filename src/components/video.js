import "./video.css";
import SampleVideo from "../assets/sample.mp4";

function video() {
  return (
    <div className="video1">

    <video src={SampleVideo} controls="controls" autoplay="false" />

      {/* <iframe src={SampleVideo}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        /> */}
    </div>
  );
}

export default video;
