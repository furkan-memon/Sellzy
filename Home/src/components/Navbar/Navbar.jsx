 import React from "react";
import Logo from "./Logo.jsx";
import Searchinp from "./Searchinp";
import Login  from "./Login.jsx";
import Cart from './Cart.jsx'
import Bottamh from "./BottamH/Bottamh.jsx";
const Navbar = () => {
  return (
    <>
    <div className=""> 

    </div>
{/* header middle start */}
    <div className="flex items-center justify-between  px-6 py-4">
     <Logo />
      <Searchinp />
      <ui className="flex gap-5 justify-center items-center">
      <Login />
      <Cart />
      </ui>
    </div>
    <div className="absolute left-1/2  w-screen -translate-x-1/2 border-b border-gray-300"></div>
    <div>
      <Bottamh />
    </div>
    </>
  )
};

export default Navbar;
