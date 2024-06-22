import Start from '@/pages/Start';
import Playing from '@/pages/Playing';
import ComponentTest from '@/pages/ComponentTest';
import { RouteObject } from 'react-router-dom';

export const AppRoutes: RouteObject[] = [
	{ path: '/', element: <Start /> },
	{ path: '/playing', element: <Playing /> },
	{ path: '/debug', element: <ComponentTest /> },
];
