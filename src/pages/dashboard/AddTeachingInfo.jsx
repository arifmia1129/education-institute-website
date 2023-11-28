import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";
import { useForm } from "react-hook-form";

export default function AddTeachingInfo() {
  const [processing, setIsProcessing] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (info) => {
    setIsProcessing(true);
    try {
      const { data } = await api.post("teaching/create", info);

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsProcessing(false);
    }
  };

  if (processing) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center place-items-center">
          <div className="w-full max-w-md">
            <label htmlFor="allowedTeacher" className="block ">
              Title
            </label>
            <input
              {...register("title")}
              type="text"
              id="id"
              placeholder="Enter title here..."
              className="input input-bordered w-full md:w-96"
            />
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="allowedTeacher" className="block ">
              Google Drive Link
            </label>
            <input
              {...register("fileUrl")}
              type="text"
              id="id"
              placeholder="Enter google drive Link here..."
              className="input input-bordered w-full md:w-96"
            />
          </div>
        </div>
        <div className="relative mt-6">
          <button type="submit" className="btn btn-primary text-white">
            Add Application Form
          </button>
        </div>
      </form>
    </div>
  );
}
