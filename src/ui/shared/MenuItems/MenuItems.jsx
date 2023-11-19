import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function MenuItems() {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(null);

  useEffect(() => {
    let timeoutId;
    if (isOpenSubmenu) {
      timeoutId = setTimeout(() => {
        setIsOpenSubmenu(null);
      }, 20000);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpenSubmenu]);

  return (
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
        <details
          open={isOpenSubmenu === "admistration-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu("admistration-info");
          }}
        >
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
        <details
          open={isOpenSubmenu === "institute-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu("institute-info");
          }}
        >
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
        <details
          open={isOpenSubmenu === "class-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu("class-info");
          }}
        >
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
        <details
          open={isOpenSubmenu === "extra-activities-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu("extra-activities-info");
          }}
        >
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
        <details
          open={isOpenSubmenu === "student-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu("student-info");
          }}
        >
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
        <details
          open={isOpenSubmenu === "admission-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu("admission-info");
          }}
        >
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
        <details
          open={isOpenSubmenu === "exam-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu("exam-info");
          }}
        >
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
        <details
          open={isOpenSubmenu === "online-app-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu("online-app-info");
          }}
        >
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
}
