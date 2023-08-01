"use client";
import React, { useEffect, useState } from "react";
import Exercises from "../exercises";
import Navbar from "./guide/Navbar";
import ExerciseDetails from "./guide/ExerciseDetails";
import ExerciseNextSet from "./guide/ExerciseNextSet";

const WorkoutGuidePage = ({ type, setIsActive }) => {
  const [exercises, setExercises] = useState([]);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [currentSet, setCurrentSet] = useState(1);
  const [isBreak, setIsBreak] = useState(true);
  const [breakTime, setBreakTime] = useState(90);
  const [counter, setCounter] = useState(breakTime);
  const [isBreakSkipped, setIsBreakSkipped] = useState(false);
  const moveToNextSet = ({ isLastSet }) => {
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
  };

  useEffect(() => {
    setCounter(currentExercise?.break || 90);
    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isBreak]);

  useEffect(() => {
    const exercisesOfType = Exercises.find((e) => e.name === type)?.exercises;
    if (exercisesOfType) {
      setExercises(exercisesOfType);
      setCurrentExercise(exercisesOfType[0]);
      setCurrentSet(1);
      setIsBreak(false);
      setBreakTime(currentExercise?.break || 90);
      setIsBreakSkipped(false);
    }
    console.log(isBreakSkipped);
  }, [type]);

  const handleNextSet = () => {
    const isLastSet = currentSet === currentExercise?.sets;
    console.log(isBreakSkipped);

    if (isBreakSkipped) {
      setIsBreakSkipped(false);
      setIsBreak(false);
      moveToNextSet(isLastSet);
    } else {
      setIsBreak(true);
      setBreakTime(currentExercise?.break || 90);
      setTimeout(() => {
        moveToNextSet(isLastSet);
        setIsBreak(false);
      }, (currentExercise?.break + 1) * 1000);
    }
  };

  return (
    <>
      <div className="bg-white min-h-screen flex">
        <div className="flex flex-col container mx-auto max-w-5xl">
          <Navbar type={type} />
          <main className="flex flex-col flex-1 justify-between w-full p-4 lg:p-6">
            <ExerciseDetails
              currentExercise={currentExercise}
              isBreak={isBreak}
              currentSet={currentSet}
            />
            <ExerciseNextSet
              isBreak={isBreak}
              handleNextSet={handleNextSet}
              counter={counter}
              isBreakSkipped={isBreakSkipped}
              setIsBreakSkipped={setIsBreakSkipped}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default WorkoutGuidePage;
