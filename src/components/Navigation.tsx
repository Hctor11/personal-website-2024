import { useStore } from "@nanostores/react";
import { menuState } from "../contentStore";
import { useState } from "react";

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const $menuState = useStore(menuState);

  const menuItems: { itemName: string; itemState: string; index: number }[] = [
    { itemName: "About me", itemState: "home", index: 1 },
    { itemName: "Work", itemState: "work", index: 2 },
    { itemName: "Contact", itemState: "contact", index: 3 },
  ];

  const handleItemClick = (state: string, index: number) => {
    menuState.set(state)
    setSelectedItem(index)
  } 

  return (
    <nav className="flex flex-col justify-start items-start mt-5">
      {menuItems.map((item) => (
        <button
          className={`hover:text-zinc-300 dark:text-white dark:hover:bg-zinc-800 ${item.index === selectedItem ? "bg-zinc-900 text-white dark:bg-white dark:text-black" : null}`}
          onClick={() => handleItemClick(item.itemState, item.index)}
        >
          {item.itemName}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
