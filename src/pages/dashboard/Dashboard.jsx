/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../App";
import Loading from "../../ui/shared/Loading";

const Dashboard = () => {
  const activeClass =
    "text-primary flex justify-between items-center border-b-2 rounded-none border-r-4 border-r-primary";
  const inactiveClass =
    "text-primary flex justify-between items-center border-b-2 rounded-none ";

  const { t } = useTranslation();

  const { isLoggedIn, isLoading, handleLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    handleLoggedIn();
    if (!isLoggedIn && !isLoading) {
      navigate("/admin-login");
    }
  }, [isLoggedIn, navigate, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex justify-start w-full mt-5 relative">
        <label
          htmlFor="my-drawer-2"
          tabIndex={0}
          className="btn btn-primary drawer-button lg:hidden"
        >
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
      </div>
      <div className="drawer-content flex flex-col items-center p-2 md:p-5">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-[80vw] lg:w-80 bg-white z-50 md:static relative top-52">
          {/* Sidebar content here */}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-history"
            >
              <p>{t("addSchoolHistory")}</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-mission"
            >
              <p>Add Mission</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-vision"
            >
              <p>Add Vision</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-mpo"
            >
              <p>Add MPO</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-teacher"
            >
              <p>{t("addTeacherBtn")}</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-employee"
            >
              <p>{t("addEmployeeBtn")}</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-management"
            >
              <p>Add Management</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-total-employee-info"
            >
              <p>Add Total Employee Info</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-notice"
            >
              <p>Add Notice</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-application-form"
            >
              <p>Add Application Form</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-exam-info"
            >
              <p>Add Exam Info</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-student-info"
            >
              <p>Add Student Info</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/dashboard/add-cocurrilar-info"
            >
              <p>Add Cocurrilar Info</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
