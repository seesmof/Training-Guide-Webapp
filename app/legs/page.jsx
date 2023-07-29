import WorkoutPlan from "@/components/Home/WorkoutPlan";
import Exercises from "@/components/Home/exercises";
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
