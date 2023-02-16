import { cva, type VariantProps } from "class-variance-authority";

const buttonClasses = cva(
  "rounded-md text-sm font-medium leading-5 transition-color duration-300 ease-out",
  {
    variants: {
      variant: {
        primary: "bg-accent hover:bg-accent-dark text-primary",
        secondary:
          "bg-secondary-button-background hover:bg-secondary-button-background-on-hover text-primary",
        tertiary: "bg-accent-dark hover:bg-accent-dark-hover text-primary",
        inActive:
          "bg-pill-inactive-background hover:bg-pill-inactive-background-on-hover text-primary",
      },
      size: {
        small: "p-[6px]",
        medium: "py-[9px] px-[17px]",
        pill: "py-1 px-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

type Props = VariantProps<typeof buttonClasses> & {
  className?: HTMLButtonElement["className"];
  children: React.ReactNode;
  handleOnClick?: () => void;
};

const Button = (props: Props) => {
  const {
    variant,
    size,
    className: additionalClassName = "",
    children,
    handleOnClick,
  } = props;

  return (
    <button
      onClick={handleOnClick}
      className={`${buttonClasses({ variant, size })} ${additionalClassName}`}
    >
      {children}
    </button>
  );
};

export default Button;
