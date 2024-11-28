"use client";
import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface Link {
  title: string;
  desc: string;
  videoId: string;
}
interface VideoCardProps {
  link: Link;
}
const VideoCard = ({ link }: VideoCardProps) => {
  return (
    <>
      <h2 className="video-title">{link.title}</h2>
      <ReactPlayer
        url={`https://www.youtube.com/embed/${link.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white`}
        controls={true}
        className="video"
      />
    </>
  );
};
export default VideoCard;
