import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Dental Practice Website",
    date: " january 2025",
    responsibilities: [
      "Designed and developed dynamic user interfaces using React.js.",
      "Built reusable and modular components to streamline development.",
      "Developed a custom management system for dental practice operations using Laravel, MySQL, and React.",

      "Tests, débogage et maintien de la stabilité du code en production.",
    ],
  },
  {
    job: "Backend Developer",
    company: "Dental Practice Website",
    date: "january 2025",
    responsibilities: [
      "Developed secure RESTful APIs with Laravel to support core dental operations.",
      "Designed and optimized MySQL databases for patient records, appointments, and billing.",
      "Integrated backend services with React frontend to ensure seamless data flow.",
      " Implemented user authentication and access control for data privacy.",
    ],
  },
  {
    job: "Network Administrator",
    company: "freelance",
    date: "2025",
    responsibilities: [
      "Set up routers, firewalls, and VPNs to ensure data privacy and reliable connectivity.",
      "Monitored network performance and resolved hardware or connectivity issues.",
      "Managed server deployments and system updates to support web-based platforms.",
      "Diagnosed and repaired hardware components to ensure uptime and continuity.",
    ],
  },
];

const AllExperiences = () => {
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
