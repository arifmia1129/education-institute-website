import { Link, NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import img50 from "../../assets/50.png";

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
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/gallery"
        >
          গ্যালারি
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
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
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/result"
        >
          রেজাল্ট
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/student-unique-id"
        >
          স্টুডেন্ট আইডি অনুসন্ধান
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/download"
        >
          প্রয়োজনীয় ডাউনলোড
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 text-primary w-fit border-b-primary font-bold rounded-none  text-lg"
              : "font-semibold  text-lg"
          }
          to="/admission"
        >
          ভর্তি ফরম
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="flex mt-2 justify-end">
        <Link to="/admin-login">
          <button className="btn btn-primary text-white btn-sm">লগইন</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <Link
          className="my-auto mt-5 grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center col-span-2"
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
                কুলাঘাট উচ্চ বিদ্যালয়
              </h1>
              <h1 className="font-bold  md:text-3xl text-red-500">
                KULAGHAT HIGH SCHOOL
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
            placeholder="সার্চ করুন"
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
