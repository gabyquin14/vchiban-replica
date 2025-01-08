import "./LoreBtnMap.scss";
import Info from "#/assets/svg/info";
import React from "react";

interface InfoBtnProps {
  customStyles?: string;
}

const LoreModalMap: React.FC<InfoBtnProps> = ({ customStyles }) => {
  return <div className={`outer-circle ${customStyles}`}>{/* <Info /> */}</div>;
};

export default LoreModalMap;
