import "./GameCorner.scss";
import SparklesGameCorner from "#/assets/svg/sparkles-game-corner";
import SanjisEyebrow from "#/assets/svg/swirly-thingy";
import HeaderSection from "#/components/ui/headerSection/HeaderSection";

const GameCorner = () => {
  return (
    <div className="game-corner">
      <div className="header">
        <SanjisEyebrow className="sanjis-eyebrow" />
        <HeaderSection
          as="h1"
          title="<span>GAME</span> <br/> CORNER."
          description={
            <>
              Welcome to VchiBan’s game corner! Here you’ll find the games that
              VchiBan has produced. All of these titles <br /> have been
              hand-crafted by yours truly, and also whoever else they paid.
            </>
          }
          SparklesComponent={SparklesGameCorner}
          customStyles="game-corner"
        />
        <SanjisEyebrow className="sanjis-eyebrow" />
        <div className="separator">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default GameCorner;
