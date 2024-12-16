import React from "react";

const BigStar = (props: Record<string, unknown>) => (
  <svg width={94} height={136} fill="none" viewBox="-5 -5 94 136" {...props}>
    <path
      fill="#BEDEEF"
      stroke="#BEDEEF"
      strokeLinejoin="round"
      strokeWidth={10}
      d="M42 0C39.068 41.466 29.411 54.688 0 63c29.411 8.312 39.068 21.534 42 63 2.932-41.466 12.589-54.688 42-63-29.411-8.312-39.068-21.534-42-63Z"
    />
  </svg>
);
export default BigStar;
