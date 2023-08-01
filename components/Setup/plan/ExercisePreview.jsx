const ExercisePreview = ({ exercise }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row space-y-3 md:space-x-6 border-b border-neutral-300 md:pb-6 pb-4">
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
    </>
  );
};

export default ExercisePreview;
