import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { services } from "../../dummy/service-card";
import Button from "../../component/Button";
import { blogPost } from "../../dummy/blog";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineProject,
} from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { TbWorldCancel } from "react-icons/tb";
import { ImHappy } from "react-icons/im";
import { GiCalendarHalfYear } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import SectionWrapper from "../../component/SectionWrapper";
import BlogCard from "./BlogCard";

interface IBlogPost {
  id: number;
  title: string;
  category?: string;
  tag?: string[];
  desc: string;
  img: string;
}

const glanceData = [
  {
    icon: <AiOutlineProject size={50} className="m-auto text-red-500" />,
    count: "50+",
    label: "Project",
  },
  {
    icon: (
      <AiOutlineFundProjectionScreen
        size={50}
        className="m-auto text-red-500"
      />
    ),
    count: "50+",
    label: "Products",
  },
  {
    icon: <IoIosPeople size={50} className="m-auto text-red-500" />,
    count: "50+",
    label: "Experts",
  },
  {
    icon: <TbWorldCancel size={50} className="m-auto text-red-500" />,
    count: "50+",
    label: "Countries",
  },
  {
    icon: <ImHappy size={50} className="m-auto text-red-500" />,
    count: "50+",
    label: "Happy Clients",
  },
  {
    icon: <GiCalendarHalfYear size={50} className="m-auto text-red-500" />,
    count: "50+",
    label: "Years Experienced",
  },
];

const productData = [
  {
    gradientColors: "from-blue-500 to-green-500",
    iconText: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Launch your multi-purpose and multi-vendor online business...",
  },
  {
    gradientColors: "from-orange-500 to-red-500",
    iconText: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Launch your multi-purpose and multi-vendor online business...",
  },
  {
    gradientColors: "from-green-500 to-blue-500",
    iconText: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Launch your multi-purpose and multi-vendor online business...",
  },
  {
    gradientColors: "from-blue-500 to-green-500",
    iconText: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Launch your multi-purpose and multi-vendor online business...",
  },
  {
    gradientColors: "from-orange-500 to-red-500",
    iconText: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Launch your multi-purpose and multi-vendor online business...",
  },
  {
    gradientColors: "from-green-500 to-blue-500",
    iconText: "ERP",
    title: "Enterprise Resource Planning",
    description:
      "Launch your multi-purpose and multi-vendor online business...",
  },
];

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
