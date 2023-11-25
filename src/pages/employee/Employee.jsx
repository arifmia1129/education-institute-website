import { useEffect, useState } from "react";
import api from "../../utils/axios.config";
import toast from "react-hot-toast";
import Loading from "../../ui/shared/Loading";
import { useTranslation } from "react-i18next";

export default function Employee() {
  const [processing, setIsProcessing] = useState(false);
  const [employees, setEmployees] = useState([]);

  const { t } = useTranslation();

  const handleGetEmployee = async () => {
    setIsProcessing(true);
    try {
      const { data } = await api.get("employee");

      if (data.success) {
        setEmployees(data.data);
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
    handleGetEmployee();
  }, []);

  if (processing) {
    return <Loading />;
  }
  return (
    <div className="p-2 md:p-5">
      <h1 className="text-4xl font-bold text-primary">{t("EmployeeList")}:</h1>

      <div className="my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {employees?.map((employee) => (
          <div className="flex justify-center m-2" key={employee._id}>
            <img src={employee?.profileUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
