import Button from "@/components/Button";
import React from "react";

const ExerciseNextSet = ({
  isBreak,
  handleNextSet,
  counter,
  isBreakSkipped,
  setIsBreakSkipped,
}) => {
  return (
    <>
      <div className="flex flex-col  space-y-2">
        <div
          className={`${
            isBreak ? "visible" : "hidden"
          } flex flex-row items-center justify-between w-full`}
        >
          <p className="text-xl">
            Great job! Take a break.{" "}
            {`${Math.floor(counter / 60)
              .toString()
              .padStart(2, "0")}:${(counter % 60).toString().padStart(2, "0")}`}
          </p>

          <Button
            classes={"btn-blue max-w-xs"}
            onClick={setIsBreakSkipped(true)}
          >
            Skip Break
          </Button>
        </div>

        <Button
          classes={`${
            !isBreak
              ? "btn-black"
              : "w-full py-2 text-center text-white rounded-md font-medium bg-neutral-600"
          }`}
          onClick={handleNextSet}
          disabled={isBreak}
        >
          {isBreak ? "Break Time" : "Next Set"}
        </Button>
      </div>
    </>
  );
};

export default ExerciseNextSet;
