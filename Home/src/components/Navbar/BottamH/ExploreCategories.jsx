import React from "react";

const ExploreCategories = () => {
  return (
    <div
      className="
        absolute inset-x-0 top-full
        bg-white shadow-lg border-b border-gray-300
        opacity-0 translate-y-6 pointer-events-none
        group-hover:opacity-100
        group-hover:translate-y-0
        group-hover:pointer-events-auto
        transition-all duration-200
        z-[999]
      "
    >
      {/* CENTERED INNER CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-10 py-8">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-sm text-gray-700">

          {/* Column 1 */}
          <div className="px-4 border-r border-gray-200">
            <h4 className="font-semibold mb-3">SHOP GRID</h4>
            <ul className="space-y-2">
              <li><a className="block hover:text-[#088178]" href="#">3 Columns (Left Filter)</a></li>
              <li><a className="block hover:text-[#088178]" href="#">4 Columns (Left Filter)</a></li>
              <li><a className="block hover:text-[#088178]" href="#">5 Columns (Left Filter)</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="px-4 border-r border-gray-200">
            <h4 className="font-semibold mb-3">GRID WITH BANNER</h4>
            <ul className="space-y-2">
              <li><a className="block hover:text-[#088178]" href="#">3 Columns (Left Filter)</a></li>
              <li><a className="block hover:text-[#088178]" href="#">4 Columns (Left Filter)</a></li>
              <li><a className="block hover:text-[#088178]" href="#">5 Columns (Left Filter)</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="px-4 border-r border-gray-200">
            <h4 className="font-semibold mb-3">FULL WIDTH LAYOUT</h4>
            <ul className="space-y-2">
              <li><a className="block hover:text-[#088178]" href="#">Grid – 3 Columns</a></li>
              <li><a className="block hover:text-[#088178]" href="#">Grid – 4 Columns</a></li>
              <li><a className="block hover:text-[#088178]" href="#">Grid – 5 Columns</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="px-4 border-r border-gray-200">
            <h4 className="font-semibold mb-3">HORIZONTAL FILTER</h4>
            <ul className="space-y-2">
              <li><a className="block hover:text-[#088178]" href="#">Grid – 3 Columns</a></li>
              <li><a className="block hover:text-[#088178]" href="#">Grid – 4 Columns</a></li>
              <li><a className="block hover:text-[#088178]" href="#">Grid – 5 Columns</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="px-4 border-r border-gray-200">
            <h4 className="font-semibold mb-3">TOP BANNER</h4>
            <ul className="space-y-2">
              <li><a className="block hover:text-[#088178]" href="#">Grid – 3 Columns</a></li>
              <li><a className="block hover:text-[#088178]" href="#">Grid – 4 Columns</a></li>
              <li><a className="block hover:text-[#088178]" href="#">List – 1 Column</a></li>
            </ul>
          </div>

          {/* Column 6 */}
          <div className="px-4">
            <h4 className="font-semibold mb-3">BANNER WITH FILTER</h4>
            <ul className="space-y-2">
              <li><a className="block hover:text-[#088178]" href="#">Grid – 3 Columns</a></li>
              <li><a className="block hover:text-[#088178]" href="#">Grid – 4 Columns</a></li>
              <li><a className="block hover:text-[#088178]" href="#">Grid – 6 Columns</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
