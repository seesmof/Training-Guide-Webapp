"use client";
import { useState } from "react";
import WorkoutGuide from "./WorkoutGuidePage";
import ExercisePreview from "./plan/ExercisePreview";
import WorkoutBanner from "./plan/WorkoutBanner";
import Button from "../Button";

const WorkoutPlan = ({ name, image, exercises }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive ? (
        <WorkoutGuide
          setIsActive={setIsActive}
          isActive={isActive}
          type={name}
        />
      ) : (
        <div className="flex flex-col container mx-auto max-w-5xl">
          <WorkoutBanner name={name} image={image} />

          <div className="p-4 lg:px-6 flex flex-col flex-1 space-y-4">
            <div className="flex flex-col space-y-6">
              {exercises.map((exercise) => (
                <ExercisePreview key={exercise} exercise={exercise} />
              ))}
            </div>

            <Button
              classes={"btn-black sticky bottom-4"}
              onClick={() => setIsActive(true)}
            >
              Start Exercise
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkoutPlan;
