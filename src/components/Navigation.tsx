import { useStore } from "@nanostores/react";
import { menuState } from "../contentStore";

const Navigation = () => {

    const $menuState = useStore(menuState)

  return (
    <nav className="flex flex-col justify-start items-start mt-5">
      <button className="hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-800"
      onClick={() => menuState.set("home")}>
        About me
      </button>
      <button className="hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-800"
      onClick={() => menuState.set("work")}>
        Work
      </button>
      <button className="hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-800"
      onClick={() => menuState.set("contact")}>
        Contact
      </button>
    </nav>
  );
};

export default Navigation;
