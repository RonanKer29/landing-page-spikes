import type { SVGProps } from "react";

export const SquareLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="30" height="30" rx="4" fill="#F2B53C" />
      <mask
        id="mask0_174_20"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="30"
        height="31"
      >
        <path
          d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H26C28.2091 0.5 30 2.29086 30 4.5V26.5C30 28.7091 28.2091 30.5 26 30.5H4C1.79086 30.5 0 28.7091 0 26.5V4.5Z"
          fill="#B8E731"
        />
      </mask>
      <g mask="url(#mask0_174_20)">
        <path
          d="M11 17.5C11 15.2909 12.7909 13.5 15 13.5H34C36.2091 13.5 38 15.2909 38 17.5V35.5C38 37.7091 36.2091 39.5 34 39.5H15C12.7909 39.5 11 37.7091 11 35.5V17.5Z"
          fill="#F9E5BC"
        />
        <path
          opacity="0.4"
          d="M5 10.5C5 8.29086 6.79086 6.5 9 6.5H28C30.2091 6.5 32 8.29086 32 10.5V28.5C32 30.7091 30.2091 32.5 28 32.5H9C6.79086 32.5 5 30.7091 5 28.5V10.5Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
