import React from "react";

const ExclamationMark2: React.FC = (props: Record<string, unknown>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={40}
    fill="none"
    {...props}
  >
    <circle
      cx={8.022}
      cy={34.545}
      r={4.35}
      fill="var(--token-e0daa646-2ff4-437f-be1f-ae2ff8e32ac0, rgb(227, 5, 117))"
      transform="rotate(-5.76 8.022 34.545)"
    />
    <path
      fill="var(--token-e0daa646-2ff4-437f-be1f-ae2ff8e32ac0, rgb(227, 5, 117))"
      fillRule="evenodd"
      d="M2.823 13.917a1 1 0 0 0-.805 1.128l1.778 12.096a1 1 0 0 0 1.09.85l4.894-.494a1 1 0 0 0 .898-1.056l-.773-12.71a1 1 0 0 0-1.183-.921l-5.9 1.107ZM1.52 11.664a1 1 0 0 0 1.33.795l6.123-2.22a1 1 0 0 0 .657-1.002l-.494-8.114A1 1 0 0 0 8.04.19L.995.9A1 1 0 0 0 .106 2.04l1.415 9.624Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ExclamationMark2;
