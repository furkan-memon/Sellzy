import React from "react";

const ExploreCategories = ({ menuRef }) => {
  return (
    <div
      ref={menuRef}
      className="absolute left-[4px] top-full w-[1200px]
             bg-white shadow-lg
             opacity-0 translate-y-10 pointer-events-none
             z-[999]"
    >
      <div className="grid grid-cols-6 gap-8 px-8 py-6 text-sm text-gray-700">
        
        {/* Column 1 */}
        <div className="border-r border-gray-200">
          <h4 className="font-semibold mb-3">SHOP GRID</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block hover:text-[#088178]">
                3 Columns (Left Filter)
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#088178]">
                4 Columns (Left Filter)
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#088178]">
                5 Columns (Left Filter)
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="border-r border-gray-200">
          <h4 className="font-semibold mb-3">GRID WITH BANNER</h4>
          <ul className="space-y-2">
            <li><a href="#" className="block hover:text-[#088178]">3 Columns (Left Filter)</a></li>
            <li><a href="#" className="block hover:text-[#088178]">4 Columns (Left Filter)</a></li>
            <li><a href="#" className="block hover:text-[#088178]">5 Columns (Left Filter)</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="border-r border-gray-200">
          <h4 className="font-semibold mb-3">FULL WIDTH LAYOUT</h4>
          <ul className="space-y-2">
            <li><a href="#" className="block hover:text-[#088178]">Grid – 3 Columns</a></li>
            <li><a href="#" className="block hover:text-[#088178]">Grid – 4 Columns</a></li>
            <li><a href="#" className="block hover:text-[#088178]">Grid – 5 Columns</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="border-r border-gray-200">
          <h4 className="font-semibold mb-3">HORIZONTAL FILTER</h4>
          <ul className="space-y-2">
            <li><a href="#" className="block hover:text-[#088178]">Grid – 3 Columns</a></li>
            <li><a href="#" className="block hover:text-[#088178]">Grid – 4 Columns</a></li>
            <li><a href="#" className="block hover:text-[#088178]">Grid – 5 Columns</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="border-r border-gray-200">
          <h4 className="font-semibold mb-3">TOP BANNER</h4>
          <ul className="space-y-2">
            <li><a href="#" className="block hover:text-[#088178]">Grid – 3 Columns</a></li>
            <li><a href="#" className="block hover:text-[#088178]">Grid – 4 Columns</a></li>
            <li><a href="#" className="block hover:text-[#088178]">List – 1 Column</a></li>
          </ul>
        </div>

        {/* Column 6 */}
        <div>
          <h4 className="font-semibold mb-3">BANNER WITH FILTER</h4>
          <ul className="space-y-2">
            <li><a href="#" className="block hover:text-[#088178]">Grid – 3 Columns</a></li>
            <li><a href="#" className="block hover:text-[#088178]">Grid – 4 Columns</a></li>
            <li><a href="#" className="block hover:text-[#088178]">Grid – 6 Columns</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ExploreCategories;
