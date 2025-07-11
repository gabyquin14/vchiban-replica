"use client";
import "./MapModal.scss";
import Image from "next/image";
import { ModalInfoInterface } from "#/helpers/LoreModalInfo";
import Exit from "#/assets/svg/exit";
import { motion } from "framer-motion";

interface ModalProps {
  info: ModalInfoInterface;
  closeModal: () => void;
}

const MapModal: React.FC<ModalProps> = ({ info, closeModal }) => {
  const handleRedirect = () => {
    if (typeof window !== "undefined" && info.link) {
      window.open(info.link, "_blank");
    }
  };

  return (
    <motion.div
      className="map-modal"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="map-modal__content"
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
        initial={{ opacity: 0, transform: "translateY(40rem) rotate(5deg)" }}
        animate={{ opacity: 1, transform: "translateY(0rem) rotate(0deg)" }}
        exit={{ opacity: 0, transform: "translateY(40rem) rotate(0deg)" }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={(definition: string) => {
          if (definition === "exit") closeModal();
        }}
      >
        <div className="map-modal__header">
          <h1
            className={`${info.link ? "underline" : ""}`}
            onClick={handleRedirect}
          >
            {info.title}
          </h1>
          <Exit onClick={closeModal} />
        </div>
        <div className="map-modal__body">
          <p dangerouslySetInnerHTML={{ __html: info.desc }} />
          {info.img && (
            <div className="map-modal__img">
              <Image src={info.img} alt={info.title} width={526} height={296} />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MapModal;
