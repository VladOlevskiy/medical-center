import * as React from "react";

const NextReview = ({ className, ...props }) => (
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
      d="M8.665 3.295C4.281 5.831 1.332 10.571 1.332 16s2.95 10.169 7.333 12.704M23.332 3.296c4.384 2.536 7.333 7.276 7.333 12.705s-2.95 10.169-7.333 12.704"
    />
    <path
      stroke="#A3957B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m18.398 11.2 4.8 4.8-4.8 4.8"
    />
    <path stroke="#A3957B" strokeLinecap="round" d="M8.8 16h14.4" />
  </svg>
);
export default NextReview;
