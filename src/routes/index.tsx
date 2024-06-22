import GameRoom from "@/pages/GameRoom";
import Start from "@/pages/Start";
import Playing from "@/pages/Playing";
import ComponentTest from '@/pages/ComponentTest';
import { RouteObject } from "react-router-dom";
import MasterWait from "@/pages/MasterWait";

export const AppRoutes: RouteObject[] = [
  { path: "/", element: <Start /> },
  { path: "/playing", element: <Playing /> },
  { path: "/room", element: <GameRoom /> },
  { path: "/master", element: <MasterWait /> },
	{ path: '/debug', element: <ComponentTest /> },
];
