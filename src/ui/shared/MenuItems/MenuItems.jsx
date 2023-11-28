import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function MenuItems() {
  const { t } = useTranslation();

  const [isOpenSubmenu, setIsOpenSubmenu] = useState(null);

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
          {t("firstPage")}
        </NavLink>
      </li>
      <li>
        <details
          open={isOpenSubmenu === "admistration-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu(
              isOpenSubmenu === "admistration-info" ? null : "admistration-info"
            );
          }}
        >
          <summary className="font-semibold  text-md my-auto">
            {t("administrationInfo")}
          </summary>
          <ul className="p-2 bg-base-100 w-52 h-52 overflow-auto hide-scrollbar">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/management"
              >
                {t("managingCommittee")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/teacher"
              >
                {t("teachersInfo")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/employee"
              >
                {t("employeesInfo")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/total-employee"
              >
                {t("totalEmployees")}
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
            setIsOpenSubmenu(
              isOpenSubmenu === "institute-info" ? null : "institute-info"
            );
          }}
        >
          <summary className="font-semibold  text-md my-auto">
            {t("instituteInfo")}
          </summary>
          <ul className="p-2 bg-base-100 w-52 h-52 overflow-auto hide-scrollbar">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/history"
              >
                {t("history")}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
                    : "font-semibold  text-md"
                }
                to="/mpo"
              >
                {t("mpoInfo")}
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
                {t("landInfo")}
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
                {t("landOwnerInfo")}
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
                {t("teachersPresentInfo")}
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
                {t("employeesPresentInfo")}
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
                {t("successStories")}
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
                {t("buildingInfo")}
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
                {t("laboratoryInfo")}
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
                {t("fieldInfo")}
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
                {t("computerLab")}
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
                {t("multimediaClass")}
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
                {t("extraCurriculumInfo")}
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
                {t("cleanExercisesInfo")}
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
          to="/teaching"
        >
          {t("teachingInfo")}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold text-md"
          }
          to="/cocurriculum"
        >
          {t("coCurriculumInfo")}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold  text-md"
          }
          to="/student-info"
        >
          {t("studentInfo")}
        </NavLink>
      </li>
      <li>
        <details
          open={isOpenSubmenu === "admission-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu(
              isOpenSubmenu === "admission-info" ? null : "admission-info"
            );
          }}
        >
          <summary className="font-semibold  text-md my-auto">
            {t("admissionInfo")}
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
                {t("admissionApplications")}
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
          to="/exam-info"
        >
          {t("examInfo")}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold  text-md"
          }
          to="/application"
        >
          {t("application")}
        </NavLink>
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
          {t("notice")}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold  text-md"
          }
          to="/photo-gallery"
        >
          {t("photoGallery")}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold  text-md"
          }
          to="/contact"
        >
          {t("contactInfo")}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-md"
              : "font-semibold text-md"
          }
          to="/e-school"
        >
          {t("eSchool")}
        </NavLink>
      </li>
    </>
  );
}
