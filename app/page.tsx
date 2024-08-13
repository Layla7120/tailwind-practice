import Weather from "./_component/Weather";
import Middle from "./_component/Middle";
import Friends from "./_component/Friends";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="w-[75%] grid grid-cols-3 gap-10">
        <Weather />
        <Middle />
        <Friends />
      </div>
    </main>
  );
}
