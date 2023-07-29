import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkoutPlan = ({ name, image, exercises }) => {
  return (
    <>
      <div className="flex flex-col container mx-auto max-w-5xl">
        <div className="lg:p-6">
          <img
            src={`/img/${image}`}
            alt="a guy doing a push workout"
            className="object-cover w-full lg:rounded-md h-[25vh]"
          />
        </div>

        <div className="p-4 lg:px-6 flex flex-col flex-1 space-y-4">
          <h1 className="font-bold text-center text-2xl lg:text-3xl">
            {name} Workout
          </h1>

          <div className="flex flex-col space-y-6">
            {exercises.map((exercise) => (
              <div
                key={exercise}
                className="flex flex-col md:flex-row space-y-3 space-x-3 md:space-x-6 border-b border-neutral-300 md:pb-6 pb-4"
              >
                <video
                  src={`/img/video/${exercise.video}.mp4`}
                  autoPlay
                  muted
                  loop
                  controls={false}
                  className="object-cover object-center max-w-md max-h-60 rounded-md w-full md:w-[40%]"
                />
                <div className="flex flex-col space-y-2 md:space-y-2">
                  <h2 className="font-medium text-lg lg:text-xl">
                    {exercise.name}
                  </h2>
                  <p className="text-sm">{exercise.description}</p>
                  <div className="flex flex-row space-x-4">
                    <p className="font-medium flex flex-row gap-1">
                      Sets:
                      <span className="font-normal">{exercise.sets}</span>
                    </p>
                    <p className="font-medium flex flex-row gap-1">
                      Reps:
                      <span className="font-normal">{exercise.reps}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={name.toLowerCase()}
            className="py-3 text-lg w-full text-center bg-black sticky bottom-4 text-white rounded-md font-medium capitalize hover:bg-black/80"
          >
            Start Exercise
          </Link>
        </div>
      </div>
    </>
  );
};

export default WorkoutPlan;
