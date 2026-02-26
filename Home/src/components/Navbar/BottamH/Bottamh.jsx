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
    <nav className="w-full bg-white border-b border-gray-100">
     
      <div className="flex items-center justify-between w-full py-0">
        
        <div className="flex items-center gap-2 lg:gap-8">
          
        
          <div className="flex-shrink-0 hidden xl:flex">
            <Button />
          </div>

          <ul className="hidden xl:flex items-center gap-6 lg:gap-8 text-[15px] font-bold text-[#1A1A1A] tracking-tight list-none whitespace-nowrap">
            <li className="hover:text-[#00796B] cursor-pointer transition-colors"><Home /></li>
            <li className="hover:text-[#00796B] cursor-pointer transition-colors"><AbouteUs /></li>
            <li className="hover:text-[#00796B] cursor-pointer transition-colors"><Shop /></li>
            <li className="hover:text-[#00796B] cursor-pointer transition-colors"><Sellers /></li>
            <li className="hover:text-[#00796B] cursor-pointer transition-colors"><MegaMenu /></li>
            <li className="hover:text-[#00796B] cursor-pointer transition-colors"><Blog /></li>
            <li className="hover:text-[#00796B] cursor-pointer transition-colors"><Pages /></li>
            <li className="hover:text-[#00796B] cursor-pointer transition-colors"><Contact /></li>
          </ul>
        </div>

        <div className="hidden xl:block flex-shrink-0">
          <Support />
        </div>

      </div>
    </nav>
  );
};

export default Bottamh;