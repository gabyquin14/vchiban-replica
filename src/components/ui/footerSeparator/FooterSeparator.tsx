import { FC } from "react";
import "./FooterSeparator.scss";

interface SeparatorProps {
  color?: string;
  name?: string;
}

const FooterSeparator: FC<SeparatorProps> = ({ color, name }) => {
  const returnColor = () => {
    if (color) return color;

    if (name?.includes("buffpup")) return "var(--buffpup-orange)";
    if (name?.includes("aicandii")) return "var(--candi-purple)";
    if (name?.includes("shiabun")) return "var(--shia-light-pink)";
    if (name?.includes("rosedoodle")) return "var(--rosedoodle-bg-dark-cyan)";

    return "var(--body-bg)";
  };

  return (
    <div className="footer-separator">
      <div className="footer-color">
        <div
          className="page-color"
          style={{ backgroundColor: `${returnColor()}` }}
        />
      </div>
      <div className="footer-color">
        <div
          className="page-color"
          style={{ backgroundColor: `${returnColor()}` }}
        />
      </div>
    </div>
  );
};

export default FooterSeparator;
