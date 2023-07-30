import WorkoutPlan from "@/components/Setup/WorkoutPlan";
import Exercises from "@/components/exercises";
import React from "react";

const page = () => {
  return (
    <>
      <WorkoutPlan
        name={Exercises[2].name}
        image={Exercises[2].image}
        exercises={Exercises[2].exercises}
      />
    </>
  );
};

export default page;
