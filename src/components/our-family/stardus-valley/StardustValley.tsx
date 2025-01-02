import Image from "next/image";
import "./StardustValley.scss";
import BigStamp from "#/assets/svg/our-family/big-stamp";
import SmallStamp from "#/assets/svg/our-family/small-stamp";
import StardustBg from "#/assets/svg/stardust-bg";
import { loreModalInfo } from "#/helpers/lore-modal-info";
import LoreBtnMap from "./LoreBtnMap";

const StardustValley = () => {
  return (
    <div className="stardust-valley">
      <StardustBg className="swirly-bg" />
      <div className="map-wrapper">
        <Image
          alt="stardust valley map"
          src="https://framerusercontent.com/images/p0JPnRnLDU3UWOIzaNKSLU288c.png"
          width={964}
          height={553}
          className="map"
        />

        {loreModalInfo.map((btn) => (
          <LoreBtnMap customStyles={btn.styles} key={btn.title} />
        ))}
        <BigStamp className="big-stamp" />
        <SmallStamp className="small-stamp" />
      </div>
    </div>
  );
};

export default StardustValley;
