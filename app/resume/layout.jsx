import LinksResume from "./Components/LinksResume/LinksResume";

export default function latout({children}) {
  return (
    <div className="w-full min-h-[calc(100dvh-100px)] flex justify-center items-center p-3">
      <div className="flex justify-between flex-col lg:flex-row gap-5 w-full h-full items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl md:text-5xl text-white">Why hire me?</h2>
          <p className="text-zinc-300 max-w-[250px]">
            Innovative, quick learner, passionate about programming, keeps pace
            with technological advancements
          </p>

          <ul className="flex flex-col gap-5">
            {
                <LinksResume />
            }
          </ul>
        </div>

        <div className="flex flex-col gap-5 items-center">
            {
              children
            }
        </div>
      </div>
    </div>
  );
}



