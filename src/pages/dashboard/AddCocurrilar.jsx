import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";
import { useForm } from "react-hook-form";

export default function AddCocurrilar() {
  const [processing, setIsProcessing] = useState(false);
  const [info, setInfos] = useState(null);

  console.log(info);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: info,
  });

  const handleGetInfo = async () => {
    setIsProcessing(true);
    const { data } = await api.get("cocurricular");

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
      const { data } = await api.patch("cocurricular", info);

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
                Scout Info
              </label>
              <textarea
                {...register("scoutInfo")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Science Club Info
              </label>
              <textarea
                {...register("scienceClubInfo")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Cultural Club Info
              </label>
              <textarea
                {...register("culturalClubInfo")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Education Club Info
              </label>
              <textarea
                {...register("educationClubInfo")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                ICT Club Info
              </label>
              <textarea
                {...register("ictClubInfo")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Sports Club Info
              </label>
              <textarea
                {...register("sportsClubInfo")}
                placeholder="Write..."
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="male" className="block ">
                Other Activities Info
              </label>
              <textarea
                {...register("otherActitiesInfo")}
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
