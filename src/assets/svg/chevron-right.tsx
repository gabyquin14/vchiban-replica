import React from "react";

const ChevronRight = (props: Record<string, unknown>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      stroke="#0A0549"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M10.14 16a20.355 20.355 0 0 0 3.893-3.702.472.472 0 0 0 0-.596A20.354 20.354 0 0 0 10.14 8"
    />
  </svg>
);
export default ChevronRight;
