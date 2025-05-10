import React from "react";

interface VideoProps {
  src: string;
  width: string;
  height: string;
}

const Video: React.FC<VideoProps> = ({ src, height, width }) => {
  return <iframe src={src} width={width} height={height}></iframe>;
};

export default Video;
