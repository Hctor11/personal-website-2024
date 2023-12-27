import { motion } from "framer-motion";

interface pText {
  isTitle?: boolean;
  title?: string;
  content: string;
  duration?: number;
  delay?: number;
}

const Paragraph = ({ isTitle, title, content, duration = 0.5, delay = 0.2}: pText) => {
  return (
    <div className="w-full overflow-hidden">
      {isTitle && (
        <>
          <motion.h3
            className="text-l font-medium mt-3"
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
            className="h-[2px] w-full bg-black overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: duration,
              delay: delay,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          ></motion.div>
        </>
      )}
      <div className="overflow-hidden">
      <motion.p
        initial={{ y: "-200%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {content}
      </motion.p>
      </div>
    </div>
  );
};

export default Paragraph;