import React from "react";
import { Lock, ChevronDown,Contact ,KeyRound} from "lucide-react";

const Login = () => {
  return (
    <li className="relative group inline-block">
      {/* Trigger */}
      <div className="flex gap-3 justify-center items-center cursor-pointer">
        <div className="bg-[#ffc107] px-3 py-3 rounded-full">
          <Lock size={16} />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-sm">Account</span>
          <span className="font-medium">Login</span>
        </div>

        <ChevronDown size={16} />
      </div>

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md 
                      opacity-0 invisible group-hover:opacity-100 
                      group-hover:visible transition-all duration-200">
        <ul className="py-2 text-sm ">
          <li className="px-4 py-2 hover:bg-gray-100 flex  items-center gap-2 cursor-pointer">
           <span className="bg-gray-200 px-2 py-2 rounded-full"><Lock size={10} /> </span>
           Login
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex  items-center gap-2 cursor-pointer">
           <span className="bg-gray-200 px-2 py-2 rounded-full"><Contact size={10} /> </span>
            Register
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex text-nowrap items-center gap-2 cursor-pointer">
           <span className="bg-gray-200 px-2 py-2 rounded-full"><KeyRound size={10} /> </span>
            Forget Password
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 flex  items-center gap-2 cursor-pointer">
           <span className="bg-gray-200 px-2 py-2 rounded-full"><KeyRound size={10} /> </span>
            Set Password
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Login;
