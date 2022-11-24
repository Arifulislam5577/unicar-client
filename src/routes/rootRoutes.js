import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Home from "../pages/Home/Home";
const rootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default rootRoutes;
