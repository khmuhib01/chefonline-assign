import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    console.log(isSidebarVisible); // Add this line for debugging
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-red-500 to-amber-500 py-2">
        <p className="text-center">Welcome Massage</p>
      </div>
      <div className="px-5 shadow-md py-5">
        <div className="flex justify-end items-center gap-x-2">
          <div className="bg-gray-200 p-2 rounded-full" onClick={toggleSidebar}>
            <AiFillHome />
          </div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <div
        className={`fixed h-[100vh] top-0 left-${
          isSidebarVisible ? "0" : "-full hidden"
        } w-64 bg-white shadow-md transition-transform ease-in-out duration-300 transform translate-x-${
          isSidebarVisible ? "0" : "64"
        }`}
      >
        <div className="relative h-[100vh]">
          {/* Sidebar content goes here */}
          <p>This is your cart sidebar.</p>
          <button className="bg-orange-300 w-full block absolute bottom-0">
            Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
