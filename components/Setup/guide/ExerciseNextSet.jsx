import React from "react";

const ExerciseNextSet = ({ isBreak, handleNextSet, counter }) => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <p className={`${isBreak ? "visible" : "hidden"} text-xl`}>
          Great job! Take a break.{" "}
          {`${Math.floor(counter / 60)
            .toString()
            .padStart(2, "0")}:${(counter % 60).toString().padStart(2, "0")}`}
        </p>
        <button
          className={`${
            !isBreak
              ? "btn btn-black"
              : "w-full py-2 text-center text-white rounded-md font-medium bg-neutral-600"
          }`}
          disabled={isBreak}
          onClick={handleNextSet}
        >
          {isBreak ? "Break Time" : "Next Set"}
        </button>
      </div>
    </>
  );
};

export default ExerciseNextSet;
