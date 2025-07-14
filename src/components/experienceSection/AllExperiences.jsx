import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";
const AllExperiences = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      job: t("experiences.frontend.job"),
      company: t("experiences.frontend.company"),
      date: t("experiences.frontend.date"),
      responsibilities: [
        t("experiences.frontend.resp1"),
        t("experiences.frontend.resp2"),
        t("experiences.frontend.resp3"),
        t("experiences.frontend.resp4"),
      ],
    },
    {
      job: t("experiences.backend.job"),
      company: t("experiences.backend.company"),
      date: t("experiences.backend.date"),
      responsibilities: [
        t("experiences.backend.resp1"),
        t("experiences.backend.resp2"),
        t("experiences.backend.resp3"),
        t("experiences.backend.resp4"),
      ],
    },
    {
      job: t("experiences.network.job"),
      company: t("experiences.network.company"),
      date: t("experiences.network.date"),
      responsibilities: [
        t("experiences.network.resp1"),
        t("experiences.network.resp2"),
        t("experiences.network.resp3"),
        t("experiences.network.resp4"),
      ],
    },
  ];

  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
