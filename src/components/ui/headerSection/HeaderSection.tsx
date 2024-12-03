import React from "react";
import "./HeaderSection.scss";

interface HeaderSectionProps {
  as?: keyof JSX.IntrinsicElements; // Allows to select the type of thml tag
  title: string;
  preDescription?: string;
  description?: string;
  headingLevel?: keyof JSX.IntrinsicElements;
  SparklesComponent?: React.ElementType;
  customStyles?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  as: Component = "section",
  title,
  preDescription,
  description,
  headingLevel: Heading = "h1",
  SparklesComponent,
  customStyles = "",
}) => (
  <Component className={`header-section ${customStyles}`}>
    <div className="title-wrapper">
      <Heading className="title" dangerouslySetInnerHTML={{ __html: title }} />
      {SparklesComponent && <SparklesComponent className="sparkles" />}
    </div>

    {preDescription && <p className="preDescription">{preDescription}</p>}
    {description && (
      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    )}
  </Component>
);

export default HeaderSection;
