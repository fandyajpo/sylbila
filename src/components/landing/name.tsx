"use client";
import { useInView, animated } from "@react-spring/web";
import { Gowun_Dodum } from "next/font/google";

const sri = Gowun_Dodum({ subsets: ["latin"], weight: ["400"] });

const Name = () => {
  const [ref, springs] = useInView(() => ({
    from: {
      scale: 0,
      y: 100,
    },
    to: {
      scale: 1,
      y: 0,
    },
  }));
  return (
    <animated.div ref={ref} style={springs} className={sri.className}>
      <p className="text-9xl text-pink-500 z-10">Sylbila</p>
      <hr className="border-white" />
      <p className="text-xl text-pink-500 z-10">비비</p>
    </animated.div>
  );
};

export default Name;
