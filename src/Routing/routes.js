import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Components/MainPage";
import Layout from "../Components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <MainPage /> }],
  },
]);

export default router;
