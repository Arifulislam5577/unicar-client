import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import SignIn from "../pages/SignIn/SignIn";
const rootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "signin", element: <SignIn /> },
      { path: "login", element: <Login /> },
      { path: "category/:brandName", element: <Category /> },
      { path: "dashboard", element: <Dashboard />, children: [] },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default rootRoutes;
