import { FC } from "react";
import "./NewFromWorld.scss";
import Sparkles from "#/app/assets/svg/sparkles";
import SparklesNewWorld from "#/app/assets/svg/sparkles-new-world";

const NewFromWorldVchiban: FC = () => {
  return (
    <div className="new-world">
      <div className="section-title">
        <h1 className="title">
          NEW FROM THE WORLD <br />
          <span>OF VCHIBAN</span>
        </h1>
        <SparklesNewWorld className="sparkles" />
      </div>
    </div>
  );
};

export default NewFromWorldVchiban;
