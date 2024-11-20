import "./Animations.scss";
import SparklesAnimation from "@/assets/svg/sparkles-animation";
import VideoCard from "../components/animations/VideoCard";

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
      <section className="section-title">
        <h1 className="title">ANIMATIONS.</h1>
        <SparklesAnimation className="sparkles" />
        <p className="desc">
          VchiBan makes their own animations too!
          <br />
          Here’s a showreel of all the beautiful works they were able to conjure
          up so far!
        </p>
      </section>
      <section className="videos-list">
        {animationsLinks.map((link) => (
          <article className="video-card" key={link.title}>
            <VideoCard key={link.videoId} link={link} />
          </article>
        ))}
      </section>
    </div>
  );
};

export default Animations;
