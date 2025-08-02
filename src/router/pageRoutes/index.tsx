import { Outlet } from "react-router-dom";
import HomePage from "../../pages/HomePage";

const Layout = () => <Outlet />;

export const pageRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: "",
      element: <HomePage />
    }
  ]
};