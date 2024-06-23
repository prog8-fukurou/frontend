import { Loader2 } from 'lucide-react';

export const LoadingComponent = (props: { text: string }) => {
	return (
		<div className="flex gap-3 items-center justify-center">
			<Loader2 className="w-12 h-12 animate-spin text-sky-700" />
			<p className="text-center font-bold text-xl">{props.text}</p>
		</div>
	);
};

export default LoadingComponent;
