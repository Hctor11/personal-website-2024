import "./style.sass";
import { allCodeProjects, allDesignProjects } from "./Projects";
import Title from "./Title";
import { motion } from "framer-motion";

const ProjectItem = () => {
  return (
    <>
      <Title title="Projects">
        <>
          {allCodeProjects.map((project) => (
            <>
              <motion.div className="overflow-hidden">
                <details name="accordion" className="w-full">
                  <summary>
                    {project.title}
                    <span className="font-thin pl-5 text-zinc-500">
                      {project.subtitle}
                    </span>
                    <hr />
                  </summary>
                  <div className="w-auto">
                    <img src={project.image} alt="image" className="border"/>
                    <div className="description">
                        <p className="font-light w-1/2">
                            {project.description}
                        </p>
                        
                    </div>
                  </div>
                </details>
              </motion.div>
            </>
          ))}
        </>
      </Title>
    </>
  );
};
/*

<details>
        <summary>
            Copyright 1999-2014.
            <hr/>
        </summary>
        <p> - by Refsnes Data. All Rights Reserved.</p>
        <p>
          All content and graphics on this web site are the property of the
          company Refsnes Data.
        </p>
      </details>
*/

export default ProjectItem;
