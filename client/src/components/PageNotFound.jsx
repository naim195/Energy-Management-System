const PageNotFound = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-green-200 min-h-screen flex flex-col items-center justify-center p-5">
      <h1 className="text-5xl font-bold text-blue-600">Error 404</h1>
      <p className="text-2xl mt-4 text-gray-700">Page Not Found</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default PageNotFound;
