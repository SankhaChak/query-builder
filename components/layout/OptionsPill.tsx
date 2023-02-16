import clsx from "clsx";
import Button from "./Button";

type Props = {
  options: {
    label: string;
    handleClick: () => void;
    isActive: boolean;
  }[];
};

const OptionsPill = (props: Props) => {
  const { options } = props;

  return (
    <div className="overflow-hidden rounded">
      {options.map((option, index) => (
        <Button
          key={option.label}
          handleOnClick={option.handleClick}
          size="pill"
          variant={option.isActive ? "primary" : "inActive"}
          className={clsx(
            "rounded-none border-2 font-semibold leading-6",
            option.isActive
              ? "border-accent hover:border-accent-dark"
              : "border-pill-inactive-border hover:border-pill-inactive-border-on-hover"
          )}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default OptionsPill;
