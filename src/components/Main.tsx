import { useStore } from "@nanostores/react";
import { menuState } from "../contentStore";
import Work from "./Work";

import AboutMe from "./AboutMe";

const Main = () => {
  const $menuState = useStore(menuState);

  return (
    <main className="p-5 md:pl-48 w-full h-max dark:bg-zinc-900 dark:text-white">
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
