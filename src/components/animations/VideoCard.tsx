"use client";
import React, { useState, useEffect } from "react";
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
  const [videoSize, setVideoSize] = useState({ width: "90%", height: "auto" });
  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      const newWidth = screenWidth < 810 ? "100%" : "100%";
      const newHeight =
        screenWidth < 810 ? `${(9 / 16) * screenWidth}px` : "95vh";

      setVideoSize({ width: newWidth, height: newHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
        width={videoSize.width}
        height={videoSize.height}
        className="video"
      />
    </motion.div>
  );
};
export default VideoCard;
