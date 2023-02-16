import clsx from "clsx";
import { Fragment, useCallback, useMemo, useState } from "react";
import ChevronDownIcon from "../icons/ChevronDown";

type DropdownOptions = {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
}[];

type Props = {
  label: string;
  value: string | undefined;
  placeholder: string;
  // TODO: Make these mandatory
  options?: DropdownOptions;
  handleSelect?: (value: string) => void;
};

const Dropdown = (props: Props) => {
  const { label, placeholder, value, options, handleSelect } = props;

  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const displayValue = useMemo(
    () => placeholder || value,
    [placeholder, value]
  );

  const handleOptionsVisibility = useCallback(() => {
    setAreOptionsVisible((areOptionsVisible) => !areOptionsVisible);
  }, []);

  const handleSelectOption = useCallback(
    (value: string) => {
      handleSelect?.(value);
      setAreOptionsVisible(false);
    },
    [handleSelect]
  );

  return (
    <div className="relative flex flex-col gap-2">
      <label
        onClick={handleOptionsVisibility}
        className="w-min text-xs font-medium leading-5 text-primary"
        tabIndex={0}
      >
        {label}
      </label>

      <button
        onClick={handleOptionsVisibility}
        className={clsx(
          "flex w-60 items-center justify-between rounded border border-primary-card-border bg-primary py-2 px-3",
          value ? "bg-opacity-5" : "bg-opacity-10"
        )}
      >
        <span
          className={clsx(
            "text-sm font-medium text-primary",
            !value && "text-opacity-50"
          )}
        >
          {displayValue}
        </span>
        <ChevronDownIcon />
      </button>

      <ul
        className={clsx(
          "absolute top-[68px] z-10 flex max-h-[124px] w-full transform flex-col gap-1 overflow-y-auto rounded border border-primary-card-border bg-primary-card-background py-4 px-3 transition-all duration-200 ease-in",
          areOptionsVisible
            ? "translate-y-2 opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {options?.length ? (
          options.map((option) => (
            <Fragment key={option.title}>
              {!!option.title && (
                <li>
                  <span className="pl-2 text-xs font-semibold uppercase leading-7 tracking-[2.5px] text-primary text-opacity-50">
                    {option.title}
                  </span>
                </li>
              )}
              {option.options.map((option) => (
                <li key={option.value}>
                  <button
                    onClick={() => handleSelectOption(option.value)}
                    className="w-full rounded bg-transparent py-1 px-2 text-left text-sm leading-7 text-primary transition-colors duration-300 hover:bg-dropdown-options-background-on-hover"
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </Fragment>
          ))
        ) : (
          <li>
            <span className="pl-2 text-xs font-semibold uppercase leading-7 text-primary text-opacity-70">
              No options available
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
