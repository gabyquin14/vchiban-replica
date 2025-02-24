import React from "react";
import "./HeaderSection.scss";
import { motion } from "framer-motion";
import useAnimationDelay from "#/hooks/useAnimationDelay";

interface HeaderSectionProps {
  as?: keyof JSX.IntrinsicElements; // Allows to select the type of html tag
  title: string;
  preDescription?: string;
  description?: React.ReactNode;
  headingLevel?: keyof JSX.IntrinsicElements;
  SparklesComponent?: React.ElementType;
  customStyles?: string;
  children?: JSX.Element | JSX.Element[];
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  as: Component = "section",
  title,
  preDescription,
  description,
  headingLevel: Heading = "h1",
  SparklesComponent,
  customStyles = "",
  children,
}) => {
  const animate = useAnimationDelay(0);

  return (
    <Component className={`header-section ${customStyles}`}>
      <motion.div
        className="title-wrapper"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 180,
          damping: 30,
          mass: 1,
        }}
      >
        {<>{children}</>}
        <Heading
          className="title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {SparklesComponent && <SparklesComponent className="sparkles" />}
      </motion.div>

      {preDescription && (
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.7,
            type: "spring",
            stiffness: 180,
            damping: 30,
            mass: 1,
          }}
          className="preDescription"
        >
          {preDescription}
        </motion.p>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 180,
            damping: 30,
            mass: 1,
          }}
          className="description"
        >
          {description}
        </motion.p>
      )}
    </Component>
  );
};
export default HeaderSection;
