import React from "react";

const BtnExclMark2 = (props: Record<string, unknown>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={101}
    fill="none"
    {...props}
  >
    <circle
      cx={12.803}
      cy={88.427}
      r={11.195}
      fill={(props.color as string) ?? "rgb(192, 246, 232)"}
      transform="rotate(2.693 12.803 88.427)"
    />
    <path
      fill={(props.color as string) ?? "rgb(192, 246, 232)"}
      d="M5.797 70.485a1 1 0 0 1-.953-1l.108-68.44A1 1 0 0 1 5.999.046l21.479 1.01a1 1 0 0 1 .95 1.086l-5.93 68.166a1 1 0 0 1-1.043.913l-15.658-.737Z"
    />
  </svg>
);
export default BtnExclMark2;
