import { COLORS } from "@/constants/colors";

type Props = {
  className?: HTMLOrSVGImageElement["className"];
  pathFill?: string;
};

const TrashIcon = (props: Props) => {
  const { className, pathFill = COLORS.ICON_TERTIARY } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill={pathFill}
        d="M19.392 6.253c-.112-.422-.187-.656-.187-.656-.122-.436-.431-.436-.89-.511l-2.49-.314c-.31-.052-.31-.052-.431-.319-.408-.919-.535-1.453-.98-1.453H9.586c-.445 0-.567.534-.975 1.458-.122.262-.122.262-.431.319l-2.494.314c-.455.075-.783.117-.905.553 0 0-.056.192-.173.61-.15.557-.211.496.305.496h14.175c.515.005.459.06.304-.497zM17.784 8.25H6.216c-.779 0-.816.103-.77.69l.877 11.37c.075.578.132.695.82.695h9.713c.69 0 .745-.117.82-.694l.877-11.372c.047-.59.01-.689-.769-.689z"
      ></path>
    </svg>
  );
};

export default TrashIcon;
