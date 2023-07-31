import React from "react";

const ExerciseDetails = ({ currentExercise, currentSet, isBreak }) => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <video
          src={`/img/video/${currentExercise?.video}.mp4`}
          autoPlay
          muted
          loop={!isBreak}
          controls={false}
          className="w-full rounded-md object-cover"
        ></video>

        <h2 className="font-medium text-xl">
          {currentExercise?.name}: {currentSet}
        </h2>
        <p>{currentExercise?.description}</p>
        <div className="flex flex-row space-x-4">
          <p className="font-medium flex flex-row gap-1">
            Sets:
            <span className="font-normal">{currentExercise?.sets}</span>
          </p>
          <p className="font-medium flex flex-row gap-1">
            Reps:
            <span className="font-normal">{currentExercise?.reps}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ExerciseDetails;
