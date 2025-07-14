import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2" text="Years" />
        {/*<p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="23" text="Websites" /> */}
      </div>
      <p className="text-center">
        Web developer with 2 years of experience, I use Laravel and React to
        build reliable and high-performance interfaces.
      </p>
      <ExperienceInfo number="$10k" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
