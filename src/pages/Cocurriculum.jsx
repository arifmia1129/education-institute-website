/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import api from "../utils/axios.config";
import Loading from "../ui/shared/Loading";

export default function Cocurriculum() {
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
        const { data } = await api.get(`cocurricular`);

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
    if (title === "scoutInfo") {
      return "Scout Information";
    } else if (title === "scienceClubInfo") {
      return "Science Club Information";
    } else if (title === "culturalClubInfo") {
      return "Cultural Club Information";
    } else if (title === "educationClubInfo") {
      return "Education Club Information";
    } else if (title === "ictClubInfo") {
      return "ICT Club Information";
    } else if (title === "otherActitiesInfo") {
      return "Other Activities Information";
    } else if (title === "sportsClubInfo") {
      return "Sports Club Information";
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
