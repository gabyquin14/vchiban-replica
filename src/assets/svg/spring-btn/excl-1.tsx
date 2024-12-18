import React from "react";

const BtnExclMark1 = (props: Record<string, unknown>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={85}
    fill="none"
    {...props}
  >
    <circle
      cx={16.688}
      cy={73.933}
      r={9.336}
      fill={(props.color as string) ?? "rgb(192, 246, 232)"}
      transform="rotate(-5.3 16.688 73.933)"
    />
    <path
      fill={(props.color as string) ?? "rgb(192, 246, 232)"}
      fillRule="evenodd"
      d="M4.803 29.771a1 1 0 0 0-.814 1.122l3.909 28.163a1 1 0 0 0 1.083.858l12.7-1.178a1 1 0 0 0 .906-1.048L21.02 28.004a1 1 0 0 0-1.175-.932L4.803 29.771Zm-1.478-3.66a1 1 0 0 0 1.324.805l15.31-5.414a1 1 0 0 0 .665-.995L19.597 1.039a1 1 0 0 0-1.091-.943L.996 1.72a1 1 0 0 0-.898 1.133l3.228 23.258Z"
      clipRule="evenodd"
    />
  </svg>
);
export default BtnExclMark1;
