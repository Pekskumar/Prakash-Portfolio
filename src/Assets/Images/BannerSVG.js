import * as React from "react";
const BannerSVG = (props) => (
  <svg
    className="pointer-events-none absolute h-[169%] w-[138%] animate-spotlight position-absolute lg:w-[84%] fill-foreground max-md:top-0 max-md:left-[10%]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3787 2842"
    fill="#09090b"
    {...props}
  >
    <g filter="url(#filter)">
      <ellipse
        cx={1924.71}
        cy={273.501}
        rx={1924.71}
        ry={273.501}
        transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
        fillOpacity={0.21}
      />
    </g>
    <defs>
      <filter
        id="filter"
        x={0.860352}
        y={0.838989}
        width={3785.16}
        height={2840.26}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={151}
          result="effect1_foregroundBlur_1065_8"
        />
      </filter>
    </defs>
  </svg>
);
export default BannerSVG;
