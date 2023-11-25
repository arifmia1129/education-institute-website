import { useEffect, useState } from "react";
import api from "../utils/axios.config";
import { baseUrl } from "../utils/url";

const Vision = () => {
  const [mission, setVision] = useState("");

  const langCode = localStorage.getItem("langCode");

  useEffect(() => {
    const handleGetVision = async () => {
      const { data } = await api.get(`${baseUrl}/vision/${langCode}`);

      if (data?.success) {
        setVision(data?.data?.vision);
      }
    };
    handleGetVision();
  }, [langCode]);
  return (
    <div className=" my-10">
      <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500">
        <h1 className="text-xl font-bold">Our Vision</h1>
      </div>
      <p className="my-5">{mission}</p>
    </div>
  );
};

export default Vision;
