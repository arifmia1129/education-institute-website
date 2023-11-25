import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";

export default function AddEmployee() {
  const [isLoading, setIsLoading] = useState(false);
  const [employee, setEmployee] = useState("");

  const handleAddEmployee = async () => {
    setIsLoading(true);

    const formDate = new FormData();

    formDate.append("image", employee[0]);

    try {
      const { data } = await api.post("employee/create", formDate);

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div>
        <input
          onChange={(e) => setEmployee(e.target.files)}
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
      </div>
      <button
        onClick={handleAddEmployee}
        className="btn btn-primary px-2 py-1 text-white mt-1"
      >
        Add employee
      </button>
    </div>
  );
}
