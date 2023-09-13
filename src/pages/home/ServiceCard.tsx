import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface ServiceData {
  gradientColors: string;
  iconText: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({
  gradientColors,
  iconText,
  title,
  description,
  link,
}: ServiceData) => {
  return (
    <div className="bg-white flex-col space-y-5 rounded-md p-5 hover:shadow-none">
      <div className="flex space-x-5 items-center">
        <div
          className={`bg-gradient-to-r ${gradientColors} flex justify-center items-center h-[50px] w-[50px] rounded-md text-white font-bold`}
        >
          {iconText}
        </div>
        <p className="font-bold">{title}</p>
      </div>
      <div className="">
        <p>{description}</p>
      </div>
      <div className="">
        <div className="group/item hover:underline transition duration-75">
          <Link to={link}>
            <div className="p-2 opacity-90 hover:opacity-100">
              <div className="flex items-center gap-2">
                Explore Now
                <BsArrowRight className="hidden group-hover/item:block" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
