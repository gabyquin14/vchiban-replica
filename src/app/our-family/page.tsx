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
import { motion } from "framer-motion";
import useAnimationDelay from "#/hooks/useAnimationDelay";
import { endeavors } from "#/helpers/members-info";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const OurFamily = () => {
  const animate = useAnimationDelay(0);

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
            delay={0}
          />
          <StardustValley />
        </div>

        <p className="description">
          They all went to get a coffee on the same day, at the same time. A
          small indulgence, one that they’d satiated plenty of times before. But
          this time it was different. They turned up to their usual spot,
          VchiBan COFFEE, and found themselves faced with a new reality.
        </p>

        <motion.div
          className="home-vchiban"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/embed/4CxlS6IYnFM&t?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white`}
            controls={true}
            width="100%"
            height="100%"
            className="video"
          />
        </motion.div>

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
        <motion.div
          className="rainbow-showcase"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <MembersRaibow />
          <BuffpupIcon className="buff" />
          <AicandiiIcon className="candii" />
          <RoseIcon className="rose" />
          <ShiabunIcon className="shia" />
        </motion.div>
      </div>
      <motion.div
        className="endeavors"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
      >
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
          delay={0}
        />
        <motion.div
          className="endeavors__list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          {endeavors.map(({ title, img, btnText, icon }, index) => (
            <motion.div
              className="container"
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="image-wrapper">
                <Image
                  alt={title}
                  src={img}
                  width={676}
                  height={136}
                  className="bg-img"
                />
              </div>
              <div className="type-of-endeavor">
                <h3>{title}</h3>
                <SpringButton
                  firstIcon={icon}
                  SecondIcon={ChevronRight}
                  isTransitionBouncy
                  text={btnText}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <TogetherExcl1 className="excl-1" />
        <TogetherExcl2 className="excl-2" />
        <TogetherExcl3 className="excl-3" />
      </motion.div>
      <FooterSeparator />
    </div>
  );
};

export default OurFamily;
