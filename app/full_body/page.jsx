import WorkoutPlan from "@/components/Setup/WorkoutPlan";
import Exercises from "@/components/exercises";
import React from "react";

const page = () => {
  return (
    <>
      <WorkoutPlan
        name={Exercises[3].name}
        image={Exercises[3].image}
        exercises={Exercises[3].exercises}
      />
    </>
  );
};

export default page;
