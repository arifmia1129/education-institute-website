import { useForm } from "react-hook-form";

const AdminLogin = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  //   const onSubmit = async (userData) => {
  //     setIsProcessing(true);
  //     try {
  //       const { data } = await api.post("user/login", userData);

  //       if (data.success) {
  //         localStorage.removeItem("user");
  //         localStorage.setItem("user", JSON.stringify(data.data));
  //         toast.success(data.message);
  //         reset();
  //         navigate(from, { replace: true });
  //       } else {
  //         toast.error(data.message);
  //       }
  //     } catch (error) {
  //       toast.error(error.response.data.error);
  //     } finally {
  //       setIsProcessing(false);
  //     }
  //   };

  return (
    <div className="flex items-center justify-center h-[60vh] mb-10">
      <div className="md:w-1/2 mx-2 w-full">
        <div className="bg-primary rounded-lg p-5 md:p-10">
          <h1 className="mb-6 text-3xl font-semibold text-center text-white">
            Admin Login
          </h1>
          <div className="flex justify-center items-center w-full">
            <form>
              <div className="space-y-4">
                <div className="w-full max-w-md">
                  <label htmlFor="mobile" className="block text-white">
                    User ID
                  </label>
                  <input
                    {...register("mobile", {
                      required: "Mobile number is required",
                    })}
                    type="text"
                    id="mobile"
                    placeholder="Enter a valid user ID"
                    className="input w-full md:w-96"
                  />
                  {errors.mobile && (
                    <span className="text-red-500 text-sm">
                      {errors.mobile.message}
                    </span>
                  )}
                </div>
                <div className="w-full max-w-md">
                  <label htmlFor="password" className="block text-white">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    id="password"
                    placeholder="Enter a valid password"
                    className="input w-full md:w-96"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="relative mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-white text-primary font-semibold"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
