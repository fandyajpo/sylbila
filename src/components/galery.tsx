"use client";
import { useInView, animated } from "@react-spring/web";
import Image from "next/image";

import First from "public/1.jpeg";
import Second from "public/2.jpeg";
import Thirth from "public/3.jpeg";
import Fourth from "public/4.jpeg";
import Five from "public/5.jpeg";
import Six from "public/6.jpeg";

const ImageList = [First, Second, Thirth, Fourth, Six];

const Galery = () => {
  const [ref, inView] = useInView({
    rootMargin: "-20% 0%",
  });
  return (
    <animated.div
      ref={ref}
      className={`grid grid-cols-3 lg:grid-cols-5 w-full duration-1000 relative ${
        inView ? "h-screen" : "h-24"
      }`}
    >
      {ImageList?.map((a, i) => (
        <div
          ref={ref}
          key={i}
          className="group h-full hover:w-full w-full bg-gray-200 relative"
        >
          <Image
            loading="lazy"
            alt="i"
            src={a}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 duration-500"
            fill
          />
        </div>
      ))}
    </animated.div>
  );
};

export default Galery;
