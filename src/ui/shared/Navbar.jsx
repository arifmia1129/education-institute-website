import { Link, NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/"
        >
          হোম
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/about-us"
        >
          আমাদের সম্পর্কে
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/event"
        >
          ইভেন্ট
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/news"
        >
          নিউজ
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
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
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/academic/routine"
        >
          একাডেমিক
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/office/head-teacher"
        >
          অফিস ও প্রশাসন
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-white">
      <div className="flex justify-between items-center">
        <Link className="my-auto mt-5 flex items-center" to="/">
          <img
            width={60}
            height={60}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/800px-Government_Seal_of_Bangladesh.svg.png"
            alt=""
          />
          <div className="mx-2">
            <h1 className="font-bold  md:text-3xl text-primary">
              কোচাশহর দ্বি-মুখী উচ্চ বিদ্যালয়
            </h1>
            <h1 className="font-bold  md:text-3xl text-red-500">
              Kochashar BL High School
            </h1>
          </div>
        </Link>
        <img
          className="h-8 w-8 md:h-16 md:w-20"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Mujib_100_Logo.svg/1200px-Mujib_100_Logo.svg.png"
          alt=""
        />
      </div>
      <div className="navbar">
        <div className="navbar-start">
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
        </div>
        <div className="navbar-center flex justify-center">
          <div className=" hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
        </div>
        <div className="navbar-end my-auto">
          <a
            href="https://www.facebook.com/mdarif1109"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} color="blue" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=+arif.vtti@gmail.com"
          >
            <MdEmail size={30} className="text-blue-800 mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
