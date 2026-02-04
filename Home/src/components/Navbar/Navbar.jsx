import React from "react";
import Logo from "./Logo.jsx";
import Searchinp from "./Searchinp";
import Login from "./Login.jsx";
import Cart from "./Cart.jsx";
import Bottamh from "./BottamH/Bottamh.jsx";

const Navbar = () => {
  return (
    <header className="relative w-full bg-white">
      
      {/* Header Middle */}
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Searchinp />
          <ul className="flex gap-5 items-center">
            <Login />
            <Cart />
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-b border-gray-300"></div>

      {/* Bottom Navigation (Mega Menu lives here) */}
      <Bottamh />

    </header>
  );
};

export default Navbar;
