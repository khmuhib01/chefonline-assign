import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, link }: { name: string; link: string }) => {
  return (
    <Link
      to={link}
      className="bg-red-500 hover:bg-amber-500 text-white font-medium px-6 py-2 rounded-full min-w-[150px]"
    >
      {name}
    </Link>
  );
};

export default Button;
