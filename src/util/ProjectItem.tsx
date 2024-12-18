import "./style.sass";
import { allCodeProjects, allDesignProjects } from "./Projects";
import Title from "./Title";
import { motion } from "framer-motion";
import IconMap from "./IconMap";

const ProjectItem = () => {
  return (
    <>
      <Title title="Code Projects">
        <>
          {allCodeProjects.map((project, index) => (
            <>
              <motion.div
                className="overflow-hidden"
                initial={{ y: "-200%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1 + 0.1 * index,
                  delay: 0.1 * index,
                  ease: [0, 0.71, 0.2, 1],
                }}
              >
                <details name="accordion" className="w-full">
                  <summary>
                    {project.title}
                    <span className="font-thin pl-5 text-zinc-500">
                      {project.subtitle}
                    </span>
                    <hr />
                  </summary>
                  <div className="w-auto mb-5 md:flex p-1">
                    <a
                      href={project.link}
                      target="_blank"
                      className="block w-full md:w-1/2"
                    >
                      <img src={project.image} alt="image" className="border" />
                    </a>
                    <div className="description w-1/2 flex items-center md:flex-col">
                      <p className="font-light  md:w-auto md:p-2">
                        {project.description}
                      </p>

                      <a
                      href={project.link}
                      target="_blank"
                      className="font-bold underline hover:text-gray-600"
                    >
                      Project Link
                    </a>

                      <IconMap icons={project.stack} />
                    </div>
                  </div>
                </details>
              </motion.div>
            </>
          ))}
        </>
      </Title>
      <br />
      <Title title="Design Projects">
        <>
          {allDesignProjects.map((project, index) => (
            <>
              <motion.div
                className="overflow-hidden"
                initial={{ y: "-200%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1 + 0.1 * index,
                  delay: 0.1 * index,
                  ease: [0, 0.71, 0.2, 1],
                }}
              >
                <details name="accordion" className="w-full">
                  <summary>
                    {project?.title}
                    <span className="font-thin pl-5 text-zinc-500">
                      {project?.subtitle}
                    </span>
                    <hr />
                  </summary>
                  <div className="">
                    {
                      project?.description ? <>
                        <p className="font-light  md:w-auto md:p-2">
                        {project.description}
                      </p>
                      </> : null
                    }
                    </div>
                    <div className="mb-2">
                    {
                      project?.projectLink ? <>
                      <a className="p-2 font-bold underline hover:text-gray-600" href={project.projectLink}>Project Link</a>
                      </> : null
                    }
                    </div>
                  <div className="mb-5 columns-1 md:columns-2 overflow-hidden">
                    
                    {project?.images.map((image) => (
                      <>
                        <a href={image.link} className="w-full" target="_blank">
                          <img
                            src={image.src}
                            alt="image"
                            className="h-fit hover:brightness-75 transition-all"
                            loading="lazy"
                          />
                        </a>
                      </>
                    ))}
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
