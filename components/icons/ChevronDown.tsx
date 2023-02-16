import { COLORS } from "@/constants/colors";

type Props = {
  className?: HTMLOrSVGImageElement["className"];
  pathFillColor?: string;
};

const ChevronDownIcon = (props: Props) => {
  const { className, pathFillColor = COLORS.DROPDOWN_ARROW } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill={pathFillColor} d="M6.996 10.002l5 5 5-5h-10z"></path>
    </svg>
  );
};

export default ChevronDownIcon;
