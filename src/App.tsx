import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "@/routes";

const router = createBrowserRouter(AppRoutes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
