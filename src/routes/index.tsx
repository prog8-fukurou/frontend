import Start from "@/pages/Start";
import Playing from "@/pages/Playing";
import Prep from "@/pages/Prep";
import { RouteObject } from "react-router-dom";
import MasterWait from "@/pages/MasterWait";

export const AppRoutes: RouteObject[] = [
  { path: "/", element: <Start /> },
  { path: "/playing", element: <Playing /> },
  { path: "/master", element: <MasterWait /> },
  { path: "/prepare", element: <Prep /> },
];
