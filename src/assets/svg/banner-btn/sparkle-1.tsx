import React from "react";

const Sparkle1 = (props: Record<string, unknown>) => (
  <svg width={36} height={49} fill="none" {...props}>
    <path
      fill="#FF9C45"
      stroke="#F9F9ED"
      strokeLinejoin="round"
      strokeWidth={9}
      d="M18.196 5.334c-.908 12.834-3.897 16.927-13 19.5 9.103 2.572 12.092 6.665 13 19.5.907-12.835 3.896-16.928 13-19.5-9.104-2.573-12.093-6.666-13-19.5Z"
    />
    <path
      fill="#FF9C45"
      stroke="#FF9C45"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M18.196 5.334c-.908 12.834-3.897 16.927-13 19.5 9.103 2.572 12.092 6.665 13 19.5.907-12.835 3.896-16.928 13-19.5-9.104-2.573-12.093-6.666-13-19.5Z"
    />
  </svg>
);
export default Sparkle1;
