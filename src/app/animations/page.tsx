"use client";
import "./Animations.scss";
import SparklesAnimation from "#/assets/svg/sparkles/sparkles-animation";
import VideoCard from "../../components/animations/VideoCard";
import HeaderSection from "#/components/ui/header-section/HeaderSection";
import CineStrip1 from "#/assets/svg/animations/cine-strip-1";
import CineStrip2 from "#/assets/svg/animations/cine-strip-2";
import CineStrip3 from "#/assets/svg/animations/cine-strip-3";
import CineStrip4 from "#/assets/svg/animations/cine-strip-4";
import FooterSeparator from "#/components/ui/footer-separator/FooterSeparator";
import { motion } from "framer-motion";
import useAnimationDelay from "#/hooks/useAnimationDelay";

const Animations = () => {
  const animate = useAnimationDelay(0);
  const animationsLinks = [
    {
      title: "Buffpup's First Cover Song",
      desc: "",
      videoId: "5fPnLiSuy84",
    },
    {
      title: "1 Year Anniversary",
      desc: "",
      videoId: "5D6Oho7_IiA",
    },
    {
      title: "Buffpup 3.0 - AiCandii Lab Data Entry #428",
      desc: "",
      videoId: "23fTS2kGD3s",
    },
    {
      title: "Buffpup Corpa Outfit Lore",
      desc: "",
      videoId: "CXziasLolDg",
    },
    {
      title: "Buffpup 3.0 Lore Video [ ATROPHIED ARC ]",
      desc: "",
      videoId: "NVqnQ0t37Gw",
    },
    {
      title: "VchiBan Winter Wishes",
      desc: "",
      videoId: "cNnMiyk31MU",
    },
    {
      title: "VchiBan Summer Splash",
      desc: "",
      videoId: "94BeNyD5_Mc",
    },
    {
      title: "VchiBan debut animation - Welcome Home VchiBan!",
      desc: "",
      videoId: "4CxlS6IYnFM",
    },
  ];
  return (
    <div className="animations">
      <div className="header-wrapper">
        <HeaderSection
          as="header"
          title="ANIMATIONS."
          SparklesComponent={SparklesAnimation}
          description={
            <>
              VchiBan makes their own animations too! <br />
              Here’s a showreel of all the beautiful works they were able to
              conjure up so far!
            </>
          }
          customStyles="animation"
        />
        <CineStrip1 className="strip1" />
        <CineStrip2 className="strip2" />
        <CineStrip3 className="strip3" />
      </div>

      <section className="videos-list">
        {animationsLinks.map((link) => (
          <motion.article
            key={link.title}
            className="video-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <VideoCard key={link.videoId} link={link} />
          </motion.article>
        ))}
        <CineStrip4 className="strip4" />
      </section>

      <FooterSeparator />
    </div>
  );
};

export default Animations;
