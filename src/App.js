import { RouterProvider } from "react-router-dom";
import router from "./Routing/routes";
import MainPage from "./Components/MainPage";
import { PanierContextProvider } from "./Components/panier-context";

function App() {
  return (
    <>
      <PanierContextProvider>
        <RouterProvider router={router}>
          <MainPage />
        </RouterProvider>
      </PanierContextProvider>
    </>
  );
}

export default App;
