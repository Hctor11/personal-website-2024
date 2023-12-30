
import { motion } from "framer-motion";
import { useState } from "react";
import { allCodeProjects,allDesignProjects } from "./Projects";
import Title from "./Title";

const ProjectMap = () => {

    const [open, setOpen] = useState(1);
    const handleOpen = (value:number) => setOpen(open === value ? 0 : value);

  return (
    <>
        <h1>queso</h1>
    </>
  )
}

export default ProjectMap