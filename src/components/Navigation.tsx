import { menuState } from "../contentStore";
import { useState } from "react";

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const menuItems: { itemName: string; itemState: string; index: number }[] = [
    { itemName: "About me", itemState: "home", index: 1 },
    { itemName: "Work", itemState: "work", index: 2 },
    { itemName: "Contact", itemState: "contact", index: 3 },
  ];

  const handleItemClick = (state: string, index: number) => {
    menuState.set(state);
    setSelectedItem(index);
  };

  return (
    <nav className="md:flex flex-col justify-start items-start mt-5">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`hover:text-zinc-500 mr-5 md:mr-0 dark:text-white dark:hover:bg-zinc-800 ${
            item.index === selectedItem ? "bg-white mix-blend-difference dark:text-white" : null
          }`}
          onClick={() => handleItemClick(item.itemState, item.index)}
        >
          {item.itemName}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
