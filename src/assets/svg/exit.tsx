import React from "react";

const Exit = (props: Record<string, unknown>) => (
  <svg width={48} height={48} fill="none" {...props}>
    <path
      stroke="#F9F9ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m18 30 6-6m0 0 6-6m-6 6-6-6m6 6 6 6m-6 12c-5.591 0-8.387 0-10.592-.914a12 12 0 0 1-6.495-6.494C6 32.387 6 29.592 6 24c0-5.591 0-8.387.913-10.592a12 12 0 0 1 6.495-6.495C15.613 6 18.408 6 24 6c5.591 0 8.387 0 10.592.913a12 12 0 0 1 6.494 6.495C42 15.613 42 18.408 42 24c0 5.591 0 8.387-.914 10.592a12 12 0 0 1-6.494 6.494C32.387 42 29.592 42 24 42Z"
    />
  </svg>
);
export default Exit;
