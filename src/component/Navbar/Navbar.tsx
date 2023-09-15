import { useState } from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hook";

const Navbar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const cartItems = useAppSelector((state) => state.cart.cart.length);

  const toggleSidebar = () => {
    console.log(isSidebarVisible);
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="px-5 shadow-md py-5 w-full bg-white">
        <div className="flex justify-between items-center gap-x-2">
          <div className="">
            <Link to="/">
              <h1 className="max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-4xl dark:text-white inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                ChefOnline
              </h1>
            </Link>
          </div>
          <Link to="/cart">
            <div className="flex items-center gap-x-2 group">
              <div
                className="bg-gray-200 p-2 rounded-full group-hover:bg-amber-500"
                onClick={toggleSidebar}
              >
                <AiOutlineShoppingCart className="group-hover:text-white" />
              </div>
              <p>Cart ({cartItems})</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
