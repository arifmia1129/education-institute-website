import { useEffect, useState } from "react";
import img1 from "../assets/institute.jpg";
import api from "../utils/axios.config";
import { baseUrl } from "../utils/url";
import { Link } from "react-router-dom";

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

  return (
    <div className="my-10">
      <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500">
        <h1 className="text-xl font-bold">About Us</h1>
      </div>
      <div className="md:flex items-center">
        <div className="flex-1">
          <p className="my-5">{history?.slice(0, 300)}...</p>
          <Link to="/history" className="btn btn-primary text-white">
            Details
          </Link>
        </div>
        <div className="flex justify-center">
          <img width={300} src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
