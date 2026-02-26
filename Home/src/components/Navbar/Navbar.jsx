import React from "react";
import Logo from "./Logo.jsx";
import Searchinp from "./Searchinp";
import Login from "./Login.jsx";
import Cart from "./Cart.jsx";
import Bottamh from "./BottamH/Bottamh.jsx";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="w-full h-10 bg-[#1f7a6b]"></div>

     
      <div className="hidden xl:block max-w-[1440px] mx-auto px-4 md:px-10 py-5">
        <div className="flex items-center justify-between gap-8">
           <Logo />
           <div className="flex-1 max-w-[700px]">
             <Searchinp />
           </div>
           <div className="flex items-center gap-6">
             <Login />
             <Cart />
           </div>
        </div>
      </div>
   <div className="block xl:hidden max-w-[1440px] mx-auto px-4 md:px-10 py-5">
        <div className=" flex-col items-center justify-between gap-8">
           <div className="flex items-center gap-6 mb-5 xl:mb-0 justify-between">
            <div className="h-[40px] w-[40px] border-gray-500 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12L10 12" stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M20 5L4 5" stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M20 19L4 19" stroke="#212529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
            </div>
           <Logo />
             <Cart />
           </div>
           <div className="flex max-w-full">
             <Searchinp />
           </div>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10">
          <Bottamh />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
