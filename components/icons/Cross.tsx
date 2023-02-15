import { COLORS } from "@/constants/colors";
import React from "react";

type Props = {
  className?: HTMLOrSVGImageElement["className"];
  strokeColor?: string;
};

const CrossIcon = (props: Props) => {
  const { className, strokeColor = COLORS.ICON_PRIMARY } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      className={className}
    >
      <path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 13L13 1M1 1l12 12"
      ></path>
    </svg>
  );
};

export default CrossIcon;
