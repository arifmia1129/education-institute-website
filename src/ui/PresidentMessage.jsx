import { useTranslation } from "react-i18next";
import president from "../assets/president.jpg";
const PresidentMessage = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full border-2 card  bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={president} />
            </div>
          </div>
        </div>
        <p>{t("presidentMsg")}</p>
        <div className="text-center mt-5">
          <p className="font-bold">{t("presidentName")}</p>
          <p className="font-semibold">{t("presidentDesignation")}</p>
        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;
