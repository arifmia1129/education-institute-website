import { useEffect, useState } from "react";
import api from "../../utils/axios.config";
import { baseUrl } from "../../utils/url";
import PageHeader from "../../components/PageHeader";

const AboutUs = () => {
  const [history, setHistory] = useState("");

  const languageCode = localStorage.getItem("langCode");

  useEffect(() => {
    const handleGetHistory = async () => {
      const { data } = await api.get(`${baseUrl}/about/${languageCode}`);

      if (data?.success) {
        setHistory(data?.data?.history);
      }
    };
    handleGetHistory();
  }, [languageCode]);
  return (
    <div>
      <PageHeader title={"আমাদের সম্পর্কে"} />
      <p className="my-5">{history}</p>
    </div>
  );
};

export default AboutUs;
