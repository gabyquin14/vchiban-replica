import Image from "next/image";
import "./StardustValley.scss";
import BigStamp from "#/assets/svg/big-stamp";
import SmallStamp from "#/assets/svg/small-stamp";

const StardustValley = () => {
  return (
    <div className="stardust-valley">
      <div className="map-wrapper">
        <Image
          alt="stardust valley map"
          src="https://framerusercontent.com/images/p0JPnRnLDU3UWOIzaNKSLU288c.png"
          width={964}
          height={553}
          className="map"
        />
        <BigStamp className="big-stamp" />
        <SmallStamp className="small-stamp" />
      </div>
    </div>
  );
};

export default StardustValley;
