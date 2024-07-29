import * as React from "react";
const IconNumberOne = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    className={className}
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      d="M8.665 3.295C4.281 5.831 1.332 10.571 1.332 16s2.95 10.168 7.333 12.704M23.332 3.295c4.384 2.536 7.333 7.276 7.333 12.705s-2.95 10.168-7.333 12.704"
    />
    <path
      fill="#fff"
      d="M19.97 22.43v.77h-7.592v-.77h3.38V10.491c0-.236.01-.485.031-.749l-3.245 2.881c-.097.083-.194.115-.29.094a.41.41 0 0 1-.23-.125l-.301-.416 4.253-3.754h.78V22.43h3.214Z"
    />
  </svg>
);
export default IconNumberOne;
