import { useStore } from "@nanostores/react";
import { menuState } from "../contentStore";
import Work from "./Work";

import AboutMe from "./AboutMe";

const Main = () => {
  const $menuState = useStore(menuState);

  return (
    <main className="p-10 w-full dark:bg-zinc-900 dark:text-white transition-all">
      {$menuState == "home" ? (
        <AboutMe/>
      ) : $menuState == "work" ? (
        <Work/>
      ) : (
        <h1>deaht</h1>
      )}
    </main>
  );
};

export default Main;
