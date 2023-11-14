"use client";
import { useInView, animated } from "@react-spring/web";

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
    <animated.div ref={ref} style={springs}>
      <p className="text-9xl text-white">Sylbila</p>
      <hr className="border-white" />
      <p className="text-xl text-white">비비</p>
    </animated.div>
  );
};

export default Name;
