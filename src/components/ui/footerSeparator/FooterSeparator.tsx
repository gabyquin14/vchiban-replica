import { FC } from "react";

interface SeparatorProps {
  color?: string;
}

const FooterSeparator: FC<SeparatorProps> = ({ color = "var(--body-bg)" }) => {
  return (
    <div className="footer-separator">
      <div style={{ backgroundColor: `${color}` }}></div>
    </div>
  );
};

export default FooterSeparator;
