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
import { AnimatePresence } from "framer-motion";

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
      <div className="map-wrapper">
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
      </div>
    </div>
  );
};

export default StardustValley;
