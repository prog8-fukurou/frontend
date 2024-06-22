import type { BrochureProps, BrochurePropsExpand } from '../types/Brochure';

const BrochureSchedule = (props: { schedule: string; BorderColor: any }) => {
	return (
		<>
			<div className="w-full m-8">
				<div className="border-l-4 pl-4 text-lg font-semibold" style={props.BorderColor}>
					{props.schedule.split(' ')[0]}
				</div>
				<div className="pl-3 mt-6">{props.schedule.split(' ').slice(1).join(' ').replace(' ', '').replace('-', '')}</div>
			</div>
		</>
	);
};

const BrochureSightseeingSpot = (props: { spot: string }) => {
	return (
		<>
			<div className="mx-3">{props.spot}</div>
		</>
	);
};

export function Brochure(props: { base: BrochureProps; expand: BrochurePropsExpand }) {
	const BorderColor = {
		borderColor: props.base.background_color,
	};
	return (
		<>
			<div className="w-full h-full md:flex items-center justify-center md:border rounded-md" style={BorderColor}>
				<div className="h-full md:w-1/2 p-4">
					<div className="font-bold text-3xl text-center m-6">{props.base.travel_plan_name}</div>
					<div className="text-center m-2 text-slate-700">@ {props.base.travel_place}</div>
					<div className="text-start m-6">{props.base.travel_plan_description}</div>
					<div className="m-8 flex items-center justify-center h-[256px]">
						{props.expand.image_url !== null ? (
							<img src={props.expand.image_url} width={256} height={256} />
						) : (
							<div className="w-full h-full border flex items-center justify-center">ここには最後にイメージ画像が挿入されます</div>
						)}
					</div>
					<div className="flex p-8">
						<div className="w-1/2">
							<div className="border-l-4 pl-4 text-lg font-semibold" style={BorderColor}>
								メンバー
							</div>
							<div className="pl-3 mt-6">
								{props.expand.members.map((member, index) => {
									return (
										<div className="my-1" key={index}>
											{member.split('、').map((item, i) => (
												<span key={i}>{item}</span>
											))}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="h-full md:w-1/2 md:border-l-8 p-4">
					<div>
						{props.base.travel_schedule.map((schedule, index) => {
							return <BrochureSchedule schedule={schedule} BorderColor={BorderColor} key={index} />;
						})}
					</div>
					<div>
						<div>
							<div className="border-l-4 pl-4 text-lg font-semibold m-8" style={BorderColor}>
								おすすめ観光スポット
							</div>
						</div>
						<div className="pl-6 flex flex-wrap">
							{props.base.suggested_sightseeing_spots.map((spot, index) => {
								return <BrochureSightseeingSpot spot={spot} key={index} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
