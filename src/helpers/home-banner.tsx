"use client";

import { Variant } from "framer-motion";
import ColoredBuffIcon from "#/assets/svg/colored-buff-icon";
import ColoredCandiIcon from "#/assets/svg/colored-candi-icon";
import ColoredShiaIcon from "#/assets/svg/colored-shia-icon";
import ColoredRoseIcon from "#/assets/svg/colored-rose-icon";
import {
  buffAnimation,
  candiAnimation,
  roseAnimation,
  shiaAnimation,
} from "#/helpers/const-animations";

export const floatingIcons: {
  alt: string;
  icon: JSX.Element;
  animation: Variant;
}[] = [
  {
    alt: "buff",
    icon: <ColoredBuffIcon />,
    animation: buffAnimation as Variant,
  },
  {
    alt: "candi",
    icon: <ColoredCandiIcon />,
    animation: candiAnimation as Variant,
  },
  {
    alt: "shia",
    icon: <ColoredShiaIcon />,
    animation: shiaAnimation as Variant,
  },
  {
    alt: "rose",
    icon: <ColoredRoseIcon />,
    animation: roseAnimation as Variant,
  },
];
