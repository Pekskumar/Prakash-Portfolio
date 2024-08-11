import * as React from "react";
const ArrowIcon = (props) => (
  <svg
    className=" line-arrow-icon -bottom-1  h-3 left-0"
    viewBox="0 0 200 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 7.5C31 3.5 61 3.5 91 3.5C121 3.5 151 3.5 181 7.5"
      stroke="#6fba1c"
      strokeWidth={2}
      strokeLinecap="round"
      // style={{
      //   stroke: "red",
      // }}
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={1}
        y1={5}
        x2={181}
        y2={5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#34d399" />
        <stop offset={1} stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>
);
export default ArrowIcon;
