const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
        <p className="mt-4 text-gray-500">
          The page you are looking for doesnt exist.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
