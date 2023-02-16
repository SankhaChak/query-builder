import { COLORS } from "@/constants/colors";

type Props = {
  className?: HTMLOrSVGImageElement["className"];
  pathFill?: string;
};

const InformationIcon = (props: Props) => {
  const { className, pathFill = COLORS.ICON_SECONDARY } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      className={className}
    >
      <path
        fill={pathFill}
        d="M1.758 10.242a6 6 0 118.336-8.631 6 6 0 01-8.336 8.63zM5.4 6.6V9h1.2V5.4H5.4v1.2zm0-3.6v1.2h1.2V3H5.4z"
      ></path>
    </svg>
  );
};

export default InformationIcon;
