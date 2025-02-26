"use client";
import Image from "next/image";
import "./StardustValley.scss";
import { ModalInfoInterface } from "#/helpers/lore-modal-info";
import BigStamp from "#/assets/svg/our-family/big-stamp";
import SmallStamp from "#/assets/svg/our-family/small-stamp";
import StardustBg from "#/assets/svg/stardust-bg";
import { loreModalInfo } from "#/helpers/lore-modal-info";
import LoreBtnMap from "./LoreBtnMap";
import MapModal from "./MapModal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const StardustValley = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalInfoInterface>();

  const toggleModal = (info?: ModalInfoInterface) => {
    const modalStatus = !modalOpen;

    setModalOpen(modalStatus);
    setModalInfo(info);

    document.body.style.overflowY = modalStatus ? "hidden" : "auto";
  };

  return (
    <div className="stardust-valley">
      <StardustBg className="swirly-bg" />
      <motion.div
        className="map-wrapper"
        initial={{ opacity: 0, scale: 0.8, y: 20, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          alt="stardust valley map"
          src="https://framerusercontent.com/images/p0JPnRnLDU3UWOIzaNKSLU288c.png"
          width={964}
          height={553}
          className="map"
        />

        {loreModalInfo.map((info) => (
          <div
            key={info.title}
            onClick={(e) => {
              toggleModal(info);
            }}
          >
            <LoreBtnMap customStyles={info?.styles} />
          </div>
        ))}
        <AnimatePresence mode="wait">
          {modalOpen && modalInfo && (
            <MapModal key="modal" info={modalInfo} closeModal={toggleModal} />
          )}
        </AnimatePresence>

        <BigStamp className="big-stamp" />
        <SmallStamp className="small-stamp" />
      </motion.div>
    </div>
  );
};

export default StardustValley;
