import ChevronDown from "#/assets/svg/chevron-down";
import House from "#/assets/svg/house";
import AicandiiSilhouette from "#/assets/svg/our-family/aicandii-silhouette";
import BannerExcl1 from "#/assets/svg/our-family/banner-excl-1";
import BannerExcl2 from "#/assets/svg/our-family/banner-excl-2";
import BuffpupSilhouette from "#/assets/svg/our-family/buffpup-silhouette";
import RoseSilhouette from "#/assets/svg/our-family/rose-silhouette";
import ShiabunSilhouette from "#/assets/svg/our-family/shiabun-silhouette";
import SparklesOurFamily from "#/assets/svg/sparkles/sparkles-our-family";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import { springTransition } from "#/helpers/const-animations";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const OurFamilyBanner = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 14 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 14 });
  const smoothMembersX = useSpring(x, { stiffness: 300, damping: 30 });
  const smoothMembersY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const houseX = useTransform(smoothX, [0, windowDimensions?.width], [-5, 5]);
  const houseY = useTransform(smoothY, [0, windowDimensions?.height], [-5, 5]);
  const membersX = useTransform(
    smoothMembersX,
    [0, windowDimensions?.width],
    [-15, 15]
  );
  const membersY = useTransform(
    smoothMembersY,
    [0, windowDimensions?.height],
    [-15, 15]
  );

  const exclMarkX = useTransform(
    smoothX,
    [0, windowDimensions?.width],
    [-5, 5]
  );
  const exclMarkY = useTransform(
    smoothY,
    [0, windowDimensions?.height],
    [-5, 5]
  );

  const handleMouse = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
    x.set(clientX);
    y.set(clientY);
  };

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

  const [isHover, setIsHover] = useState(false);

  return (
    <div className="family__banner" onMouseMove={handleMouse}>
      <HeaderSection
        as="header"
        title="OUR FAMILY."
        preDescription="Four virtual content creators walk into a cafe..."
        description={familyDescription()}
        SparklesComponent={SparklesOurFamily}
        customStyles="our-family"
      />

      {/* Background images tracking mouse movement */}
      <motion.div className="excl-marks" style={{ x: exclMarkX, y: exclMarkY }}>
        <BannerExcl1 className="excl-1" />
        <BannerExcl2 className="excl-2" />
      </motion.div>

      <motion.div className="members" style={{ x: membersX, y: membersY }}>
        <ShiabunSilhouette className="shia" />
        <RoseSilhouette className="rose" />
        <AicandiiSilhouette className="candii" />
        <BuffpupSilhouette className="buff" />
      </motion.div>

      <motion.div className="house" style={{ x: houseX, y: houseY }}>
        <House />
      </motion.div>

      <button className="lore-btn">
        <motion.div
          className="more-lore"
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        >
          <motion.div
            className="chevron"
            animate={{
              transform: isHover ? "translateY(1rem)" : "translateY(0rem)",
            }}
            initial={{ transform: "translateY(0rem)" }}
            transition={springTransition}
          >
            <ChevronDown />
          </motion.div>
          See more lore
          <motion.div
            className="chevron"
            animate={{
              transform: isHover ? "translateY(1rem)" : "translateY(0rem)",
            }}
            initial={{ transform: "translateY(0rem)" }}
            transition={springTransition}
          >
            <ChevronDown />
          </motion.div>
        </motion.div>
      </button>
    </div>
  );
};

export default OurFamilyBanner;
