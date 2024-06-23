import Start from '@/pages/Start';
import Playing from '@/pages/Playing';
import Vote from '@/pages/Vote';
import Prep from '@/pages/Prep';
import MasterWait from '@/pages/MasterWait';
import PlayerWait from '@/pages/PlayerWait';
import { RouteObject } from 'react-router-dom';

export const AppRoutes: RouteObject[] = [
	{ path: '/', element: <Start /> },
	{ path: '/playing', element: <Playing /> },
	{ path: '/vote', element: <Vote /> },
	{ path: '/master', element: <MasterWait /> },
	{ path: '/vote_wait', element: <PlayerWait /> },
	{ path: '/prepare', element: <Prep /> },
];
