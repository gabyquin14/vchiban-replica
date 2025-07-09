import React, { useState } from "react";
import { motion } from "framer-motion";
import Info from "#/assets/svg/info";
import "./LoreBtnMap.scss";

interface InfoBtnProps {
  customStyles?: string;
}

const LoreModalMap: React.FC<InfoBtnProps> = ({ customStyles }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="lore-container">
      <motion.div
        className={`outer-circle ${customStyles} `}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        animate={{
          scale: isHover ? 3.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 14 }}
      >
        <motion.div
          className="info-icon"
          animate={{
            scale: isHover ? 0.35 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 14 }}
        >
          <Info />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoreModalMap;
