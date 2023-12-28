import Title from "../util/Title";
import Paragraph from "../util/Paragraph";
import { motion } from "framer-motion";

import IconMap from "./../util/IconMap";

import { frontendIcons, backendIcons } from "../util/technologies";

const AboutMe = () => {
  return (
    <>
      <Title title="About me">
        <div className="content transition-all">
          <Paragraph
            isTitle={false}
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores dignissimos totam qui ducimus, dolorem quod eum dolores voluptatem. Fuga repellendus velit perspiciatis, rem id aut incidunt non sed iure."
          />
          <Paragraph
            isTitle={true}
            delay={0.2}
            duration={0.6}
            title="Motivation"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores dignissimos totam qui ducimus, dolorem quod eum dolores voluptatem. Fuga repellendus velit perspiciatis, rem id aut incidunt non sed iure."
          />
          <Paragraph
            isTitle={true}
            delay={0.3}
            duration={0.7}
            title="Currently"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores dignissimos totam qui ducimus, dolorem quod eum dolores voluptatem. Fuga repellendus velit perspiciatis, rem id aut incidunt non sed iure."
          />
        </div>
      </Title>
      <Title title="Skills">
        <div className="webskills overflow-hidden">
          <Paragraph
            isTitle={true}
            delay={0.2}
            duration={0.6}
            title="Web Development"
            content=""
          />
          <motion.div
            className="technologies flex justify-around overflow-hidden"
            initial={{ y: "-200%" , opacity: 0}}
            animate={{ y: 0 , opacity: 1}}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1],
            }}
          >
            <IconMap icons={frontendIcons} label="FrontEnd" />
            <IconMap icons={backendIcons} label="BackEnd" />
          </motion.div>
        </div>
      </Title>
    </>
  );
};

export default AboutMe;
