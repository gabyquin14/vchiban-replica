"use client";
import React from "react";

const ExclamationMark1: React.FC = (props: Record<string, unknown>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={32}
    fill="none"
    {...props}
  >
    <circle
      cx={10.6}
      cy={27.177}
      r={3.433}
      fill="var(--token-e0daa646-2ff4-437f-be1f-ae2ff8e32ac0, rgb(227, 5, 117))"
      transform="rotate(-15.255 10.6 27.177)"
    />
    <path
      fill="var(--token-e0daa646-2ff4-437f-be1f-ae2ff8e32ac0, rgb(227, 5, 117))"
      d="M7.5 22.432a1 1 0 0 1-1.215-.659L.276 3.122A1 1 0 0 1 .965 1.85L5.929.496a1 1 0 0 1 1.238.74l4.4 19.091a1 1 0 0 1-.712 1.19l-3.355.915Z"
    />
  </svg>
);
export default ExclamationMark1;
