"use client";
import "./OurFamily.scss";
import dynamic from "next/dynamic";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import SparklesStardustValley from "#/assets/svg/sparkles/sparkles-stardust-valley";
import StardustValley from "#/components/our-family/stardus-valley/StardustValley";
import SparklesBetterTogether from "#/assets/svg/sparkles/sparkles-better-together";
import Image from "next/image";
import SpringButton from "#/components/ui/springBtn/SpringButton";
import ChevronRight from "#/assets/svg/chevron-right";
import FooterSeparator from "#/components/ui/footerSeparator/FooterSeparator";
import MembersRaibow from "#/components/our-family/members-rainbow/MembersRainbow";
import BuffpupIcon from "#/assets/svg/our-family/buffpup-icon";
import AicandiiIcon from "#/assets/svg/our-family/aicandii-icon";
import RoseIcon from "#/assets/svg/our-family/rose-icon";
import ShiabunIcon from "#/assets/svg/our-family/shiabun-icon";
import TogetherExcl1 from "#/assets/svg/our-family/together-excl-1";
import TogetherExcl2 from "#/assets/svg/our-family/together-excl-2";
import TogetherExcl3 from "#/assets/svg/our-family/together-excl-3";
import OurFamilyBanner from "#/components/our-family/banner/OurFamilyBanner";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const OurFamily = () => {
  return (
    <div className="family">
      <OurFamilyBanner />
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
            width="100%"
            height="100%"
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
      </div>
      <div className="rainbow-content-wrapper">
        <h2 className="became-family-title">
          They became a family; they became <span>VchiBan.</span>
        </h2>
        <div className="rainbow-showcase">
          <MembersRaibow />
          <BuffpupIcon className="buff" />
          <AicandiiIcon className="candii" />
          <RoseIcon className="rose" />
          <ShiabunIcon className="shia" />
        </div>
      </div>
      <div className="endeavors">
        <HeaderSection
          as="div"
          title="BETTER TOGETHER, <br/> NOW AND FOREVER."
          description={
            <>
              VchiBan is more than just a VTuber Friend group - they&apos;re a
              found family with <br /> a wide array of creative & innovative
              endeavors up their sleeve!
            </>
          }
          SparklesComponent={SparklesBetterTogether}
          customStyles="better-together"
        />
        <div className="endeavors__list">
          <div className="container">
            <div className="image-wrapper">
              <Image
                alt="games"
                src="https://framerusercontent.com/images/tZn0Ml3CD1UtGfNJgC5xXrk01pE.jpg"
                width={676}
                height={136}
                className="bg-img"
              />
            </div>
            <div className="type-of-endeavor">
              <h3>Games</h3>
              <SpringButton
                firstIcon="https://framerusercontent.com/images/XpGvthSNzunUXiPh7ihK39s3I.svg"
                SecondIcon={ChevronRight}
                isTransitionBouncy={true}
                text="play now"
              />
            </div>
          </div>
          <div className="container">
            <div className="image-wrapper">
              <Image
                alt="games"
                src="https://framerusercontent.com/images/nyHiTFwhvV1BwUOwDuBUrOZTA.png"
                width={676}
                height={136}
                className="bg-img"
              />
            </div>
            <div className="type-of-endeavor">
              <h3>Merch</h3>

              <SpringButton
                firstIcon="https://framerusercontent.com/images/cx8wHmlKBcVwCZSMFNRz7ZE.svg"
                SecondIcon={ChevronRight}
                isTransitionBouncy={true}
                text="view merch"
              />
            </div>
          </div>
          <div className="container">
            <div className="image-wrapper">
              <Image
                alt="games"
                src="https://framerusercontent.com/images/Oniq6Ilkfg3uldP14tnYY1KWso.png"
                width={676}
                height={136}
                className="bg-img"
              />
            </div>
            <div className="type-of-endeavor">
              <h3>Events</h3>

              <SpringButton
                firstIcon="https://framerusercontent.com/images/57YdWeGgVZbcT0ajkrGCZOXFeA.svg"
                SecondIcon={ChevronRight}
                isTransitionBouncy={true}
                text="see events"
              />
            </div>
          </div>
        </div>
        <TogetherExcl1 className="excl-1" />
        <TogetherExcl2 className="excl-2" />
        <TogetherExcl3 className="excl-3" />
      </div>
      <FooterSeparator />
    </div>
  );
};

export default OurFamily;
