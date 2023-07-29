import WorkoutPlan from "@/components/Home/WorkoutPlan";
import Exercises from "@/components/Home/exercises";
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
