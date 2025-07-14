import { useTranslation } from "react-i18next";

const ExperienceTopRight = () => {
  const { t } = useTranslation();

  return (
    <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
      <p className="text-lg text-center text-lightGrey">
        {t("experience.intro")}
        <span className="font-bold text-white"> {t("experience.stack")} </span>
        {t("experience.practice")}
        <span className="font-bold text-white"> {t("experience.stable")} </span>
        <br />
        {t("experience.scope")}
        <span className="font-bold text-white"> {t("experience.focus")} </span>
      </p>
    </div>
  );
};

export default ExperienceTopRight;
