import IconMap from "../util/IconMap";
import Paragraph from "../util/Paragraph";
import { motion } from "framer-motion";

import {
  frontendIcons,
  backendIcons,
  relDatabases,
  noRelDB,
  DSTools,
  DSFrameworks,
  design,
} from "../util/technologies";

const Skills = () => {
  return (
    <div className="">
      <div className="webskills overflow-hidden">
        <motion.div
          className="technologies flex flex-col items-center md:flex-col md:justify-around overflow-hidden"
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1],
          }}
        >
          <IconMap icons={frontendIcons} label="FrontEnd" />
        </motion.div>
      </div>

      <div className="webskills overflow-hidden">
        <motion.div
          className="technologies flex flex-col items-center md:flex-col md:justify-around overflow-hidden"
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1],
          }}
        >
          <IconMap icons={backendIcons} label="BackEnd" />
        </motion.div>
      </div>

      <div className="database overflow-hidden">
        <motion.div
          className="technologies flex flex-col items-center md:flex-col md:justify-around overflow-hidden"
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1],
          }}
        >
          <IconMap icons={relDatabases} label="Relational" />
        </motion.div>
      </div>

      <div className="database overflow-hidden">
        <motion.div
          className="technologies flex flex-col items-center md:flex-col md:justify-around overflow-hidden"
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1],
          }}
        >
          <IconMap icons={noRelDB} label="No Relational" />
        </motion.div>
      </div>



      {/* <div className="datascience overflow-hidden">
        <Paragraph
          isTitle={true}
          delay={0.2}
          duration={0.6}
          title="Data Science"
          content=""
        />
        <motion.div
          className="technologies flex flex-col items-start md:flex-row md:justify-around overflow-hidden"
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1],
          }}
        >
          <IconMap icons={DSTools} label="Tools" />
          <IconMap icons={DSFrameworks} label="Frameworks" />
        </motion.div>
      </div> */}
      <div className="design overflow-hidden">

        <motion.div
          className="pb-10 technologies flex flex-col items-start md:flex-row md:justify-around overflow-hidden"
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1],
          }}
        >
          <IconMap icons={design} label="Design" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
