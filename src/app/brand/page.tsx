import HeaderSection from "#/components/ui/headerSection/HeaderSection";
import LegalExclMark1 from "../../assets/svg/legal-excl-mark1";
import LegalExclMark2 from "../../assets/svg/legal-excl-mark2";
import "./Brand.scss";

const Brand = () => {
  return (
    <div className="brand">
      <HeaderSection as="header" title="BRAND" customStyles="brand" />

      <section className="brand-description">
        <p>
          Welcome to VchiBan’s website! This site is intended to provide an
          overview of our brand’s visual identity, including our logo, color
          scheme, typography, and other design elements. By enjoying the
          visuals, you can ensure that your designs are consistent with our
          online personalities and help us to maintain a strong and recognizable
          entertainment across all platforms.
        </p>
        <br />
        <p>
          Our logo is the cornerstone of our brand identity. It is a unique
          symbol that represents our group and should always be used in its
          original form. The logo should be reproduced using only our approved
          color schemes and should never be stretched, distorted, or modified in
          any way.
        </p>
        <br />
        <p>
          Finally, it’s important to remember that our brand design guide is a
          living document that may be updated from time to time. As such, it’s
          important to check back regularly for updates and to ensure that your
          designs always reflect the latest lore! By working together to
          maintain a strong and consistent visual identity, we can ensure that
          our group stands out and continues to grow and thrive for years to
          come!! strong and consistent visual identity, we can ensure that our
          group stands out and continues to grow and thrive for years to come!!
        </p>
      </section>
      <div className="exclamation-marks">
        <LegalExclMark1 />
        <LegalExclMark2 />
      </div>
    </div>
  );
};

export default Brand;
