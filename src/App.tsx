import { WebSocketProvider } from "./WebSocketContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "@/routes";

const router = createBrowserRouter(AppRoutes);

const App = () => {
  return (
    <>
      <WebSocketProvider>
        <RouterProvider router={router} />
      </WebSocketProvider>
    </>
  );
};

export default App;
