import { Brochure } from '@/components/Brochure';
import { Button } from '@/components/ui/button';
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
import { BrochureProps, BrochurePropsExpand } from '@/types/Brochure';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const TimeUp = ({ prompts }: { prompts: { base: BrochureProps; expand: BrochurePropsExpand }[] }) => {
	const [time, setTime] = useState(60);
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const player_brochures = prompts;

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? player_brochures.length - 1 : prevIndex - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === player_brochures.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<>
			<div className="flex flex-col gap-16 container justify-center">
				<div>
					<div className="w-full md:flex items-center justify-center">
						<div className="hidden md:flex md:w-1/4"></div>
						<div className="w-full md:w-1/2 text-center">
							<h1 className="text-2xl font-semibold tracking-widest">タイムアップ！ どの内容でしおりを完成させる？</h1>
						</div>
						<div className="w-full md:w-1/4 text-center mt-6 md:m-0 md:text-start font-semibold text-3xl text-sky-700">
							{Math.floor(time / 60)
								.toString()
								.padStart(2, '0')}
							:{time % 60 < 10 ? `0${time % 60}` : time % 60}
						</div>
					</div>
					<div className="w-full">
						<div className="p-6 flex flex-col gap-4">
							<div className="w-full flex">
								<div className=" flex items-center justify-center">
									<Button className="mr-4 p-2" onClick={handlePrev}>
										<ChevronLeft />
									</Button>
								</div>
								<div className="w-full">
									<Brochure key={currentIndex} base={player_brochures[currentIndex].base} expand={player_brochures[currentIndex].expand} />
								</div>
								<div className=" flex items-center justify-center">
									<Button className="ml-4 p-2" onClick={handleNext}>
										<ChevronRight />
									</Button>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<Button className="bg-sky-700">このしおりで続ける</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TimeUp;
