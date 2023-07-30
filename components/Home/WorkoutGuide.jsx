"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Exercises from "./exercises";

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((elapsedTime) => elapsedTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <div>
      {`${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`}
    </div>
  );
};

const Countdown = ({ seconds }) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const secondsRemaining = time % 60;

  return (
    <div>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining}
    </div>
  );
};

const WorkoutGuide = ({ type }) => {
  const [exercises, setExercises] = useState([]);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [currentSet, setCurrentSet] = useState(1);
  const [rest, setRest] = useState(false);
  const REST_TIME = 10;

  useEffect(() => {
    const obj = Exercises.find((e) => e.name === type)?.exercises;
    if (obj) {
      setExercises(obj);
      setCurrentExercise(obj[0]);
      setCurrentSet(1);
      setRest(false);
    }
  }, [type]);

  const handleNextSet = () => {
    setCurrentSet((prevSet) => prevSet + 1);
    setRest(true);
  };

  return (
    <>
      <div className="bg-white min-h-screen flex">
        <div className="flex flex-col container mx-auto max-w-5xl">
          <nav className="flex justify-between font-medium items-center p-4 lg:p-6 border-b border-neutral-300">
            <Link href="/" className="flex flex-row items-center space-x-1">
              <IoIosArrowBack />
              <span>Home</span>
            </Link>

            <h2 className="text-2xl">{type}</h2>

            <Stopwatch />
          </nav>

          {rest ? (
            <>
              <div className="flex flex-col p-4 lg:p-6">
                <h1>Take A Break!</h1>
                <Countdown seconds={REST_TIME} />
              </div>
            </>
          ) : (
            <main className="flex flex-col flex-1 justify-between w-full p-4 lg:p-6">
              <div className="flex py-4 lg:py-6 flex-col space-y-4">
                <video
                  src={`/img/video/${currentExercise?.video}.mp4`}
                  autoPlay
                  muted
                  loop
                  controls={false}
                  className="w-full rounded-md object-cover shadow-md"
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
              <button
                className="bg-black text-white hover:bg-black/80 text-center rounded-md w-full py-2"
                onClick={() => handleNextSet()}
              >
                Next Set
              </button>
            </main>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkoutGuide;
