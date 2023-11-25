import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 30000);

  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div>
        <h1 className="text-7xl font-bold text-center my-5">Notice</h1>
        <p className="text-xl font-semibold text-center my-5">
          We will working about this page. Please wait for it.
        </p>
        <div className="flex w-full justify-center">
          <button className="btn btn-primary text-white px-5 py-2">
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
