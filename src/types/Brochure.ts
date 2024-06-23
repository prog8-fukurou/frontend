export interface BrochureProps {
	background_color: string;
	travel_plan_name: string;
	travel_place: string;
	travel_schedule: Array<string>;
	suggested_sightseeing_spots: Array<string>;
	travel_plan_description: string;
	belongings: Array<string>;
}

export interface BrochurePropsExpand {
	members: Array<string>;
	image_url: string | null;
}
