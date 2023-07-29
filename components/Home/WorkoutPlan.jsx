import Link from "next/link";
import React from "react";

const WorkoutPlan = ({ name, image, exercises }) => {
  return (
    <>
      <div className="flex flex-col container mx-auto max-w-5xl">
        <div className="relative">
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/30 flex items-center justify-center text-white font-bold text-2xl md:text-3xl lg:text-4xl lg:m-6">
            {name}
          </div>
          <img
            src={`/img/${image}`}
            alt={`a guy doing a ${name} workout`}
            className="object-cover lg:p-6 w-full lg:h-[30vh] h-[25vh]"
          />
        </div>

        <div className="p-4 lg:px-6 flex flex-col flex-1 space-y-4">
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
                  <a
                    href={exercise.help}
                    className="font-medium text-lg lg:text-xl"
                    target="_blank"
                    title="See a more detailed instruction for the exercise"
                  >
                    {exercise.name}
                  </a>
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
