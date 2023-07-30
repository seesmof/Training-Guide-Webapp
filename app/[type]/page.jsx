import WorkoutPlan from "@/components/Setup/WorkoutPlan";
import Exercises from "@/components/exercises";
import { cookies } from "next/dist/client/components/headers";
import React from "react";

const ExerciseType = ({ params }) => {
  const exercise = Exercises.find((e) => e.name.toLowerCase() === params.type);
  const { name, image, exercises } = exercise;

  return (
    <>
      <WorkoutPlan name={name} image={image} exercises={exercises} />
    </>
  );
};

export default ExerciseType;
