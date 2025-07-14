import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const FooterMain = () => {
  const { t } = useTranslation();

  const footerLinks = [
    {
      name: t("footer.about"),
      section: "about",
    },
    {
      name: t("footer.skills"),
      section: "skills",
    },
    {
      name: t("footer.experience"),
      section: "experience",
    },
    {
      name: t("footer.projects"),
      section: "projects",
    },
  ];

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey">Ngouanat Ivan</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2024 Ngouanat | {t("footer.rights")}
      </p>
    </div>
  );
};

export default FooterMain;
