import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Components/MainPage";
import Layout from "../Components/Layout";
import ProductPage from "../Components/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "/:id",
        elemnt: <ProductPage />,
      },
    ],
  },
]);

export default router;
