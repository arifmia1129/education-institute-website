/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";

export default function Institute() {
  const [processing, setIsProcessing] = useState(false);
  const [infos, setInfos] = useState(null);

  const { createdAt, updatedAt, __v, id, _id, ...other } = infos || {};

  const arr = Object.entries(other).map(([key, value]) => ({
    key,
    value,
  }));

  const languageCode = localStorage.getItem("langCode");

  useEffect(() => {
    const handleGetInfo = async () => {
      setIsProcessing(true);
      try {
        const { data } = await api.get(`institute`);

        if (data.success) {
          setInfos(data.data);
        }
      } catch (error) {
        // toast.error(error.response.data.message);
      } finally {
        setIsProcessing(false);
      }
    };
    handleGetInfo();
  }, [languageCode]);

  const getTitle = (title) => {
    if (title === "computerLab") {
      return "Computer Lab";
    } else if (title === "employeePresent") {
      return "Employee Present Information";
    } else if (title === "extraCurriculum") {
      return "Extra Curriculum";
    } else if (title === "history") {
      return "History";
    } else if (title === "land") {
      return "Land Information";
    } else if (title === "landOwner") {
      return "Land Owner Information";
    } else if (title === "mpo") {
      return "MPO & Nationalization";
    } else if (title === "multimediaClass") {
      return "Multimedia Class Information";
    } else if (title === "playground") {
      return "Playground Information";
    } else if (title === "teacherPresent") {
      return "Teacher Present Information";
    }
  };

  if (processing) {
    return <Loading />;
  }
  return (
    <div>
      {arr?.map((item, index) => (
        <div
          key={item._id}
          tabIndex={index}
          className="collapse collapse-arrow border border-base-300  my-5"
        >
          <div className="collapse-title text-xl font-medium">
            {getTitle(item?.key)}
          </div>
          <div className="collapse-content">
            <p>{item?.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
