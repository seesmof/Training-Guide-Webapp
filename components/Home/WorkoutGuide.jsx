import React from "react";

const WorkoutGuide = ({ type }) => {
  return (
    <>
      <div className="flex min-h-screen bg-white text-black">
        <h1 className="text-4xl font-bold">Workout Guide: {type}</h1>
      </div>
    </>
  );
};

export default WorkoutGuide;
