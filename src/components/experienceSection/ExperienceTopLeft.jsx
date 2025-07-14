import { useTranslation } from "react-i18next";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        {t("experienceTopLeft.since")}
      </p>

      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2" text={t("experienceTopLeft.years")} />
        {/*<p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="23" text={t("experienceTopLeft.websites")} /> */}
      </div>

      <p className="text-center">{t("experienceTopLeft.description")}</p>

      <ExperienceInfo number="$10k" text={t("experienceTopLeft.budget")} />
    </div>
  );
};

export default ExperienceTopLeft;
