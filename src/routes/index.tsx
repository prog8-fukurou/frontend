import GameRoom from "@/pages/GameRoom";
import Start from "@/pages/Start";
import Playing from "@/pages/Playing";
import Prep from '@/pages/prep';
import { RouteObject } from "react-router-dom";
import MasterWait from "@/pages/MasterWait";

export const AppRoutes: RouteObject[] = [
  { path: "/", element: <Start /> },
  { path: "/playing", element: <Playing /> },
  { path: "/room", element: <GameRoom /> },
  { path: "/master", element: <MasterWait /> },
	{ path: '/prepare', element: <Prep /> },
];
