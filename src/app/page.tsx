import Sparkles from "./assets/svg/sparkles";
import "./Home.scss";
import Image from "next/image";

export default function Home() {
  const vchibanStars = [
    {
      image:
        "https://framerusercontent.com/images/egsCxJ8bBLJnBeLd3zJ2zHu3K8.png",
      name: "Buffpup",
      twitch: "https://www.twitch.tv/buffpup",
      twitter: "https://x.com/buffpup_",
      youtube: "https://www.youtube.com/c/buffpup",
      vchibanIcon:
        "https://framerusercontent.com/images/Gb7M4AqcQWZRDDh2l5BlYmd5iNQ.svg",
    },
    {
      image:
        "https://framerusercontent.com/images/i98KG1in26kTjUBTE3AGJQInI.png",
      name: "rosedoodle",
      twitch: "https://www.twitch.tv/rosedoodle",
      twitter: "https://x.com/rosedoodles",
      youtube: "https://www.youtube.com/c/rosedoodle",
      vchibanIcon:
        "https://framerusercontent.com/images/8HR1brtaB3PFmcM4etpx3bPscK8.svg",
    },
    {
      image:
        "https://framerusercontent.com/images/OmJKahKPWXzK7LY8ynI7s8Kdono.png",
      name: "AiCandii",
      twitch: "https://www.twitch.tv/aicandii",
      twitter: "https://x.com/aicandii",
      youtube: "https://www.youtube.com/c/aicandii",
      vchibanIcon:
        "https://framerusercontent.com/images/CJwb3hPIQJLZotR4xXD9AhZY.svg",
    },
    {
      image:
        "https://framerusercontent.com/images/KdbRYrY97UvrNOAQ9m5UczABWM.png",

      name: "ShiaBun",
      twitch: "https://www.twitch.tv/shiabun",
      twitter: "https://x.com/shiabun",
      youtube: "https://www.youtube.com/c/shiabun",
      vchibanIcon:
        "https://framerusercontent.com/images/D2eskKKL7ZV7NNnmcgISfwFaRk.svg",
    },
  ];

  return (
    <section className="home">
      <div className="banner">
        <div className="title-container">
          <div className="section-title">
            <h1 className="title">
              FOUND FAMILY <br />
              INDIE GROUP.
            </h1>
            <Sparkles className="sparkles" />
          </div>
        </div>

        <div className="members">
          {vchibanStars.map((member) => (
            <div
              key={member.name}
              className={`star-container ${member.name.toLowerCase()}`}
            >
              <Image
                src={member.image}
                alt={member.name}
                layout="responsive"
                width={791}
                height={1274}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
