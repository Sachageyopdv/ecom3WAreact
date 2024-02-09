import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Components/MainPage";
import Layout from "../Components/Layout";
import ProductPage from "../Components/ProductPage";
import CartPage from "../Components/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
