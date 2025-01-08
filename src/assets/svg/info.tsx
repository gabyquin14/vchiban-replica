import React from "react";

const Info = (props: Record<string, unknown>) => (
  <svg width={32} height={32} fill="none" {...props}>
    <path
      fill="#66B5F3"
      fillRule="evenodd"
      d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333C8.636 2.667 2.667 8.637 2.667 16c0 7.364 5.97 13.333 13.333 13.333Zm1.333-18a1.333 1.333 0 1 0-2.666 0v.014a1.333 1.333 0 0 0 2.666 0v-.014Zm0 4.667a1.333 1.333 0 0 0-2.666 0v5.333a1.333 1.333 0 0 0 2.666 0V16Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Info;
