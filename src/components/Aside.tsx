import Navigation from "./Navigation";
import Darkmode from "./Darkmode.astro";

import React from "react";

const Aside = () => {
  return (
    <aside className="p-4 w-screen sm:fixe sm:h-screen md:w-2/12 dark:bg-zinc-900 md:flex md:flex-col md:justify-between  bg-white">
      <div className="top-section">
        <div className="title dark:text-white">
          <h1 className="text-xl font-medium leading-3 ">Hector Rivera</h1>
          <p className="text-sm">Developer & Designer</p>
        </div>
        <Navigation />
      </div>
    </aside>
  );
};

export default Aside;
