import Image from "next/image";
import "./ImgCarousel.scss";

interface SpringButtonProps {
  firstImg: string;
  secondImg: string;
  thirdImg: string;
}

const ImgCarousel: React.FC<SpringButtonProps> = ({
  firstImg,
  secondImg,
  thirdImg,
}) => {
  return (
    <div className="img-carousel">
      <div className="img-wrapper">
        <Image
          alt="gooba-1"
          src={firstImg}
          width={786}
          height={442}
          className="bg-img"
        />
      </div>

      <div className="img-wrapper">
        <Image
          alt="gooba-2"
          src={secondImg}
          width={786}
          height={442}
          className="bg-img"
        />
      </div>
      <div className="img-wrapper">
        <Image
          alt="gooba-3"
          src={thirdImg}
          width={786}
          height={442}
          className="bg-img"
        />
      </div>
    </div>
  );
};

export default ImgCarousel;
