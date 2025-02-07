import { FC } from "react";
import "./BouncyBgButton.scss";
import { motion, MotionProps } from "framer-motion";
import { springTransition } from "#/helpers/const-animations";
import Link from "next/link";

interface Props {
  href?: string;
  action?: () => void;
  Icon?: React.ElementType;
  text?: string;
  transition?: boolean;
  iconAnimation?: MotionProps; // Nueva prop para animar el Icon
}

const BouncyBgButton: FC<Props> = ({
  href,
  Icon,
  text,
  action,
  transition,
  iconAnimation,
}) => {
  const isLink = Boolean(href);

  const ButtonContent = (
    <>
      {Icon &&
        (iconAnimation ? (
          <motion.div className="icon" {...iconAnimation}>
            <Icon />
          </motion.div>
        ) : (
          <Icon className="icon" />
        ))}
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
    </>
  );

  if (isLink) {
    return (
      <Link href={href!} target="_blank" className="bouncy-btn">
        {ButtonContent}
      </Link>
    );
  }

  const ButtonComponent = transition ? motion.button : "button";

  return (
    <ButtonComponent onClick={action} className="bouncy-btn">
      {ButtonContent}
    </ButtonComponent>
  );
};

export default BouncyBgButton;
