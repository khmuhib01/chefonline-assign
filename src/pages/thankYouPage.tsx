import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hook";

export const ThankYouPage = () => {
  const cartItems = useAppSelector((state) => state.cart.orderItem);

  const totalCartPrice = cartItems
    .reduce((total, item) => {
      return total + parseFloat(item.price);
    }, 0)
    .toFixed(2);

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center py-10">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-center mb-4">
            Thank You for Your Order!
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
      <div className="py-10 bg-gray-100">
        <div className="container mx-auto px-2">
          <div className="py-3">
            <h1 className="text-[30px] font-bold">Order Item</h1>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-9 col-span-12">
              <div className="">
                <table className="w-full flex flex-col">
                  <tr className="py-5 h-[50px] text-left md:flex md:flex-row flex-col justify-between items-center hidden">
                    <th className="w-full">Dish name</th>
                    <th className="w-full text-center">Dish Price</th>
                    <th className="w-full text-center">Dish quantity</th>
                  </tr>
                  {cartItems?.map((item: any) => {
                    return (
                      <React.Fragment key={item.id}>
                        <tr className="border-[1px] border-t-[#65829D] border-t-4 md:border-t-[1px] md:border-t-[#E7E7E7] md:border-b-0 md:border-r-0 md:border-l-0 flex md:flex-row flex-col justify-between items-center py-5">
                          <td className="w-full">
                            <div className="flex items-center md:flex-row flex-col gap-x-8">
                              <p className="text-[15px]">{item.name}</p>
                            </div>
                          </td>
                          <td className="text-center w-full text-[#777]">
                            ${item.price}
                          </td>
                          <td className="text-center w-full">
                            <div className="col-span-2 font-bold">
                              {item.quantity}
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                  <tr className="flex justify-center">
                    <b>Total amount:</b> {totalCartPrice}
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
