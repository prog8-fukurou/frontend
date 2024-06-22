import { Brochure } from '@/components/Brochure';

export const ComponentTest = () => {
	return (
		<div className="container h-screen flex flex-col justify-center items-center gap-16 relative p-8">
			<Brochure
				background_color="#0369A1"
				travel_plan_name="アロエヨーグルトの旅"
				travel_place="ヨーグルトランド"
				trabe_schedule={[
					'1日目: ヨーグルトランド国際空港到着、ホテルチェックイン',
					'2日目: ヨーグルトの丘観光、アロエ農園見学',
					'3日目: アロエヨーグルト工場見学ツアー',
					'4日目: ヨーグルトビーチでリフレッシュ',
					'5日目: ヨーグルトランドの伝統工芸品買い物',
					'6日目: ヨーグルトランド国際空港出発',
				]}
				suggedted_sightseeing_spots={['ヨーグルトの泉', 'アロエキングダム', 'ヨーグルト博物館', 'ヨーグルトの森', 'ヨーグルトランド大聖堂']}
				travel_plan_description="ヨーグルトとアロエの生産が盛んな架空の国「ヨーグルトランド」を6日間で周遊するプランです。ヨーグルトランドの自然、文化、食を存分に堪能できます。アロエヨーグルトの本場で、心身ともにリフレッシュできる旅となることでしょう。"
				members={['アロエちゃん', 'ヨーグルトくん', 'ヨーグルトちゃん']}
				belongings={['水着', '日焼け止め', '帽子', 'サングラス', 'カメラ']}
				image_url={null}
			/>
		</div>
	);
};

export default ComponentTest;
