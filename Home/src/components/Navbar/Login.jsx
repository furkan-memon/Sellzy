import React, { useRef } from "react";
import { Lock, ChevronDown, Contact, KeyRound } from "lucide-react";
import gsap from "gsap";

const Login = () => {
  const menuRef = useRef();

  const showMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      pointerEvents: "auto",
      ease: "power2.out",
    });
  };

  const hideMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      pointerEvents: "none",
      ease: "power2.in",
    });
  };

  return (
    <li
      className="relative   hidden xl:inline-block"
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      
      <div className="flex gap-3 items-center cursor-pointer">
        <div className="bg-[#ffc107] px-3 py-3 rounded-full">
          <Lock size={16} />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-sm">Account</span>
          <span className="font-medium">Login</span>
        </div>

        <ChevronDown size={16} />
      </div>

      <div
        ref={menuRef}
        className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md
             opacity-0 translate-y-5 pointer-events-none z-50 group-hover:opacity-100   group-hover:visible "
      >
        <ul className="py-2  text-sm">
          <li className="px-4 ">
            <a href="" className="py-2 hover:bg-gray-100 flex items-center gap-2">
            <span className="bg-gray-200 p-2 rounded-full">
              <Lock size={10} />
            </span>
            Login
            </a>
          </li>

            <li className="px-4">
            <a href="" className="py-2 hover:bg-gray-100 flex items-center gap-2">
            <span className="bg-gray-200 p-2 rounded-full">
              <Contact size={10} />
            </span>
            Register
            </a>
          </li>

           <li className="px-4">
            <a href="" className="py-2 hover:bg-gray-100 flex items-center gap-2">
            <span className="bg-gray-200 p-2 rounded-full">
              <KeyRound size={10} />
            </span>
            Forget Password
            </a>
          </li>

            <li className="px-4">
            <a href="" className="py-2 hover:bg-gray-100 flex items-center gap-2">
            <span className="bg-gray-200 p-2 rounded-full">
              <KeyRound size={10} />
            </span>
            Set Password
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Login;
