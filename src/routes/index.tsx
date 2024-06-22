import Start from '@/pages/Start';
import Playing from '@/pages/Playing';
import Prep from '@/pages/prep';
import { RouteObject } from 'react-router-dom';

export const AppRoutes: RouteObject[] = [
	{ path: '/', element: <Start /> },
	{ path: '/playing', element: <Playing /> },
	{ path: '/prepare', element: <Prep /> },
];
