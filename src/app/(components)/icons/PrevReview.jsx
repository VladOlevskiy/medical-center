import * as React from "react";
const PrevReview = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    className={className}
    {...props}
  >
    <path
      stroke="#A3957B"
      strokeLinecap="round"
      d="M23.335 28.705c4.383-2.536 7.333-7.276 7.333-12.705s-2.95-10.169-7.333-12.704M8.668 28.705C4.284 26.169 1.335 21.429 1.335 16S4.285 5.831 8.668 3.296"
    />
    <path
      stroke="#A3957B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m13.602 20.8-4.8-4.8 4.8-4.8"
    />
    <path stroke="#A3957B" strokeLinecap="round" d="M23.2 16H8.8" />
  </svg>
);
export default PrevReview;
