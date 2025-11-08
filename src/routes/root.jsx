import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <nav>I'm a navBar</nav>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
