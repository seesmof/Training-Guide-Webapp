"use client";

import React, { useEffect, useState } from "react";
import Exercises from "../exercises";
import Navbar from "./guide/Navbar";
import Countdown from "../Countdown";

const WorkoutGuide = ({ type, setIsActive }) => {
  const [exercises, setExercises] = useState([]);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [currentSet, setCurrentSet] = useState(1);

  const [isBreak, setIsBreak] = useState(true);
  const BREAK_TIME = 120;

  useEffect(() => {
    const exercisesOfType = Exercises.find((e) => e.name === type)?.exercises;
    if (exercisesOfType) {
      setExercises(exercisesOfType);
      setCurrentExercise(exercisesOfType[0]);
      setCurrentSet(1);
      setIsBreak(false);
    }
  }, [type]);

  const handleNextSet = () => {
    const isLastSet = currentSet === currentExercise?.sets;

    setIsBreak(true);

    setTimeout(() => {
      if (isLastSet) {
        const currentIndex = exercises.findIndex(
          (exercise) => exercise === currentExercise
        );
        const isLastExercise = currentIndex === exercises.length - 1;

        if (isLastExercise) {
          setIsActive(false);
        }

        setCurrentExercise(exercises[currentIndex + 1]);
        setCurrentSet(1);
      } else {
        setCurrentSet(currentSet + 1);
      }

      setIsBreak(false);
    }, (BREAK_TIME + 1) * 1000);
  };

  return (
    <>
      <div className="bg-white min-h-screen flex">
        <div className="flex flex-col container mx-auto max-w-5xl">
          <Navbar type={type} />

          <main className="flex flex-col flex-1 justify-between w-full p-4 lg:p-6">
            <div className="flex py-4 lg:py-6 flex-col space-y-4">
              <video
                src={`/img/video/${currentExercise?.video}.mp4`}
                autoPlay
                muted
                loop
                controls={false}
                className="w-full rounded-md object-cover"
              ></video>

              <h2 className="font-medium text-xl">
                {currentExercise?.name}: {currentSet}
              </h2>
              <p>{currentExercise?.description}</p>
              <div className="flex flex-row space-x-4">
                <p className="font-medium flex flex-row gap-1">
                  Sets:
                  <span className="font-normal">{currentExercise?.sets}</span>
                </p>
                <p className="font-medium flex flex-row gap-1">
                  Reps:
                  <span className="font-normal">{currentExercise?.reps}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div
                className={`flex flex-col ${isBreak ? "visible" : "hidden"}`}
              >
                <h2 className="font-medium text-xl pb-1">
                  Great job! Take a break now
                </h2>
                <Countdown seconds={BREAK_TIME} />
              </div>
              <button className="btn btn-black" onClick={handleNextSet}>
                Next Set
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default WorkoutGuide;
