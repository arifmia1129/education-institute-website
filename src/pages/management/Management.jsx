import { useEffect, useState } from "react";
import api from "../../utils/axios.config";
import toast from "react-hot-toast";
import Loading from "../../ui/shared/Loading";
import { useTranslation } from "react-i18next";

export default function Management() {
  const [processing, setIsProcessing] = useState(false);
  const [managements, setManagements] = useState([]);

  const { t } = useTranslation();

  const handleGetManagement = async () => {
    setIsProcessing(true);
    try {
      const { data } = await api.get("management");

      if (data.success) {
        setManagements(data?.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    handleGetManagement();
  }, []);

  if (processing) {
    return <Loading />;
  }
  return (
    <div className="p-2 md:p-5">
      <h1 className="text-4xl font-bold text-primary">
        {t("managementInfo")}:
      </h1>

      <div className="my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {managements?.map((management) => (
          <div className="flex justify-center m-2" key={management._id}>
            <img src={management?.profileUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
