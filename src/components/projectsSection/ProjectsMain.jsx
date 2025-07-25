import { useTranslation } from "react-i18next";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsMain = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: t("projectList.project1.name"),
      year: t("projectList.project1.year"),
      align: "right",
      image: "/images/website-img-1.jpg",
      link: "https://86d3sf-3000.csb.app/",
    },
    {
      name: t("projectList.project2.name"),
      year: t("projectList.project2.year"),
      align: "left",
      image: "/images/website-img-2.webp",
      link: "https://d7x3nl-3000.csb.app/",
    },
    {
      name: t("projectList.project3.name"),
      year: t("projectList.project3.year"),
      align: "right",
      image: "/images/website-img-3.jpg",
      link: "https://fm3zl7-3000.csb.app/",
    },
    {
      name: t("projectList.project4.name"),
      year: t("projectList.project4.year"),
      align: "left",
      image: "/images/website-img-4.jpg",
      link: "#",
    },
  ];

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
