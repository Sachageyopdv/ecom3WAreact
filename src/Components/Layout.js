import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main" style={{ marginTop: "75px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
