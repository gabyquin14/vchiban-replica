import { FC } from "react";
import "./BouncyBgButton.scss";
import { motion } from "framer-motion";
import { springTransition } from "#/helpers/const-animations";
import Link from "next/link";

interface Props {
  href: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  text?: string;
}

const BouncyBgButton: FC<Props> = ({ href, Icon, text }) => {
  return (
    <Link href={href} target="_blank" className="bouncy-btn">
      {Icon && <Icon className="icon" />}
      {text && (
        <div className="content-wrapper">
          <span className="content">{text}</span>
        </div>
      )}
      <motion.div
        className="bouncy-bg"
        whileHover={{ inset: "-4px -4px" }}
        transition={springTransition}
      />
    </Link>
  );
};

export default BouncyBgButton;
