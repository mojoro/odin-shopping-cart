import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

const Root = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
