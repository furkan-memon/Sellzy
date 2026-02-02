import React, { useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { SellerDropdown } from "./Dropdown";

const Sellers = () => {
  const menuRef = useRef(null);

  const showMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.25,
      pointerEvents: "auto",
      ease: "power2.out",
    });
  };

  const hideMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.25,
      pointerEvents: "none",
      ease: "power2.in",
    });
  };

  return (
    <li
      className="relative"
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      <div className="flex items-center gap-2 cursor-pointer">
        Sellers <ChevronDown size={16} />
      </div>

     <SellerDropdown menuRef={menuRef}/>
    </li>
  );
};

export default Sellers;
