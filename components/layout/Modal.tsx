import clsx from "clsx";
import { useCallback, useState } from "react";
import CrossIcon from "../icons/Cross";
import Button from "./Button";

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  showResultBox?: boolean;
  resultBoxTitle?: string;
  result?: string;
  // TODO: Make these mandatory
  handleCloseModal?: () => void;
  handlePrimaryButtonClick?: () => void;
  handleSecondaryButtonClick?: () => void;
};

const Modal = (props: Props) => {
  const {
    children,
    title,
    description,
    primaryButtonLabel,
    secondaryButtonLabel,
    showResultBox,
    resultBoxTitle,
    result,
    handleCloseModal,
    handlePrimaryButtonClick,
    handleSecondaryButtonClick,
  } = props;

  const [showExpandedResultBox, setShowExpandedResultBox] = useState(false);

  const toggleResultBoxExpansion = useCallback(() => {
    setShowExpandedResultBox((showExpandedResultBox) => !showExpandedResultBox);
  }, []);

  return (
    <div className="flex h-[75vh] w-[75vw] flex-col overflow-hidden rounded bg-modal-background 2xl:w-[50vw]">
      <div className="bg-accent py-6 pl-8 pr-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium leading-7 text-primary">{title}</p>
          <Button
            handleOnClick={handleCloseModal}
            variant="tertiary"
            size="small"
          >
            <CrossIcon className="h-3 w-3" />
          </Button>
        </div>
        {showResultBox ? (
          <div className="mt-2 flex items-center gap-4">
            <div className="flex w-11/12 items-center rounded bg-accent-dark p-2">
              <p
                className={clsx(
                  "w-full text-sm leading-5 text-primary",
                  !showExpandedResultBox && "truncate"
                )}
              >
                <span className="font-bold">{resultBoxTitle}</span>
                <span className="font-medium">{result}</span>
              </p>
            </div>

            <div className="w-1/12">
              <button
                onClick={toggleResultBoxExpansion}
                className="font-medium leading-7 text-primary"
              >
                {showExpandedResultBox ? "less..." : "more..."}
              </button>
            </div>
          </div>
        ) : (
          <p className="text-sm leading-5 text-secondary">{description}</p>
        )}
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
      <div className="flex items-center justify-between p-5">
        <Button handleOnClick={handleSecondaryButtonClick} variant="secondary">
          {secondaryButtonLabel}
        </Button>
        <Button handleOnClick={handlePrimaryButtonClick}>
          {primaryButtonLabel}
        </Button>
      </div>
    </div>
  );
};

export default Modal;
