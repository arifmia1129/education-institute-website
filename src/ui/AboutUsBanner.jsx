import { useEffect, useState } from "react";
import img1 from "../assets/institute.jpg";
import img2 from "../assets/student.jpg";
import api from "../utils/axios.config";
import { baseUrl } from "../utils/url";
import { Link } from "react-router-dom";

const AboutUsBanner = () => {
  const [history, setHistory] = useState("");

  const handleGetHistory = async () => {
    const { data } = await api.get(`${baseUrl}/about`);

    if (data?.success) {
      setHistory(data?.data?.history);
    }
  };

  useEffect(() => {
    handleGetHistory();
  }, []);

  return (
    <div className="my-10">
      <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500">
        <h1 className="text-xl font-bold">আমাদের সম্পর্কে</h1>
      </div>
      <div className="md:flex items-center">
        <div className="flex-1">
          <p className="my-5">{history?.slice(0, 300)}...</p>
          <Link to="/history" className="btn btn-primary text-white">
            বিস্তারিত
          </Link>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
            <img width={300} src={img1} alt="" />
            <img width={300} src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
