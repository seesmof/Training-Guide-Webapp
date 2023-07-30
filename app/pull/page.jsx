import WorkoutPlan from "@/components/Setup/WorkoutPlan";
import Exercises from "@/components/exercises";
import React from "react";

const page = () => {
  return (
    <>
      <WorkoutPlan
        name={Exercises[1].name}
        image={Exercises[1].image}
        exercises={Exercises[1].exercises}
      />
    </>
  );
};

export default page;
