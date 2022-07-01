import React from "react";
import ReactPlayer from "react-player";
import "./video.css";

import myVideo from "../../assets/videos/video.mp4";

export default function VideoSection() {
  return (
    <div className="video-card">
        <h3>Glimpse of Untrodden  World</h3>
      <div className="video-container">
        <ReactPlayer controls={true} width="75%" height="75%" url={myVideo} />
      </div>
    </div>
  );
}
