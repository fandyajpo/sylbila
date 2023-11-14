"use client";
import { Gowun_Dodum } from "next/font/google";
import Name from "./name";
const sri = Gowun_Dodum({ subsets: ["latin"], weight: ["400"] });

const Landing = () => {
  return (
    <div className={sri.className}>
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <Name />
      </div>
    </div>
  );
};

export default Landing;
