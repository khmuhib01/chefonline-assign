import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}

const SectionWrapper = ({ children, title, subTitle }: SectionWrapperProps) => {
  return (
    <div className="py-10 px-5">
      <div className="container m-auto">
        <div className="text-center">
          <p>{subTitle}</p>
          <h2 className="text-[40px] font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
