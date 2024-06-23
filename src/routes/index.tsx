import Start from '@/pages/Start';
import Playing from '@/pages/Playing';
import Vote from '@/pages/Vote';
import Prep from '@/pages/prep';
import { RouteObject } from 'react-router-dom';

export const AppRoutes: RouteObject[] = [
	{ path: '/', element: <Start /> },
	{ path: '/playing', element: <Playing /> },
	{ path: '/vote', element: <Vote /> },
	{ path: '/prepare', element: <Prep /> },
];
