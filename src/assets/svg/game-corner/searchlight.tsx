import React from "react";

const SearchLight = (props: Record<string, unknown>) => (
  <svg width={935} height={987} fill="none" {...props}>
    <path
      fill="url(#a)"
      d="M928.238 645.578c3.206 2.441 3.143 7.284-.125 9.641L475.69 981.503c-3.267 2.357-7.883.887-9.186-2.925L199.335 197.242a6.001 6.001 0 0 1 2.168-6.808l62.551-45.111a6 6 0 0 1 7.144.092l657.04 500.163Z"
    />
    <path
      fill="#B2D1DE"
      d="M298.385 146.412c2.669 2.602 2.345 6.983-.678 9.163l-97.099 70.027c-3.023 2.18-7.282 1.105-8.909-2.249l-55.361-114.19a6 6 0 0 1 1.889-7.484l61.587-44.416a5.999 5.999 0 0 1 7.697.57l90.874 88.579Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={232.779}
        x2={701.902}
        y1={167.879}
        y2={818.361}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEFEFE" />
        <stop offset={1} stopColor="#FEFEFE" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SearchLight;
