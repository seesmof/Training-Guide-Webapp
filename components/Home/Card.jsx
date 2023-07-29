import Link from "next/link";
import { GoDot } from "react-icons/go";

const Card = ({ name, image, exercises }) => {
  return (
    <>
      <Link
        href={`/exercise/${name.toLowerCase()}`}
        className="flex border group rounded-md border-neutral-300 flex-col overflow-hidden"
      >
        <img
          src={`/img/${image}`}
          alt=""
          className="object-cover h-40 w-full"
        />
        <div className="flex flex-col p-4 space-y-4">
          <h2 className="font-bold text-xl text-neutral-800">{name}</h2>
          <ul className="flex flex-col space-y-2">
            {exercises.map((exercise) => (
              <li key={exercise} className="flex items-center flex-row">
                <GoDot />
                <span className="ml-1.5">{exercise}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-2 text-center bg-black text-white rounded-md font-medium capitalize hover:bg-black/80">
            start training
          </button>
        </div>
      </Link>
    </>
  );
};

export default Card;
