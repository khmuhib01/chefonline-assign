import { Link } from "react-router-dom";
import { IBlogPost } from "../../model/blog-post";
import { BsArrowRight } from "react-icons/bs";

const DishCard = ({ blogPost }: { blogPost: IBlogPost }) => {
  return (
    <div className="border rounded-md overflow-hidden">
      <img
        src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4="
        alt=""
        className="h-[250px] w-full"
      />
      <div className="px-5 py-2 flex flex-col space-y-2">
        <h4 className="font-bold">{blogPost.title}</h4>
        <p>{blogPost.desc}</p>
        <div className="group/item hover:underline transition duration-75">
          <Link to="/">
            <div className="p-2 opacity-90 hover:opacity-100">
              <div className="flex items-center gap-2">
                Learn More
                <BsArrowRight className="hidden group-hover/item:block" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
