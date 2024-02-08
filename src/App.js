import { RouterProvider } from "react-router-dom";
import router from "./Routing/routes";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <MainPage />
      </RouterProvider>
    </>
  );
}

export default App;
