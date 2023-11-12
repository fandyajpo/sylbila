const Screen = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center ">
      <div className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full duration-1000 h-fit flex flex-col items-stretch grow flex-shrink-0 gap-x-4 p-4">
        {children}
      </div>
    </div>
  );
};

export default Screen;
