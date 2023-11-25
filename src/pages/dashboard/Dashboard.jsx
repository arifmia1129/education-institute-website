import { useContext, useEffect } from "react";
import { AuthContext } from "../../App";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Loading from "../../ui/shared/Loading";

export default function Dashboard() {
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
      <label
        htmlFor="my-drawer-2"
        className="btn btn-primary drawer-button lg:hidden"
      >
        Open drawer
      </label>
      <div className="drawer-content p-2">
        {/* Page content here */}

        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to="add-history">Add School History</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
