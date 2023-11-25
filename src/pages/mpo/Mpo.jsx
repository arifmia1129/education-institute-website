import { useEffect, useState } from "react";
import api from "../../utils/axios.config";
import { baseUrl } from "../../utils/url";
import PageHeader from "../../components/PageHeader";

const Mpo = () => {
  const [mpo, setMpo] = useState("");

  const languageCode = localStorage.getItem("langCode");

  useEffect(() => {
    const handleGetMpo = async () => {
      const { data } = await api.get(`${baseUrl}/mpo/${languageCode}`);

      if (data?.success) {
        setMpo(data?.data?.mpo);
      }
    };
    handleGetMpo();
  }, [languageCode]);
  return (
    <div className="my-10">
      <PageHeader title={"MPO Information"} />
      <p className="my-5">{mpo}</p>
    </div>
  );
};

export default Mpo;
