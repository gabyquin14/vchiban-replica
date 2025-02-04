import React from "react";

const Exit = (props: Record<string, unknown>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      stroke="#F9F9ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m6 18 6-6m0 0 6-6m-6 6L6 6m6 6 6 6"
    />
  </svg>
);
export default Exit;
