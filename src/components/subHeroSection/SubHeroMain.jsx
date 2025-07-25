import { useTranslation } from "react-i18next";

const SubHeroMain = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
      <p className="md:block sm:hidden">{t("subhero.title1")}</p>
      <p className="md:block sm:hidden">{t("subhero.title2")}</p>
      <p>{t("subhero.title3")}</p>
    </div>
  );
};

export default SubHeroMain;
