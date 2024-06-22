import Start from '@/pages/Start';
import Playing from '@/pages/Playing';
import Select from '@/pages/Select';
import { RouteObject } from 'react-router-dom';

export const AppRoutes: RouteObject[] = [
	{ path: '/', element: <Start /> },
	{ path: '/playing', element: <Playing /> },
	{ path: '/select', element: <Select /> },
];
