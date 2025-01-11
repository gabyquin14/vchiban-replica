import React from "react";

const Sparkle2 = (props: Record<string, unknown>) => (
  <svg width={24} height={31} fill="none" {...props}>
    <path
      fill="#49D3AF"
      stroke="#F9F9ED"
      strokeLinejoin="round"
      strokeWidth={9}
      d="M12 5.334c-.489 6.91-2.098 9.114-7 10.5 4.902 1.385 6.511 3.589 7 10.5.489-6.911 2.098-9.115 7-10.5-4.902-1.386-6.511-3.59-7-10.5Z"
    />
    <path
      fill="#49D3AF"
      stroke="#49D3AF"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M12 5.334c-.489 6.91-2.098 9.114-7 10.5 4.902 1.385 6.511 3.589 7 10.5.489-6.911 2.098-9.115 7-10.5-4.902-1.386-6.511-3.59-7-10.5Z"
    />
  </svg>
);
export default Sparkle2;
