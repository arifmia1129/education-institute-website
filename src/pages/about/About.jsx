import { useEffect, useState } from "react";
import api from "../../utils/axios.config";
import { baseUrl } from "../../utils/url";

const AboutUs = () => {
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
    <div>
      <div className="relative">
        <div className="relative h-[30vh] mx-auto  w-[95vw] bg-[url('/src/assets/institute.jpg')] bg-cover bg-no-repeat">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="h-full w-full flex justify-center  md:p-20 items-center">
              <div>
                <h1 className="text-5xl text-white font-bold pl-5 text-center">
                  আমাদের সম্পর্কে
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="my-5">{history}</p>
    </div>
  );
};

export default AboutUs;
