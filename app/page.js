import DataHome from "./_comonents/Home/DataHome/DataHome";
import ImgHome from "./_comonents/Home/ImgHome/ImgHome";
import StatsHome from "./_comonents/Home/StatsHome/StatsHome";

export default function Home() {
  return (
    <section className="min-h-[calc(100dvh-100px)] flex flex-col justify-around fadeIn-content">
      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <DataHome />
        <ImgHome />
      </div>
      {/* <StatsHome /> */}
    </section>
  );
}
