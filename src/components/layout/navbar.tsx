"use client";
import { useScroll, animated } from "@react-spring/web";
const Navbar = () => {
  const { scrollY } = useScroll();

  return (
    <animated.div
      style={{ height: scrollY }}
      className={`w-full bg-gradient-to-b from-pink-900 to-transparent fixed`}
    ></animated.div>
  );
};

export default Navbar;
