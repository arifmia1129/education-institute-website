import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";
import { useForm } from "react-hook-form";

export default function AddTotalEmployeeInfo() {
  const [processing, setIsProcessing] = useState(false);
  const [totalEmployee, setTotalEmployee] = useState(null);

  const handleGetTotalEmployee = async () => {
    setIsProcessing(true);
    const { data } = await api.get("total-employee");

    if (data.success) {
      setTotalEmployee(data.data);
    }

    setIsProcessing(false);
  };

  useEffect(() => {
    handleGetTotalEmployee();
  }, []);

  const { register, handleSubmit } = useForm({
    defaultValues: totalEmployee,
  });

  const onSubmit = async (info) => {
    setIsProcessing(true);
    try {
      const { data } = await api.patch("total-employee", info);

      if (data.success) {
        handleGetTotalEmployee();
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
      {totalEmployee && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center place-items-center">
            <div className="w-full max-w-md">
              <label htmlFor="allowedTeacher" className="block ">
                Allowed Teacher
              </label>
              <input
                defaultValue={totalEmployee?.allowedTeacher}
                {...register("allowedTeacher")}
                type="number"
                id="id"
                placeholder="Enter allowed teacher"
                className="input input-bordered w-full md:w-96"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="currentTeacher" className="block ">
                Current Teacher
              </label>
              <input
                {...register("currentTeacher")}
                defaultValue={totalEmployee?.currentTeacher}
                type="number"
                id="id"
                placeholder="Enter current teacher"
                className="input input-bordered w-full md:w-96"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="maleTeacher" className="block ">
                Male Teacher
              </label>
              <input
                {...register("maleTeacher")}
                defaultValue={totalEmployee?.maleTeacher}
                type="number"
                id="id"
                placeholder="Enter male teacher"
                className="input input-bordered w-full md:w-96"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="femaleTeacher" className="block ">
                Female Teacher
              </label>
              <input
                {...register("femaleTeacher")}
                defaultValue={totalEmployee?.femaleTeacher}
                type="number"
                id="id"
                placeholder="Enter female teacher"
                className="input input-bordered w-full md:w-96"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="allowedOtherEmployee" className="block ">
                Allowed other employee
              </label>
              <input
                {...register("allowedOtherEmployee")}
                defaultValue={totalEmployee?.allowedOtherEmployee}
                type="number"
                id="id"
                placeholder="Enter allowed other employee"
                className="input input-bordered w-full md:w-96"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="currentOtherEmployee" className="block ">
                Current other employee
              </label>
              <input
                {...register("currentOtherEmployee")}
                defaultValue={totalEmployee?.currentOtherEmployee}
                type="number"
                id="id"
                placeholder="Enter current other employee"
                className="input input-bordered w-full md:w-96"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="maleOtherEmployee" className="block ">
                Male other employee
              </label>
              <input
                {...register("maleOtherEmployee")}
                defaultValue={totalEmployee?.maleOtherEmployee}
                type="number"
                id="id"
                placeholder="Enter male other employee"
                className="input input-bordered w-full md:w-96"
              />
            </div>
            <div className="w-full max-w-md">
              <label htmlFor="femaleOtherEmployee" className="block ">
                Female other employee
              </label>
              <input
                {...register("femaleOtherEmployee")}
                defaultValue={totalEmployee?.femaleOtherEmployee}
                type="number"
                id="id"
                placeholder="Enter female other employee"
                className="input input-bordered w-full md:w-96"
              />
            </div>
          </div>
          <div className="relative mt-6">
            <button type="submit" className="btn btn-primary text-white">
              Add Total Employee Info
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
