import WorkoutPlan from "@/components/Home/WorkoutPlan";
import Exercises from "@/components/Home/exercises";
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
