import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";
import { useForm } from "react-hook-form";

export default function AddInstituteInfo() {
  const [processing, setIsProcessing] = useState(false);
  const [info, setInfos] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: info,
  });

  const handleGetInfo = async () => {
    setIsProcessing(true);
    const { data } = await api.get("institute");

    if (data.success) {
      setInfos(data.data);
      reset(data.data);
    }

    setIsProcessing(false);
  };

  useEffect(() => {
    handleGetInfo();
  }, []);

  const onSubmit = async (info) => {
    setIsProcessing(true);
    try {
      const { data } = await api.patch("institute", info);

      if (data.success) {
        handleGetInfo();
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
      {info ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center place-items-center">
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Computer Lab
              </label>
              <textarea
                {...register("computerLab")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Employee Present
              </label>
              <textarea
                {...register("employeePresent")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Extra Curriculum
              </label>
              <textarea
                {...register("extraCurriculum")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                History
              </label>
              <textarea
                {...register("history")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Land Information
              </label>
              <textarea
                {...register("land")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Land Owner
              </label>
              <textarea
                {...register("landOwner")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                MPO & Nationalization
              </label>
              <textarea
                {...register("mpo")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Multimedia Class
              </label>
              <textarea
                {...register("multimediaClass")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Playground Information
              </label>
              <textarea
                {...register("playground")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Teacher Present Information
              </label>
              <textarea
                {...register("teacherPresent")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
          </div>
          <div className="relative mt-6">
            <button type="submit" className="btn btn-primary text-white">
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
