import { useEffect, useState } from "react";
import api from "../utils/axios.config";
import { baseUrl } from "../utils/url";

const AboutUsBanner = () => {
  const [history, setHistory] = useState("");

  const langCode = localStorage.getItem("langCode");

  useEffect(() => {
    const handleGetHistory = async () => {
      const { data } = await api.get(`${baseUrl}/about/${langCode}`);

      if (data?.success) {
        setHistory(data?.data?.history);
      }
    };
    handleGetHistory();
  }, [langCode]);

  console.log(history);

  return (
    <div className="my-10">
      <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500">
        <h1 className="text-xl font-bold">About Us</h1>
      </div>
      <div className="md:flex items-center my-2">
        <div dangerouslySetInnerHTML={{ __html: history }}></div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
