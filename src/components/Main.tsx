import { useStore } from "@nanostores/react";
import { menuState } from "../contentStore";
import Work from "./Work";
import Contact from "./Contact";
import AboutMe from "./AboutMe";

const Main = () => {
  const $menuState = useStore(menuState);

  return (
    <main className="p-5 md:pl-48 w-full h-full dark:bg-zinc-900 dark:text-white">
      {$menuState == "home" ? (
        <AboutMe/>
      ) : $menuState == "work" ? (
        <Work/>
      ) : (
        <Contact/>
      )}
    </main>
  );
};

export default Main;
