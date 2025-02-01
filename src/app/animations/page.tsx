import "./Animations.scss";
import SparklesAnimation from "#/assets/svg/sparkles/sparkles-animation";
import VideoCard from "../../components/animations/VideoCard";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import CineStrip1 from "#/assets/svg/animations/cine-strip-1";
import CineStrip2 from "#/assets/svg/animations/cine-strip-2";
import CineStrip3 from "#/assets/svg/animations/cine-strip-3";
import CineStrip4 from "#/assets/svg/animations/cine-strip-4";
import FooterSeparator from "#/components/ui/footerSeparator/FooterSeparator";

const Animations = () => {
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
          <article className="video-card" key={link.title}>
            <VideoCard key={link.videoId} link={link} />
          </article>
        ))}
        <CineStrip4 className="strip4" />
      </section>

      <FooterSeparator />
    </div>
  );
};

export default Animations;
