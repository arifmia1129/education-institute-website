import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";

export default function AddMission() {
  const [isLoading, setIsLoading] = useState(false);
  const [mission, setMission] = useState("");

  const handleAddMission = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.patch("mission", { mission });

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
        onChange={(e) => setMission(e.target.value)}
        placeholder="Write mission"
        className="textarea textarea-bordered textarea-lg w-full"
      />
      <button
        onClick={handleAddMission}
        className="btn btn-primary px-2 py-1 text-white"
      >
        Add Mission
      </button>
    </div>
  );
}
