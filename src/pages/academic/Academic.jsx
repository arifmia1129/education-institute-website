import { NavLink, Outlet } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

const Academic = () => {
  const activeClass =
    "text-primary flex justify-between items-center border-b-2 rounded-none border-r-4 border-r-primary";
  const inactiveClass =
    "text-primary flex justify-between items-center border-b-2 rounded-none ";
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <div className="flex justify-start w-full mt-5">
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
        <div className="min-h-screen">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 mt-72 md:mt-0 w-[80vw] lg:w-80 bg-white">
          {/* Sidebar content here */}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/academic/routine"
            >
              <p>রুটিন</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
              to="/academic/result"
            >
              <p>ফলাফল</p>
              <IoMdArrowDropright size={25} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Academic;
