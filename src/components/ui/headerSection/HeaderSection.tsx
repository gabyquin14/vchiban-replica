import React from "react";
import "./HeaderSection.scss";

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
}) => (
  <Component className={`header-section ${customStyles}`}>
    <div className="title-wrapper">
      {<>{children}</>}
      <Heading className="title" dangerouslySetInnerHTML={{ __html: title }} />
      {SparklesComponent && <SparklesComponent className="sparkles" />}
    </div>

    {preDescription && <p className="preDescription">{preDescription}</p>}
    {description && <p className="description">{description}</p>}
  </Component>
);

export default HeaderSection;
