import "./OurFamily.scss";
import ChevronDown from "#/assets/svg/chevron-down";
import SparklesOurFamily from "#/assets/svg/sparkles-our-family";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import SparklesStardustValley from "#/assets/svg/sparkles-stardust-valley";

const OurFamily = () => {
  return (
    <div className="family">
      <div className="family__banner">
        <HeaderSection
          as="header"
          title="OUR FAMILY."
          preDescription="Four virtual content creators walk into a cafe..."
          description="<span>Wait, but really.</span>
          <div><span>Buffpup</span>, <span>AiCandii</span>, <span>rosedoodle</span>, and <span>ShiaBun</span> — each came from a very different 
          part of Stardust Valley, some even hailing from outside the city proper. 
          But while each had their responsibilities, their hopes, and their goals… Something was missing.</div>"
          SparklesComponent={SparklesOurFamily}
          customStyles="our-family"
        />
        <button className="more-lore">
          <ChevronDown />
          See more lore
          <ChevronDown />
        </button>
      </div>
      <div>
        <HeaderSection
          as="header"
          title="STARDUST VALLEY."
          SparklesComponent={SparklesStardustValley}
          customStyles="stardust-valley"
        />
      </div>
    </div>
  );
};

export default OurFamily;
