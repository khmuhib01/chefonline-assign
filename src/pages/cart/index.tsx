import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  increaseQuantity,
  decreaseQuantity,
  resetCart,
  storeCartItem,
  removeCartItem,
} from "../../store/cart/cartSlice";
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart);

  // Calculate the total price
  const totalCartPrice = cartItems
    .reduce((total, item) => {
      return total + parseFloat(item.price);
    }, 0)
    .toFixed(2);

  const handleCheckout = () => {
    dispatch(storeCartItem(cartItems));
    dispatch(resetCart());
  };

  console.log("cartItems", cartItems);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="bg-gray-100 flex items-center justify-center py-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold text-center mb-4">
              Your cart is empty.
            </h1>
            <p className="text-lg text-gray-700 text-center mb-6">
              Your order has been successfully placed.
            </p>
            <div className="text-center">
              <Link
                to="/"
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen">
          <div className="py-10">
            <div className="container mx-auto px-2">
              <div className="py-3">
                <h1 className="text-[30px] font-bold">My Cart</h1>
              </div>
              <div className="grid grid-cols-12 gap-5">
                <div className="lg:col-span-9 col-span-12">
                  <div className="">
                    <table className="w-full flex flex-col">
                      <tr className="py-5 h-[50px] text-left md:flex md:flex-row flex-col justify-between items-center hidden">
                        <th className="w-full">Dish name</th>
                        <th className="w-full text-center">Dish Total Price</th>
                        <th className="w-full text-center">Dish quantity</th>
                      </tr>
                      {cartItems?.map((item: any) => {
                        return (
                          <React.Fragment key={item.id}>
                            <tr className="border-[1px] border-t-[#65829D] border-t-4 md:border-t-[1px] md:border-t-[#E7E7E7] md:border-b-0 md:border-r-0 md:border-l-0 flex md:flex-row flex-col justify-between items-center py-5">
                              <td className="w-full">
                                <div className="flex items-center md:flex-row flex-col gap-x-8">
                                  <div className="relative">
                                    <div
                                      className="absolute h-[20px] w-[20px] bg-white shadow-md top-[-5px] right-[-5px] rounded-full flex justify-center items-center"
                                      onClick={() => {
                                        dispatch(removeCartItem(item.id));
                                      }}
                                    >
                                      <AiOutlineClose />
                                    </div>
                                  </div>
                                  <p className="text-[15px]">{item.name}</p>
                                </div>
                              </td>
                              <td className="text-center w-full text-[#777]">
                                ${item.price}
                              </td>
                              <td className="text-center w-full">
                                <div className="grid grid-cols-4 border-[1px] w-[100px] text-center items-center m-auto">
                                  <div
                                    className="col-span-1 border-r-[1px] py-2 text-[20px] cursor-pointer"
                                    onClick={() => {
                                      console.log(
                                        "dich quantity",
                                        item.quantity
                                      );
                                      dispatch(decreaseQuantity(item));
                                    }}
                                  >
                                    -
                                  </div>
                                  <div className="col-span-2 font-bold">
                                    {item.quantity}
                                  </div>
                                  <div
                                    className="col-span-1 border-l-[1px] py-2 text-[20px] cursor-pointer"
                                    onClick={() => {
                                      console.log(
                                        "increase quantity",
                                        item.quantity
                                      );
                                      dispatch(increaseQuantity(item));
                                    }}
                                  >
                                    +
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
                        );
                      })}
                    </table>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-12 border-2">
                  <div className="p-6">
                    <div className="">
                      <h3 className="text-[16px] text-[#222529] font-bold">
                        Cart Total
                      </h3>
                    </div>
                    <div className="px-2 py-5">
                      <div className="flex justify-between items-center">
                        <p className="text-[#222529] font-bold text-[15px]">
                          Total
                        </p>
                        <p className="text-[15px] text-[#777]">
                          ${totalCartPrice}
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <Link
                        to="/thank-you"
                        onClick={handleCheckout}
                        className="bg-[#222529] hover:bg-[#34393F] text-white uppercase block py-3 text-center font-bold"
                      >
                        Submit
                      </Link>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
