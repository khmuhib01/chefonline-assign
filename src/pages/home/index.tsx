import { useEffect, useState } from "react";
import SectionWrapper from "../../component/SectionWrapper";
import BlogCard from "./BlogCard";
import axios from "axios";

interface IBlogPost {
  id: number;
  title: string;
  category?: string;
  tag?: string[];
  desc: string;
  img: string;
}

const blogPosts: IBlogPost[] = [
  {
    id: 1,
    title: "Blog Post 1",
    category: "Category 1",
    tag: ["Tag1", "Tag2"],
    desc: "Description of Blog Post 1",
    img: "url-to-image-1",
  },
  {
    id: 2,
    title: "Blog Post 2",
    desc: "Description of Blog Post 2",
    img: "url-to-image-2",
  },
  // Add more blog posts as needed...
];

export const Home = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    // Define the API URL
    const apiUrl =
      "http://smartrestaurantsolutions.com/mobileapi-v2/v3/Tigger.php?funId=81&rest_id=17"; // Replace with your API URL

    // Make an Axios GET request to the API
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data); // Set the response data to the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("data", data);
  // console.log("data", data.app[0].cuisine[0].category);
  return (
    <>
      <SectionWrapper title="Restaurant List" subTitle="Explore the restaurant">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {blogPosts.map((blogPost) => (
            <BlogCard key={blogPost.id} blogPost={blogPost} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};
