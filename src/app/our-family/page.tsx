"use client";
import "./OurFamily.scss";
import dynamic from "next/dynamic";
import ChevronDown from "#/assets/svg/chevron-down";
import SparklesOurFamily from "#/assets/svg/sparkles-our-family";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import SparklesStardustValley from "#/assets/svg/sparkles-stardust-valley";
import StardustValley from "#/components/our-family/StardustValley";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const OurFamily = () => {
  const familyDescription = () => {
    return (
      <>
        <span>Wait, but really.</span>
        <span className="stars">
          <span>Buffpup</span>, <span>AiCandii</span>, <span>rosedoodle</span>,
          and <span>ShiaBun</span> — each came from a very different part of
          Stardust Valley, some even hailing from outside the city proper. But
          while each had their responsibilities, their hopes, and their goals…
          Something was missing.
        </span>
      </>
    );
  };
  return (
    <div className="family">
      <div className="family__banner">
        <HeaderSection
          as="header"
          title="OUR FAMILY."
          preDescription="Four virtual content creators walk into a cafe..."
          description={familyDescription()}
          SparklesComponent={SparklesOurFamily}
          customStyles="our-family"
        />
        <button className="more-lore">
          <ChevronDown />
          See more lore
          <ChevronDown />
        </button>
      </div>
      <div className="family__stardust-map">
        <div className="header-and-map">
          <HeaderSection
            as="header"
            title="STARDUST VALLEY."
            SparklesComponent={SparklesStardustValley}
            customStyles="stardust-valley"
          />
          <StardustValley />
        </div>

        <p className="description">
          They all went to get a coffee on the same day, at the same time. A
          small indulgence, one that they’d satiated plenty of times before. But
          this time it was different. They turned up to their usual spot,
          VchiBan COFFEE, and found themselves faced with a new reality.
        </p>

        <div className="home-vchiban">
          <ReactPlayer
            url={`https://www.youtube.com/embed/4CxlS6IYnFM&t?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white`}
            controls={true}
            className="video"
          />
        </div>

        <div className="description">
          <p>
            It’s hard to pinpoint exactly who spoke to who first. It was an easy
            laugh to cover an awkward brush, the overlap at the counter, not
            enough seats, someone’s coat stuck under someone’s seat chair… And
            then the four of them ended up sitting at a booth, feeling like
            maybe they didn’t have to get coffee alone anymore.
          </p>
          <p>
            Like maybe they had someone who could match their jokes, who
            understood them without having to explain it. They’d wake up eager
            to check their phone, or send memes that reminded them of the other.
            And then they’d end up in calls for hours, goofing, laughing, losing
            track of time.
          </p>
          <p>
            But it was never lost time, the time they spent together. It was
            carefully curated, cherished and kept close to the chest. They
            worked hard to be there for one another, they supported one another.
            And then it became exactly what they always knew it was.
          </p>
        </div>

        <h2 className="became-family-title">
          They became a family; they became <span>VchiBan.</span>
        </h2>
      </div>
    </div>
  );
};

export default OurFamily;
