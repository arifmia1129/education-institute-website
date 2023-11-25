import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";

export default function AddSchoolHistory() {
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState("");

  const handleAddHistory = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.patch("about", { history });

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
      <textarea
        onChange={(e) => setHistory(e.target.value)}
        placeholder="Write history"
        className="textarea textarea-bordered textarea-lg w-full"
      />
      <button
        onClick={handleAddHistory}
        className="btn btn-primary px-2 py-1 text-white"
      >
        Add History
      </button>
    </div>
  );
}
