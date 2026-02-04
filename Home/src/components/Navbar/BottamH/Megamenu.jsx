import { ChevronDown } from "lucide-react";
import ExploreCategories from "./ExploreCategories";

const Megamenu = () => {
  return (
    <li className="group">
      <div className="flex items-center gap-2 cursor-pointer">
        Mega menu <ChevronDown size={16} />
      </div>

      <ExploreCategories />
    </li>
  );
};

export default Megamenu;
