import React from "react";

const SmallStar = (props: Record<string, unknown>) => (
  <svg width={36} height={49} fill="none" viewBox="-5 -5 36 49" {...props}>
    <path
      fill="#BEDEEF"
      stroke="#BEDEEF"
      strokeLinejoin="round"
      strokeWidth={10}
      d="M13 0c-.908 12.835-3.896 16.927-13 19.5 9.104 2.573 12.092 6.665 13 19.5.908-12.835 3.896-16.927 13-19.5-9.104-2.573-12.092-6.665-13-19.5Z"
    />
  </svg>
);
export default SmallStar;
