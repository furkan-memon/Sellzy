import React, { useRef, useState } from "react";
import { ChevronDown, LayoutGrid } from "lucide-react";
import gsap from "gsap";
import { ButtonDropdown, HomeDropdown } from "./Dropdown";

const Button = () => {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    if (!open) {
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        pointerEvents: "auto",
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        pointerEvents: "none",
        ease: "power2.in",
      });
    }

    setOpen(!open);
  };

  return (
    <div className="relative">
     
      <button
        onClick={toggleMenu}
        className="bg-[#088178] text-[16px] font-bold flex items-center gap-2
                   px-4 py-3 rounded-lg text-white cursor-pointer
                   hover:bg-[#056d6e]"
      >
        <LayoutGrid size={18} />
        Explore All Categories
        <ChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <ButtonDropdown menuRef={menuRef} />
    </div>
  );
};

export default Button;
