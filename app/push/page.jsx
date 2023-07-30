import WorkoutPlan from "@/components/Setup/WorkoutPlan";
import Exercises from "@/components/exercises";
import React from "react";

const page = () => {
  return (
    <>
      <WorkoutPlan
        name={Exercises[0].name}
        image={Exercises[0].image}
        exercises={Exercises[0].exercises}
      />
    </>
  );
};

export default page;
