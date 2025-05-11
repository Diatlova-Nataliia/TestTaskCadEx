"use client";

import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

interface VideoProps {
  id: string;
  title: string;
}

const Video: React.FC<VideoProps> = ({ id, title }) => {
  return <LiteYouTubeEmbed id={id} title={title}></LiteYouTubeEmbed>;
};

export default Video;
