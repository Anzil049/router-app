import { Outlet, NavLink } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <NavLink to="profile">Profile</NavLink> |{" "}
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <hr />

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
