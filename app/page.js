
import MyInformation from "./(home)/MyInformation";
import MyPhoto from "./(home)/MyPhoto";
import StatsHome from "./(home)/StatsHome";

export default function Home() {
  return (
    <section className="min-h-[calc(100dvh-80px)] flex justify-around items-center flex-col fadeIn-content">
      <div className="w-full flex justify-between items-center flex-col-reverse md:flex-row">
        <MyInformation />
        <MyPhoto />
      </div>
      <StatsHome />
    </section>
  );
}
