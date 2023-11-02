import { useTranslation } from "react-i18next";
import headSir from "../assets/head-sir.jpg";

const HeadTeacherMessage = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full border-2 card  bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={headSir} />
            </div>
          </div>
        </div>
        <p>{t("headTeacherMsg")}</p>
        <div className="text-center mt-5">
          <p className="font-bold">মোঃ শাহজাহান আলী</p>
          <p className="font-semibold">প্রধান শিক্ষক</p>
        </div>
      </div>
    </div>
  );
};

export default HeadTeacherMessage;
