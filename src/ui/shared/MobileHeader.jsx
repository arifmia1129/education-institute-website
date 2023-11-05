import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import img50 from "../../assets/50.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function MobileHeader() {
  const [currentLangCode, setCurrentLangCode] = useState("");

  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    JSON.stringify(localStorage.setItem("langCode", e.target.value));
    setCurrentLangCode(e.target.value);
  };

  const getCurrentLangCode = () => {
    setCurrentLangCode(localStorage.getItem("langCode"));
    i18n.changeLanguage(localStorage.getItem("langCode"));
  };

  useEffect(() => {
    getCurrentLangCode();
  }, []);
  return (
    <div>
      <div className="mt-2 justify-end">
        <div className="flex">
          <Link to="/admin-login">
            <button className="btn btn-primary text-white btn-sm m-1">
              {t("loginBtnTxt")}
            </button>
          </Link>
          <select
            value={currentLangCode}
            onChange={onChangeLang}
            className="select select-sm  h-1 w-fit select-bordered  max-w-xs m-1"
          >
            <option value="bn">বাংলা</option>
            <option value="en">ENGLISH</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <img width={200} height={150} src={img50} alt="" />
        <div className=" grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5 ">
          <div className="my-auto flex items-center">
            <a
              href="https://web.facebook.com/Kulaghat.High.School"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={25} className="text-blue-500 mx-1" />
            </a>
            <a
              href="https://web.facebook.com/Kulaghat.High.School"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={25} className="text-blue-500 mx-1" />
            </a>
            <a
              href="https://web.facebook.com/Kulaghat.High.School"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} className="text-blue-500 mx-1" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+kulaghathighschool.1966@gmail.com"
            >
              <MdEmail size={25} className="text-orange-500 mx-1" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+kulaghathighschool.1966@gmail.com"
            >
              <AiFillYoutube size={25} className="text-red-500 mx-1" />
            </a>
          </div>
          <input
            type="text"
            placeholder={t("searchText")}
            className="input input-bordered input-sm w-full max-w-sm my-2"
          />
        </div>
      </div>
    </div>
  );
}
