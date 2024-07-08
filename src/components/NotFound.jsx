import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handlePrevPage = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-full">
        <div className="error-container  p-8 max-w-md w-full text-center">
          <h1 className="font-black text-6xl mb-4">Error 404</h1>
          <h2 className="text-base mb-4">Page Not Found</h2>
          <p className="text-xl font-medium mb-8">
            The page you are looking for does not exist.
          </p>
          <button
            onClick={handlePrevPage}
            className="text-white bg-B88E2F rounded p-2.5"
          >
            <b>Go Back</b>
          </button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
