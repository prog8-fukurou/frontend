import { Brochure } from '@/components/Brochure';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
//import type { BrochureProps, BrochurePropsExpand } from '@/types/Brochure';

export const Select = () => {
	// ユーザーが作成したしおりデータを格納してる場所がわからない
	const brochures = [
		{
			base: {
				background_color: '#0369A1',
				travel_plan_name: '旅行プラン名1',
				travel_place: '旅行先',
				travel_schedule: ['日程 1', '日程 2', '日程 3'],
				suggested_sightseeing_spots: ['観光地 1', '観光地 2', '観光地 3'],
				travel_plan_description: '旅行プランの説明',
				belongings: ['持ち物 1', '持ち物 2', '持ち物 3'],
			},
			expand: {
				members: ['メンバー 1', 'メンバー 2', 'メンバー 3'],
				image_url: 'https://example.com/image.jpg',
			},
		},
		{
			base: {
				background_color: '#0369A1',
				travel_plan_name: '旅行プラン名2',
				travel_place: '旅行先',
				travel_schedule: ['日程 1', '日程 2', '日程 3'],
				suggested_sightseeing_spots: ['観光地 1', '観光地 2', '観光地 3'],
				travel_plan_description: '旅行プランの説明',
				belongings: ['持ち物 1', '持ち物 2', '持ち物 3'],
			},
			expand: {
				members: ['メンバー 1', 'メンバー 2', 'メンバー 3'],
				image_url: 'https://example.com/image.jpg',
			},
		},
		{
			base: {
				background_color: '#0369A1',
				travel_plan_name: '旅行プラン名3',
				travel_place: '旅行先',
				travel_schedule: ['日程 1', '日程 2', '日程 3'],
				suggested_sightseeing_spots: ['観光地 1', '観光地 2', '観光地 3'],
				travel_plan_description: '旅行プランの説明',
				belongings: ['持ち物 1', '持ち物 2', '持ち物 3'],
			},
			expand: {
				members: ['メンバー 1', 'メンバー 2', 'メンバー 3'],
				image_url: 'https://example.com/image.jpg',
			},
		},
	];
	return (
		<>
			<div className="md:flex">
				<div className="w-full md:w-1/2 flex items-center justify-center">好きなしおりを１つ選んでください</div>
				<div className="w-full md:w-1/2">
					<div className="p-6 flex flex-col gap-4">
						{brochures.map((brochure, index) => {
							return (
								<Dialog>
									<DialogTrigger asChild>
										<Button variant="outline" className="w-full h-44">
											<div className="flex flex-col gap-3 ">
												<div>{brochure.base.travel_plan_name}</div>
												<div>{brochure.base.travel_place}</div>
											</div>
										</Button>
									</DialogTrigger>
									<DialogContent>
										<Brochure base={brochure.base} expand={brochure.expand} key={index} />;
									</DialogContent>
								</Dialog>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Select;
