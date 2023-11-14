import Screen from "./layout/screen";
const Galery = () => {
  return (
    <Screen>
      <div className="grid grid-cols-3 lg:grid-cols-4 w-full h-screen relative">
        <div className="h-full w-full bg-gray-200 col-span-2 row-span-2 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black"></div>
        <div className="h-full w-full bg-gray-200 border border-black col-span-3"></div>
      </div>
    </Screen>
  );
};

export default Galery;
