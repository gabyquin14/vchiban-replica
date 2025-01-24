"use client";
import "./MapModal.scss";
import Image from "next/image";
import { ModalInfoInterface } from "#/helpers/lore-modal-info";
import Exit from "#/assets/svg/exit";

interface ModalProps {
  info: ModalInfoInterface;
  closeModal: () => void;
}

const MapModal: React.FC<ModalProps> = ({ info, closeModal }) => {
  // const redirectToVideo = () => {
  //   window?.open(info.link, "_blank");
  // };

  return (
    <div className="map-modal" onClick={closeModal}>
      <div className="map-modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="map-modal__header">
          <h1
            className={`${info.link ? "underline" : ""}`}
            // onClick={redirectToVideo}
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
      </div>
    </div>
  );
};

export default MapModal;
