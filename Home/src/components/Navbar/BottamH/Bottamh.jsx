import React from "react";
import Button from "./Button";
import Home from "./Home";
import AbouteUs from "./AbouteUs";
import Shop from "./Shop";
import Sellers from "./Sellers";
import MegaMenu from "./Megamenu";
import Blog from "./Blog";
import Pages from "./Pages";
import Contact from "./Contact";
import Support from "./Support";

const Bottamh = () => {
  return (
    <>
      {/* FULL-WIDTH NAV (REFERENCE FOR MEGA MENU) */}
      <nav className="relative w-full border-b border-gray-300">
        
        {/* CENTERED CONTENT */}
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center">
  
  <Button />

  {/* CENTER MENU */}
  <ul className="flex flex-1 justify-center items-center gap-6 text-[16px] font-medium list-none">
    <Home />
    <AbouteUs />
    <Shop />
    <Sellers />
    <MegaMenu />
    <Blog />
    <Pages />
    <Contact />
  </ul>

  <Support />

</div>


      </nav>
    </>
  );
};

export default Bottamh;
