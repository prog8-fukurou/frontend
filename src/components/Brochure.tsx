interface BrochureProps {
	background_color: string;
	travel_plan_name: string;
	travel_place: string;
	trabe_schedule: Array<string>;
	suggedted_sightseeing_spots: Array<string>;
	travel_plan_description: string;
	members: Array<string>;
	belongings: Array<string>;
}

const BrochureSchedule = (props: { schedule: string; BorderColor: any }) => {
	return (
		<>
			<div className="w-full m-8">
				<div className="border-l-4 pl-4 text-lg font-semibold" style={props.BorderColor}>
					{props.schedule.split(':')[0]}
				</div>
				<div className="pl-3 mt-6">{props.schedule.split(':')[1]}</div>
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

export function Brochure(props: BrochureProps) {
	const BorderColor = {
		borderColor: props.background_color,
	};
	return (
		<>
			<div className="w-full h-full md:flex items-center justify-center border rounded-md" style={BorderColor}>
				<div className="h-full md:w-1/2 p-4">
					<div className="font-bold text-3xl text-center m-6">{props.travel_plan_name}</div>
					<div className="text-center m-2 text-slate-700">@ {props.travel_place}</div>
					<div className="text-start m-6">{props.travel_plan_description}</div>
					<div className="m-8 flex items-center justify-center">
						<img width={256} height={256} />
					</div>
					<div className="flex p-8">
						<div className="w-1/2">
							<div className="border-l-4 pl-4 text-lg font-semibold" style={BorderColor}>
								メンバー
							</div>
							<div className="pl-3 mt-6">
								{props.members.map((member) => {
									return <div className="my-1">{member}</div>;
								})}
							</div>
						</div>
						<div className="w-1/2">
							<div className="border-l-4 pl-4 text-lg font-semibold" style={BorderColor}>
								持ち物
							</div>
							<div className="pl-3 mt-6">
								{props.belongings.map((belonging) => {
									return <div className="my-1">{belonging}</div>;
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="h-full md:w-1/2 md:border-l-8 p-4">
					<div>
						{props.trabe_schedule.map((schedule) => {
							return <BrochureSchedule schedule={schedule} BorderColor={BorderColor} />;
						})}
					</div>
					<div>
						<div>
							<div className="border-l-4 pl-4 text-lg font-semibold m-8" style={BorderColor}>
								おすすめ観光スポット
							</div>
						</div>
						<div className="pl-6 flex flex-wrap">
							{props.suggedted_sightseeing_spots.map((spot) => {
								return <BrochureSightseeingSpot spot={spot} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
