import React from "react";

const ChevronDown: React.FC = (props: Record<string, unknown>) => (
  <svg width={24} height={25} fill="none" {...props}>
    <path
      stroke="#0A0549"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M8 10.64a20.354 20.354 0 0 0 3.702 3.893.47.47 0 0 0 .596 0A20.355 20.355 0 0 0 16 10.64"
    />
  </svg>
);
export default ChevronDown;
