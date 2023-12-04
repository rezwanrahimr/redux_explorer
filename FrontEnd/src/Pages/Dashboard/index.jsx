import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {<Outlet />}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
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
              <Link to="/dashboard/allPost">All Post</Link>
            </li>
            <li>
              <Link to="/dashboard/addForm">Add Post</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
