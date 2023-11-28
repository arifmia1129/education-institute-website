import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";
import { useForm } from "react-hook-form";

export default function AddStudentInfo() {
  const [processing, setIsProcessing] = useState(false);
  const [student, setStudent] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: student,
  });

  const handleGetStudent = async () => {
    setIsProcessing(true);
    const { data } = await api.get("student");

    if (data.success) {
      setStudent(data.data);
      reset(data.data);
    }

    setIsProcessing(false);
  };

  useEffect(() => {
    handleGetStudent();
  }, []);

  const onSubmit = async (info) => {
    setIsProcessing(true);
    try {
      const { data } = await api.patch("student", info);

      if (data.success) {
        handleGetStudent();
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
      {student ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="border-2 border-gray-500 rounded-lg p-2 md:p-5 my-5">
            <p className="text-xl font-bold mb-5">Class Six:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center place-items-center">
              <div className="w-full max-w-md">
                <label htmlFor="male" className="block ">
                  Male Student
                </label>
                <input
                  {...register("class6.male")}
                  type="number"
                  id="id"
                  placeholder="Enter male student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="female" className="block ">
                  Female Student
                </label>
                <input
                  {...register("class6.female")}
                  type="number"
                  id="id"
                  placeholder="Enter female student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="total" className="block ">
                  Total Student
                </label>
                <input
                  {...register("class6.total")}
                  type="number"
                  id="id"
                  placeholder="Enter total student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-500 rounded-lg p-2 md:p-5 my-5">
            <p className="text-xl font-bold mb-5">Class Seven:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center place-items-center">
              <div className="w-full max-w-md">
                <label htmlFor="male" className="block ">
                  Male Student
                </label>
                <input
                  {...register("class7.male")}
                  type="number"
                  id="id"
                  placeholder="Enter male student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="female" className="block ">
                  Female Student
                </label>
                <input
                  {...register("class7.female")}
                  type="number"
                  id="id"
                  placeholder="Enter female student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="total" className="block ">
                  Total Student
                </label>
                <input
                  {...register("class7.total")}
                  type="number"
                  id="id"
                  placeholder="Enter total student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-500 rounded-lg p-2 md:p-5 my-5">
            <p className="text-xl font-bold mb-5">Class Eight:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center place-items-center">
              <div className="w-full max-w-md">
                <label htmlFor="male" className="block ">
                  Male Student
                </label>
                <input
                  {...register("class8.male")}
                  type="number"
                  id="id"
                  placeholder="Enter male student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="female" className="block ">
                  Female Student
                </label>
                <input
                  {...register("class8.female")}
                  type="number"
                  id="id"
                  placeholder="Enter female student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="total" className="block ">
                  Total Student
                </label>
                <input
                  {...register("class8.total")}
                  type="number"
                  id="id"
                  placeholder="Enter total student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-500 rounded-lg p-2 md:p-5 my-5">
            <p className="text-xl font-bold mb-5">Class Nine:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center place-items-center">
              <div className="w-full max-w-md">
                <label htmlFor="male" className="block ">
                  Male Student
                </label>
                <input
                  {...register("class9.male")}
                  type="number"
                  id="id"
                  placeholder="Enter male student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="female" className="block ">
                  Female Student
                </label>
                <input
                  {...register("class9.female")}
                  type="number"
                  id="id"
                  placeholder="Enter female student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="total" className="block ">
                  Total Student
                </label>
                <input
                  {...register("class9.total")}
                  type="number"
                  id="id"
                  placeholder="Enter total student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="total" className="block ">
                  Science Student
                </label>
                <input
                  {...register("class9.science")}
                  type="number"
                  id="id"
                  placeholder="Enter total student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="total" className="block ">
                  Humanities Student
                </label>
                <input
                  {...register("class9.arts")}
                  type="number"
                  id="id"
                  placeholder="Enter total student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-500 rounded-lg p-2 md:p-5 my-5">
            <p className="text-xl font-bold mb-5">Class Ten:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center place-items-center">
              <div className="w-full max-w-md">
                <label htmlFor="male" className="block ">
                  Male Student
                </label>
                <input
                  {...register("class10.male")}
                  type="number"
                  id="id"
                  placeholder="Enter male student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="female" className="block ">
                  Female Student
                </label>
                <input
                  {...register("class10.female")}
                  type="number"
                  id="id"
                  placeholder="Enter female student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="total" className="block ">
                  Total Student
                </label>
                <input
                  {...register("class10.total")}
                  type="number"
                  id="id"
                  placeholder="Enter total student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="total" className="block ">
                  Science Student
                </label>
                <input
                  {...register("class10.science")}
                  type="number"
                  id="id"
                  placeholder="Enter total student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
              <div className="w-full max-w-md">
                <label htmlFor="total" className="block ">
                  Humanities Student
                </label>
                <input
                  {...register("class10.arts")}
                  type="number"
                  id="id"
                  placeholder="Enter total student number"
                  className="input input-bordered w-full md:w-96"
                />
              </div>
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
