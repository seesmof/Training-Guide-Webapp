import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import Stopwatch from "@/components/Stopwatch";

const Navbar = ({ type }) => {
  return (
    <>
      <nav className="flex justify-between font-medium items-center p-4 lg:p-6 border-b border-neutral-300">
        <Link href="/" className="flex flex-row items-center space-x-1">
          <IoIosArrowBack />
          <span>Home</span>
        </Link>

        <h2 className="text-2xl">{type}</h2>

        <div className="flex flex-row items-center space-x-1">
          <AiOutlineClockCircle />
          <Stopwatch />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
