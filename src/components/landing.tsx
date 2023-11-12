import { Sriracha } from "next/font/google";

const sri = Sriracha({ subsets: ["latin"], weight: ["400"] });

const Landing = () => {
  return (
    <div className={sri.className}>
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <p className="text-9xl">Sylbila</p>
          <hr />
          <p>비비</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
