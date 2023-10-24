import { Link, NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import img50 from "../../assets/50.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
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

  const menuItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold  text-md"
          }
          to="/"
        >
          প্রথম পাতা
        </NavLink>
      </li>
      <li>
        <details>
          <summary className="font-semibold  text-md my-auto">
            প্রশাসনিক তথ্য
          </summary>
          <ul className="p-2 bg-base-100 w-52 h-52 overflow-auto hide-scrollbar">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/management-commite"
              >
                ব্যবস্থাপনা কমিটি
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/teachers-information"
              >
                শিক্ষকদের তথ্য
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                কর্মচারীদের তথ্য
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                অনুমোদিত এবং পূরণকৃত শিক্ষক/কর্মচারীর পদের সংখ্যা
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="font-semibold  text-md my-auto">
            প্রাতিষ্ঠানিক তথ্য
          </summary>
          <ul className="p-2 bg-base-100 w-52 h-52 overflow-auto hide-scrollbar">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/management-commite"
              >
                ইতিহাস ও পরিচিতি
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/teachers-information"
              >
                এমপি ও জাতীয়করণের তথ্য
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                ভূমির তপসিল
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                ভূমি মালিকানা সংক্রান্ত তথ্য
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                শিক্ষক উপস্থিতি
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                কর্মচারী উপস্থিতি
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                সফলতার গল্প
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                ভবনের তথ্য
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                গবেষণাগার
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                খেলার মাঠ
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                কম্পিউটার ল্যাব
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                মাল্টিমিডিয়া ক্লাস রুম
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                ক্রীড়া ও সাংস্কৃতিক কার্যক্রম
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                পরিচ্ছন্নতা, শরীরচর্চা এবং স্যানিটেশন
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="font-semibold  text-md my-auto">
            পাঠদান ও স্বীকৃতি প্রদান সংক্রান্ত তথ্য
          </summary>
          <ul className="p-2 bg-base-100 w-52 h-52 overflow-auto hide-scrollbar">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/management-commite"
              >
                শপথ বাক্য
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/teachers-information"
              >
                ক্লাস রুটিন
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                শ্রেণি কক্ষ
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                ফি প্রদান
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                পাঠাসূচি
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                আসন সংখ্যা
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                বই এর তালিকা
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                ইউনিফর্ম
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                আচরণ বিধি
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                পাঠদানের অনুমতি ও স্বীকৃতি
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="font-semibold  text-md my-auto">
            সহপাঠ কার্যক্রম
          </summary>
          <ul className="p-2 bg-base-100 w-52 h-52 overflow-auto hide-scrollbar">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/management-commite"
              >
                স্কাউট
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/teachers-information"
              >
                বিজ্ঞান ক্লাব
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                সাংস্কৃতিক ক্লাব
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                শিক্ষা ক্লাব
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                খেলাধুলা ক্লাব
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                আইসিটি ক্লাব
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                অন্যান্য কার্যক্রম
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="font-semibold  text-md my-auto">
            ছাত্র ছাত্রীদের তথ্য
          </summary>
          <ul className="p-2 bg-base-100 w-52 h-52 overflow-auto hide-scrollbar">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/management-commite"
              >
                শিক্ষার্থী আইডি অনুসন্ধান
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/teachers-information"
              >
                ক্লাস ভিত্তিক শিক্ষার্থীদের তথ্য
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                উপবৃত্তি প্রাপ্ত শিক্ষার্থীদের তথ্য
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                মেধাবী শিক্ষার্থীদের তথ্য
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                ক্লাস ভিত্তিক শিক্ষার্থীর উপস্থিতি
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee-information"
              >
                প্রাক্তন মেধাবী শিক্ষার্থীদের তথ্য
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="font-semibold  text-md my-auto">
            ভর্তি সংক্রান্ত তথ্য
          </summary>
          <ul className="p-2 bg-base-100 w-52 h-52 overflow-auto hide-scrollbar">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/admission"
              >
                ভর্তি আবেদন - ২০২৪
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="font-semibold  text-md my-auto">
            পরীক্ষা সম্পর্কিত তথ্য
          </summary>
          <ul className="p-2 bg-base-100 w-52 h-52 overflow-auto hide-scrollbar">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/admission"
              >
                পরীক্ষা ফলাফল (আইডি অনুসন্ধান দিয়ে রেজাল্ট)
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/admission"
              >
                পাশকৃত শিক্ষার্থীদের তথ্য
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/admission"
              >
                অকৃতকার্য শিক্ষার্থীদের তথ্য
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="font-semibold  text-md my-auto">
            অনলাইন আবেদন
          </summary>
          <ul className="p-2 bg-base-100 w-52 h-52 overflow-auto hide-scrollbar">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/admission"
              >
                ছুটির জন্য আবেদন (ছাত্র/ছাত্রী)
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/admission"
              >
                ছুটির জন্য আবেদন (শিক্ষক)
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/admission"
              >
                প্রত্যয়নের জন্য আবেদন
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/admission"
              >
                প্রসংশা পত্রের জন্য আবেদন
              </NavLink>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold  text-md"
          }
          to="/notice"
        >
          নোটিশ
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold  text-md"
          }
          to="/gallery"
        >
          ফটো গ্যালারি
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold  text-md"
          }
          to="/communicate"
        >
          যোগাযোগ
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold text-md"
          }
          to="/result"
        >
          ই-স্কুল
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="flex mt-2 justify-end">
        <div>
          <Link to="/admin-login">
            <button className="btn btn-primary text-white btn-sm">
              {t("loginBtnTxt")}
            </button>
          </Link>
          <select
            value={currentLangCode}
            onChange={onChangeLang}
            className="select select-sm  h-1 w-fit select-bordered  max-w-xs mx-2"
          >
            <option value="bn">বাংলা</option>
            <option value="en">ENGLISH</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <Link
          className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center col-span-2"
          to="/"
        >
          <div className="flex items-center">
            <img
              width={60}
              height={60}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/800px-Government_Seal_of_Bangladesh.svg.png"
              alt=""
            />
            <div className="mx-2">
              <h1 className="font-bold  md:text-3xl text-primary">
                {t("name")}
              </h1>
            </div>
          </div>
          <img width={200} height={150} src={img50} alt="" />
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-5">
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
            className="input input-bordered input-sm w-full max-w-sm"
          />
        </div>
      </div>
      <div className="navbar">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 rounded-box w-52 bg-white"
          >
            {menuItems}
          </ul>
        </div>
        <div className="hidden lg:flex mx-auto">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
