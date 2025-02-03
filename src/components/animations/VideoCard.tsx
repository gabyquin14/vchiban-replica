"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

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
    <motion.div
      className="video-card"
      initial={{ opacity: 0, transform: "scale(0.9)" }}
      whileInView={{
        opacity: 1,
        transform: "scale(1)",
      }}
      transition={{ duration: 0.3, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h2 className="video-title">{link.title}</h2>
      <ReactPlayer
        url={`https://www.youtube.com/embed/${link.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white`}
        controls={true}
        className="video"
      />
    </motion.div>
  );
};
export default VideoCard;
