import React, { useRef } from "react";
import { Lock, ChevronDown, Contact, KeyRound } from "lucide-react";
import gsap from "gsap";
import { HomeDropdown } from "./Dropdown";

const Home = () => {
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
      className="relative inline-block"
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      
      <div className="flex gap-3 items-center text-[#088178] cursor-pointer">
        Home
        <ChevronDown size={16} />
      </div>

      <HomeDropdown menuRef={menuRef}/>
    </li>
  );
};

export default Home;
