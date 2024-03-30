import type { ReactElement } from "react";
import { motion } from "framer-motion";


interface props {
  title: string;
  children: ReactElement;
}

const Title = ({ title, children }: props) => {
  return (
    <div className="overflow-hidden w-full lg:w-6/12">
      <motion.h3
        className="text-2xl font-normal"
        initial={{ y: "-200%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {title}
      </motion.h3>
      <motion.div
        className="h-[2px] w-full bg-black dark:bg-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      ></motion.div>
      <div className="container pl-5">{children}</div>
    </div>
  );
};

export default Title;
