import "./Navbar.css";
import MobileHeader from "./MobileHeader";
import Header from "./Header";
import MenuItems from "./MenuItems/MenuItems";

const Navbar = () => {
  return (
    <div className="bg-white shadow-[#B3C85C] shadow-lg p-2">
      <Header />
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
            className="menu menu-horizontal dropdown-content mt-3 p-5 border rounded-box bg-white w-fit overflow-y-auto hide-scrollbar dropdown h-[80vh]"
          >
            <MobileHeader />
            <div>
              <MenuItems />
            </div>
          </ul>
        </div>
        <div className="hidden lg:flex mx-auto ">
          <ul className="menu menu-horizontal px-1">
            <MenuItems />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
