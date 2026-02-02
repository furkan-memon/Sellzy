import React, { useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import ExploreCategories from "./ExploreCategories";

const Megamenu = () => {
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
      <li className="relative"
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
  >
  <div className="flex items-center gap-2 cursor-pointer">
    Mega menu <ChevronDown size={16} />
  </div>

  {/* full-width reference */}
  <div className="absolute left-0 right-0">
    <ExploreCategories menuRef={menuRef} />
  </div>
</li>


  );
};

export default Megamenu;
