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
                to="/management-commite"
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
                to="/teachers-information"
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
                to="/employee-information"
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
                to="/employee-information"
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
                to="/teachers-information"
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
        <details
          open={isOpenSubmenu === "class-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu(
              isOpenSubmenu === "class-info" ? null : "class-info"
            );
          }}
        >
          <summary className="font-semibold  text-md my-auto">
            {t("teachingInfo")}
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
                {t("oathInfo")}
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
                {t("classRoutinesInfo")}
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
                {t("classInfo")}
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
                {t("feeInfo")}
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
                {t("curriculumInfo")}
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
                {t("seatInfo")}
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
                {t("bookListInfo")}
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
                {t("uniformInfo")}
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
                {t("ruleInfo")}
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
            setIsOpenSubmenu(
              isOpenSubmenu === "extra-activities-info"
                ? null
                : "extra-activities-info"
            );
          }}
        >
          <summary className="font-semibold  text-md my-auto">
            {t("coCurriculumInfo")}
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
                {t("scoutInfo")}
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
                {t("scienceClub")}
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
                {t("cultureClub")}
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
                {t("educationClub")}
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
                {t("playingsClub")}
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
                {t("ICTClub")}
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
                {t("otherActivity")}
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
            setIsOpenSubmenu(
              isOpenSubmenu === "student-info" ? null : "student-info"
            );
          }}
        >
          <summary className="font-semibold  text-md my-auto">
            {t("studentInfo")}
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
                {t("searchStudentId")}
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
                {t("studentInfoByClass")}
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
                {t("stipenerInfo")}
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
                {t("talentStudentInfo")}
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
                {t("presentStudentByClass")}
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
                {t("pastTalentStudentInfo")}
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
        <details
          open={isOpenSubmenu === "exam-info"}
          onClick={(e) => {
            e.preventDefault();
            setIsOpenSubmenu(
              isOpenSubmenu === "exam-info" ? null : "exam-info"
            );
          }}
        >
          <summary className="font-semibold  text-md my-auto">
            {t("examInfo")}
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
                {t("examResults")}
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
                {t("passedStudent")}
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
                {t("failedStudent")}
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
            setIsOpenSubmenu(
              isOpenSubmenu === "online-app-info" ? null : "online-app-info"
            );
          }}
        >
          <summary className="font-semibold  text-md my-auto">
            {t("onlineApplication")}
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
                {t("studentLeaveApplication")}
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
                {t("teacherLeaveApplication")}
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
                {t("certificationApplication")}
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
                {t("recommendationApplication")}
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
          to="/gallery"
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
          to="/communicate"
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
          to="/result"
        >
          {t("eSchool")}
        </NavLink>
      </li>
    </>
  );
}
