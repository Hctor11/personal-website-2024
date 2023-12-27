import { useStore } from "@nanostores/react";
import { menuState } from "../contentStore";
import { motion, AnimatePresence } from "framer-motion"

import AboutMe from "./AboutMe";

const Main = () => {
  const $menuState = useStore(menuState);

  return (
    <main className="p-2 w-8/12">
      {$menuState == "home" ? (
        <AboutMe/>
      ) : $menuState == "work" ? (
        <h1> work</h1>
      ) : (
        <h1>deaht</h1>
      )}
    </main>
  );
};

export default Main;
