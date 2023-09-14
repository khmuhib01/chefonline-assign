import { useEffect, useState } from "react";
import SectionWrapper from "../../component/SectionWrapper";
import axios from "axios";

// interface IDish {
//   cuisine_id: string;
//   cuisine_name: string;
//   category: [
//     {
//       category_id: string;
//       category_name: string;
//       dish: [
//         {
//           dish_id: string;
//           dish_name: string;
//           dish_description: string;
//           dish_price: string;
//         }
//       ];
//     }
//   ];
// }

export const Home = () => {
  const [dishes, setDishes] = useState<any>();

  useEffect(() => {
    // Define the API URL
    const apiUrl =
      "http://smartrestaurantsolutions.com/mobileapi-v2/v3/Tigger.php?funId=81&rest_id=17"; // Replace with your API URL

    // Make an Axios GET request to the API
    axios
      .get(apiUrl)
      .then((response) => {
        setDishes(response?.data?.app[0]?.cuisine); // Set the response data to the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!dishes) return null;

  console.log("dishes", dishes);
  // console.log("data", data.app[0].cuisine[0].category);
  return (
    <>
      <SectionWrapper title="Food Items" subTitle="Explore your food">
        {dishes.map((cuisine: any) => {
          return (
            <div className="" key={cuisine.cuisine_id}>
              <div className="">
                <h2 className="text-center">{cuisine.cuisine_name}</h2>
              </div>
              {cuisine.category.map((category: any) => {
                return (
                  <div className="" key={category.category_id}>
                    <h1 className="text-[30px] font-bold">
                      {category.category_name}
                    </h1>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                      {category.dish.map((dish: any) => {
                        return (
                          <div
                            className="shadow border p-2 rounded-md"
                            key={dish.dish_id}
                          >
                            <p>{dish.dish_name}</p>
                            <p>{dish.dish_description}</p>
                            <p>{dish.dish_price}</p>
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
