import * as React from "react";
const RenderIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.size}
  height={props?.size}
    viewBox="0 0 512 512"
    fill="none"
    {...props}
  >
    <rect  width={props?.size}
  height={props?.size} fill="white" />
    <path
      d="M358.635 63.3162C307.498 60.9566 264.496 97.209 257.16 144.973C256.869 147.19 256.433 149.335 256.07 151.48C244.666 210.971 191.568 256.019 127.792 256.019C105.056 256.019 83.7007 250.298 65.1054 240.288C62.8536 239.072 60.166 240.645 60.166 243.148V255.947V448.793H255.997V304.212C255.997 277.613 277.934 256.019 304.955 256.019H353.913C409.336 256.019 453.935 210.757 451.756 155.699C449.795 106.147 408.973 65.6758 358.635 63.3162Z"
      fill="black"
    />
  </svg>
);
export default RenderIcon;
