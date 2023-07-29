import Link from "next/link";
import HomeCards from "@/components/Home/HomeCards";

const HomePage = () => {
  return (
    <>
      <div className="flex p-4 flex-col container mx-auto max-w-5xl">
        <HomeCards />
      </div>
    </>
  );
};

export default HomePage;
