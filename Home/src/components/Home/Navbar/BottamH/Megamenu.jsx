import { ChevronDown } from "lucide-react";
import ExploreCategories from "./ExploreCategories";

const Megamenu = () => {
  return (
   
    <div className="group relative py-5"> 
      <div className="flex items-center gap-1 cursor-pointer text-gray-800 font-bold text-[15px] hover:text-[#00796B] transition-colors tracking-tight">
        Mega Menu 
        <ChevronDown size={14} className=" text-gray-400 group-hover:text-[#00796B]" />
      </div>

      <ExploreCategories />
    </div>
  );
};

export default Megamenu;