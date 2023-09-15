const PageTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="py-10 px-5">
      <div className="container m-auto">
        <div className="flex-col space-y-5">
          <div className="text-center">
            <h1 className="text-[40px] font-bold">
              <span className="text-amber-500">{title}</span>
            </h1>
            <h2 className="">{subTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
