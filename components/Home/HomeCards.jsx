import React from "react";
import Exercises from "./exercises";
import Card from "./Card";

const HomeCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {Exercises.map((exercise) => (
          <Card key={exercise.id} {...exercise} />
        ))}
      </div>
    </>
  );
};

export default HomeCards;
