const WorkoutBanner = ({ name, image }) => {
  return (
    <>
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
    </>
  );
};

export default WorkoutBanner;
