import { useEffect } from "react";
import SectionWrapper from "../../component/SectionWrapper";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getDishes, addToCart } from "../../store/cart/cartSlice";

export const Home = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector((state) => state.cart.data?.app[0].cuisine);

  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  console.log("dishes", dishes);

  return (
    <>
      <SectionWrapper title="Dishes List" subTitle="Explore your food">
        {dishes?.map((cuisine: any) => {
          return (
            <div className="flex flex-col gap-y-8" key={cuisine.cuisine_id}>
              <div className="">
                <h2 className="text-center text-[40px] font-bold">
                  {cuisine.cuisine_name}
                </h2>
              </div>
              {cuisine.category.map((category: any) => {
                return (
                  <div
                    className="flex flex-col gap-y-2"
                    key={category.category_id}
                  >
                    <h1 className="text-[20px] font-bold">
                      {category.category_name}
                    </h1>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                      {category.dish.map((dish: any) => {
                        return (
                          <div
                            className="shadow border p-2 rounded-md"
                            key={dish.dish_id}
                          >
                            <p className="font-bold">{dish.dish_name}</p>
                            <p>{dish.dish_description}</p>
                            <p>
                              <b>Price:</b> {dish.dish_price}
                            </p>
                            <button
                              className="bg-amber-500 rounded-lg px-2 text-[14px] text-white float-right"
                              onClick={() => {
                                const dish_name = dish.dish_name;
                                const dish_price = dish.dish_price;
                                const dish_id = dish.dish_id;
                                const quantity = 1;

                                dispatch(
                                  addToCart({
                                    id: dish_id,
                                    name: dish_name,
                                    price: dish_price,
                                    quantity,
                                  })
                                );
                              }}
                            >
                              Add Cart
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </SectionWrapper>
    </>
  );
};
