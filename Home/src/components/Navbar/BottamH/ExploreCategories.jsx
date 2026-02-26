import React from "react";

const ExploreCategories = () => {
  return (
    <div
      className="
        absolute 
        /* Match 'top' exactly to where the py-5 padding ends */
        top-[100%] 
        left-[-15%] 
        -translate-x-[50%]
        w-screen
        max-w-[1400px]
        bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] 
        border-t border-gray-100
        
        invisible opacity-0 translate-y-2
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        
        transition-all duration-300 ease-out
        z-[999]
        pointer-events-none group-hover:pointer-events-auto
      "
    >
      <div className=" mx-auto px-2 py-1">
        <div className="grid grid-cols-6">
          {[
            { title: "SHOP GRID", links: ["3 Columns", "4 Columns", "5 Columns"] },
            { title: "GRID WITH BANNER", links: ["3 Columns", "4 Columns", "5 Columns"] },
            { title: "FULL WIDTH", links: ["Grid – 3 Columns", "Grid – 4 Columns", "Grid – 5 Columns"] },
            { title: "HORIZONTAL FILTER", links: ["Grid – 3 Columns", "Grid – 4 Columns", "Grid – 5 Columns"] },
            { title: "TOP BANNER", links: ["Grid – 3 Columns", "Grid – 4 Columns", "List – 1 Column"] },
            { title: "BANNER WITH FILTER", links: ["Grid – 3 Columns", "Grid – 4 Columns", "Grid – 6 Columns"] },
          ].map((col, idx) => (
            <div key={idx} className={idx !== 5 ? "border-r border-gray-100 " : ""}>
              <h4 className="font-bold text-gray-900 mb-5 text-[14px] uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link}>
                    <a className="text-gray-500 hover:text-[#00796B]  transition-all duration-200 block text-[13px] font-medium" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;