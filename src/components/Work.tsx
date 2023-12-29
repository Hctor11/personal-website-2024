import { motion } from "framer-motion";

const Work = () => {
  return (
    <div>
      <details name="test" className="transition-all">
        <summary className="cursor-pointer select-none">
          <span className="text-2xl font-medium">Title</span>
          death classic
        </summary>
        <div
          className="ml-5 transition-all"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            animi sequi corporis recusandae inventore magnam ducimus quasi
            incidunt laboriosam iusto!
          </p>
        </div>
      </details>

      <details name="test">
        <summary>death classic</summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi
          sequi corporis recusandae inventore magnam ducimus quasi incidunt
          laboriosam iusto!
        </p>
      </details>
    </div>
  );
};

export default Work;
