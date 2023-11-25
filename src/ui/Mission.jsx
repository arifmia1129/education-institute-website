import { useEffect, useState } from "react";
import api from "../utils/axios.config";
import { baseUrl } from "../utils/url";

const Mission = () => {
  const [mission, setMission] = useState("");

  const langCode = localStorage.getItem("langCode");

  useEffect(() => {
    const handleGetMission = async () => {
      const { data } = await api.get(`${baseUrl}/mission/${langCode}`);

      if (data?.success) {
        setMission(data?.data?.mission);
      }
    };
    handleGetMission();
  }, [langCode]);
  return (
    <div className=" my-10 ">
      <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500">
        <h1 className="text-xl font-bold">Our Mission</h1>
      </div>
      <p className="my-5">{mission}</p>
    </div>
  );
};

export default Mission;
