const PageNotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          The page you are looking for does not exist.
        </p>
        <div className="text-center">
          <a
            href="/"
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md font-semibold inline-block"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
