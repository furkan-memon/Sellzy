import React from "react";
import { ChevronRight } from "lucide-react";
import  {PDsubDropdown,SwsubDropdown,ScsubDropdown,ScksubDropdown}  from "./subDropeDown";
import { Link } from 'react-router-dom'

export const ShopDropdown = ({ menuRef }) => {
  return (
    <div
      ref={menuRef}
      className="absolute left-0 top-full mt-1 min-w-60
                 bg-white rounded-lg shadow-lg
                 opacity-0 translate-y-3 pointer-events-none z-999"
    >
      <ul className="py-2 text-sm text-gray-700 list-none">
        <li className="relative group">
          <div className="flex items-center justify-between px-5 py-2.5
                          rounded-md cursor-pointer hover:text-[#088178]">
            <Link to='/product-details'>Product Details</Link>
            <ChevronRight size={16} className="text-gray-400" />
          </div>

          <PDsubDropdown />
        </li>
          <li className="relative group">
          <div className="flex items-center justify-between px-5 py-2.5
                          rounded-md cursor-pointer hover:text-[#088178]">
            <Link to='Wishlist'>Shop – Wishlist</Link>
            <ChevronRight size={16} className="text-gray-400" />
          </div>

          <SwsubDropdown />
        </li>
        <li className="relative group">
          <div className="flex items-center justify-between px-5 py-2.5
                          rounded-md cursor-pointer hover:text-[#088178]">
            <span>Shop – Cart</span>
            <ChevronRight size={16} className="text-gray-400" />
          </div>

          <ScsubDropdown />
        </li>
        <li className="relative group">
          <div className="flex items-center justify-between px-5 py-2.5
                          rounded-md cursor-pointer hover:text-[#088178]">
            <span>Shop – Checkout</span>
            <ChevronRight size={16} className="text-gray-400" />
          </div>

          <ScksubDropdown />
        </li>
         <li className="relative group">
          <div className="flex items-center justify-between px-5 py-2.5
                          rounded-md cursor-pointer hover:text-[#088178]">
            <span>Shop – Order Success</span>
          </div>

        </li>
        <li className="relative group">
          <div className="flex items-center justify-between px-5 py-2.5
                          rounded-md cursor-pointer hover:text-[#088178]">
            <span>Shop – Compare</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export const HomeDropdown = ({ menuRef }) => {
  return (
    <div
        ref={menuRef}
        className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md
             opacity-0 translate-y-3 pointer-events-none z-50 "
      >
        <ul className="py-2 text-sm  text-gray-700">
          {[
            "Home-1",
            "Home-2",
            "Home-3",
            "Home-4",
            "Home-5",
          ].map((item) => (
        
             <li key={item}>
      <a
        href="#"
        className={`block px-5 py-2.5 rounded-md transition
          ${item === "Home-2"
            ? "text-[#088178]"
            : "hover:text-[#088178]"}`}
      >
                {item}
              </a>
            </li>
          ))}
        </ul>
       

      </div>
  );
};
export const SellerDropdown = ({ menuRef }) => {
  return (
     <div
        ref={menuRef}
        className="absolute left-0 top-full mt-1 min-w-[18rem]
                   bg-white rounded-lg shadow-lg
                   opacity-0 translate-y-3 pointer-events-none z-999"
      >
        <ul className="py-2 text-sm  text-gray-700">
             <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                Sellers Grid
              </a>
            </li>
             <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                Sellers List
              </a>
            </li>
             <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                Sellers MarketPlacev1
              </a>
            </li>
             <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
               Sellers MarketPlacev2
              </a>
            </li>
             <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                Sellers Account
              </a>
            </li>
             <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                Sellets Deashboard
              </a>
            </li>
         
        </ul>
      </div>
  );
};
export const BlogDropdown = ({ menuRef }) => {
  return (
     <div
        ref={menuRef}
        className="absolute left-0 top-full  min-w-[18rem]
                   bg-white rounded-lg shadow-lg
                   opacity-0 translate-y-3 pointer-events-none z-999"
      >
        <ul className="py-2 text-sm  text-gray-700">
             <li>
              <Link
                to="/Blog"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                Blog Grid
              </Link>
            </li>
             <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                Blog List
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                Blog Details
              </a>
            </li>
         
        </ul>
      </div>
  );
};
export const PagesDropdown = ({ menuRef }) => {
  return (
     <div
        ref={menuRef}
        className="absolute left-0 top-full mt-1 min-w-[18rem]
                   bg-white rounded-lg shadow-lg
                   opacity-0 translate-y-3 pointer-events-none z-999"
      >
        <ul className="py-2 text-sm  text-gray-700">
             <li>
              <Link 
                to="/404"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                404 Page
              </Link>
            </li>
             <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                Coming Soon page
              </a>
            </li>
            <li>
              <Link
                to="FAQ"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                FAQ 
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                My Account 
              </a>
            </li>
         
        </ul>
      </div>
  );
};
export const ButtonDropdown = ({ menuRef }) => {
  return (
     <div
        ref={menuRef}
        className="absolute left-0 top-full mt-1 min-w-[18rem]
                   bg-white rounded-lg shadow-lg
                   opacity-0 translate-y-3 pointer-events-none z-999"
      >
        <ul className="py-2 text-sm  text-gray-700">
             <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                404 Page
              </a>
            </li>
             <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                Coming Soon page
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                FAQ 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                My Account 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                My Account 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                My Account 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                My Account 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                My Account 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                My Account 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                My Account 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-5 py-2.5 rounded-md hover:text-[#088178] transition"
              >
                My Account 
              </a>
            </li>
         
        </ul>
      </div>
  );
};

