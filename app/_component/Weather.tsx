import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";

const infos = [
  {
    name: "Casius",
    country: "Mars",
    time: "12AM",
    emoji: <BoltIcon className="h-10 w-10 text-black font-bold" />,
    temperature: 85,
    bg: "bg-[#ffffff]",
    color: "black",
  },
  {
    name: "Dlacria",
    country: "Mars",
    time: "12AM",
    emoji: <BoltIcon className="h-10 w-10 text-black font-bold" />,
    temperature: 85,
    bg: "bg-[#f5b717]",
    color: "black",
  },
  {
    name: "New York",
    country: "USA",
    time: "12AM",
    emoji: <SunIcon className="h-10 w-10 text-black font-bold" />,
    temperature: 85,
    bg: "bg-[#05c3ac]",
    color: "black",
  },
  {
    name: "Zomato",
    country: "Mars",
    time: "12AM",
    emoji: <MoonIcon className="h-10 w-10 text-black font-bold" />,
    temperature: 20,
    bg: "bg-[#e95c30]",
    color: "white",
  },
];

export default function Weather() {
  return (
    <div className="bg-white w-full p-5">
      <h1 className="text-3xl font-bold mt-3 mb-10">Weather</h1>
      {infos.map(info => {
        return (
          <div
            key={info.name}
            className={`border-2 border-b-4 border-black rounded-2xl w-full flex justify-between ${info.bg} my-5 py-2 text-${info.color}`}
          >
            <div className="grid grid-row-2 gap- my-auto px-5">
              <h1 className="font-bold text-l">{info.name}</h1>
              <p className="font-bold text-xs">
                {info.country}, {info.time}
              </p>
            </div>
            <div className="grid grid-cols-2 p-2 gap-2">
              <div className="m-auto">{info.emoji}</div>
              <div className="text-4xl font-extrabold m-auto">
                {info.temperature}º
              </div>
            </div>
          </div>
        );
      })}
      <div className="mt-14 mx-auto rounded-full border border-black border-b-4 w-fit p-2">
        <PlusIcon className="h-8 w-8 text-black" />
      </div>
    </div>
  );
}
