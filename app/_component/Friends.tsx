import ArrowPathRoundedSquareIcon from "@heroicons/react/20/solid/ArrowPathRoundedSquareIcon";
import BriefcaseIcon from "@heroicons/react/20/solid/BriefcaseIcon";
import ChartBarIcon from "@heroicons/react/20/solid/ChartBarIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import BuildingOffice2Icon from "@heroicons/react/24/solid/BuildingOffice2Icon";
import CircleStackIcon from "@heroicons/react/24/solid/CircleStackIcon";
const boxs = [
  {
    id: 1,
    profile: <ArrowPathRoundedSquareIcon className="h-6 w-6 text-black" />,
    name: "Bill Rizer",
    detail: "Planet Designer",
    bg: "bg-[#e95c30]",
    invited: 0,
  },
  {
    id: 2,
    profile: <ChartBarIcon className="h-6 w-6 text-black" />,
    name: "Genbei Yagy",
    detail: "Planet Designer",
    bg: "bg-[#05c3ac]",
    invited: 0,
  },
  {
    id: 3,
    profile: <BuildingOffice2Icon className="h-6 w-6 text-black" />,
    name: "Lancy Neo",
    detail: "Rogue Corp",
    bg: "bg-[#e95c30]",
    invited: 1,
  },
  {
    id: 4,
    profile: <BriefcaseIcon className="h-6 w-6  text-black" />,
    name: "Bill Rizer",
    detail: "Hard Corp",
    bg: "bg-[#f5b717]",
    invited: 0,
  },
  {
    id: 5,
    profile: <CircleStackIcon className="h-6 w-6 text-black" />,
    name: "Konami",
    detail: "Xenon Creator",
    bg: "bg-[#fa8eb8]",
    invited: 0,
  },
];
export default function Friends() {
  return (
    <div className="bg-[#f5b717]  w-full p-3">
      <div className="flex w-[80%]">
        <div className="my-3 rounded-full border border-black bg-white border-b-4 w-fit p-1">
          <ChevronLeftIcon className="h-8 w-8 text-black" />
        </div>
        <h1 className="w-full my-auto pl-4 text-2xl font-bold text-center">
          Friends
        </h1>
      </div>
      <div className="border-black border border-b-4 bg-white p-2 rounded-xl my-8">
        <div className="flex justify-between">
          <p className="text-gray-500">Search with love ...</p>
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
        </div>
      </div>
      <div className="w-full">
        {boxs.map(box => {
          return (
            <div
              key={box.id}
              className={`border border-black bg-white rounded-xl flex justify-between p-2 my-4`}
            >
              <div className="flex">
                <div
                  className={`rounded-full p-2 border border-black ${box.bg}`}
                >
                  {box.profile}
                </div>
                <div className="flex-col my-auto mx-2">
                  <p className="font-bold">{box.name}</p>
                  <p className="text-xs text-gray-500">{box.detail}</p>
                </div>
              </div>
              {box.invited ? (
                <div className="border border-black border-b-2  text-white text-xs rounded-lg px-2 py-1 font-semibold bg-black h-fit my-auto">
                  Invited
                </div>
              ) : (
                <div className="border border-black border-b-2 text-xs rounded-lg px-2 py-1 font-semibold bg-[#f5b717] h-fit my-auto">
                  Invite
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
