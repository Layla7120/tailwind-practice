import PhotoIcon from "@heroicons/react/24/outline/PhotoIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
const boxs = [
  {
    id: 1,
    bg: "bg-[#f5b717]",
  },
  {
    id: 2,
    bg: "bg-[#05c3ac]",
  },
  {
    id: 3,
    bg: "bg-[#fa8eb8]",
  },
  {
    id: 4,
    bg: "bg-[#e95c30]",
  },
];
export default function Middle() {
  return (
    <div className="bg-white w-full p-5">
      <div className="my-1 rounded-full border border-black border-b-4 w-fit p-1">
        <XMarkIcon className="h-8 w-8 text-black" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-600 text-sm font-semibold text-center">
          SIMPLE TAG
        </h3>
        <h1 className="text-2xl font-bold text-center">
          Work with best designers
        </h1>
      </div>
      <div className="my-5 grid grid-cols-2 gap-3 w-full">
        {boxs.map(box => {
          return (
            <div
              key={box.id}
              className={`border border-black aspect-[8/9] ${box.bg} rounded-xl`}
            >
              <PhotoIcon className="w-10 m-auto h-full text-white" />
            </div>
          );
        })}
      </div>
      <div className="bg-blue-700 text-white font-bold text-center p-2 rounded-lg mt-10 mb-3">
        Let&apos; get it done
      </div>
    </div>
  );
}
