import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import PromptForm from '@/components/PromptForm';
import { useState, useEffect } from 'react';

export const Progress = (props: { time: any; color: string }) => {
	// SVGの描画サイズ
	const size = 60;
	// 現在の進捗
	const progressPercent = props.time;
	// 円の半径
	const radius = 20;
	// 円周
	const circumference = 2 * Math.PI * radius;
	// 表示割合
	const strokeDashoffset = circumference - (progressPercent / 60) * circumference;
	return (
		<div className="w-full h-full">
			<svg
				viewBox={`0 0 ${size} ${size}`}
				className="w-44 h-44 lg:w-56 lg:h-56 m-12"
				style={{ transform: 'rotate(-90deg)' }} // そのままだと3時の方向が起点になってしまうので-90°回転させてます
			>
				<circle
					r={radius}
					cx={size / 2}
					cy={size / 2}
					stroke={props.color}
					strokeWidth="4"
					fill="#ffffff"
					strokeLinecap="round"
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					values={props.time}
				/>
				<text x={(size + 1) / 2} y={(size - 24) / 2} width={50} writingMode={'tb'} fill={props.color} fontSize={10}>
					{Math.floor(props.time / 60)
						.toString()
						.padStart(2, '0')}
					:{props.time % 60 < 10 ? `0${props.time % 60}` : props.time % 60}
				</text>
			</svg>
		</div>
	);
};

export function Playing() {
	const [time, setTime] = useState(60);
	const [preview, setPreview] = useState(false);
	const [prompt, setPrompt] = useState();
	const primaryColor = '#0369A1';
	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	const changePreview = () => {
		setPreview(!preview);
	};
	const changePrompt = (prompt: any) => {
		fetch(`${process.env.VITE_API_URL}/prompt`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(prompt),
		})
			.then((response) => response.json())
			.then((data) => {
				setPrompt(data);
				setPreview(true);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<>
			<div className="lg:h-screen w-screen lg:overflow-hidden p-6">
				{time < 0 ? (
					<>ゲーム終了時の画面</>
				) : (
					<>
						{preview ? (
							<>
								<div className="flex w-full m-12">
									<div className="w-1/3">
										<Button onClick={changePreview} className="text-white bg-sky-700">
											<ChevronLeft />
											<span className="ml-3">フォーム入力に戻る</span>
										</Button>
									</div>
									<div className="w-1/3 text-center font-bold text-4xl text-sky-700">
										{Math.floor(time / 60)
											.toString()
											.padStart(2, '0')}
										:{time % 60 < 10 ? `0${time % 60}` : time % 60}
									</div>
									<div className="w-1/3"></div>
								</div>
								<div className="w-full flex items-center justify-center">{prompt}</div>
							</>
						) : (
							<div className="w-full h-full flex items-center justify-center">
								<div className="lg:flex container items-center justify-center">
									<div className="w-full lg:w-1/2 flex items-center justify-center lg:p-3 text-neutral-700">
										<div className="lg:w-[40rem]">
											<div className="text-3xl font-bold tracking-wider">個性あふれる架空旅行のしおりを生成してみよう！</div>
											<div className="mt-6 ml-12 text-lg text-start">
												<p>すべての項目を入力しなくてOK！</p>
												<p>好きなところを１つ以上入れてね</p>
											</div>
											<div className="w-full h-full hidden lg:flex items-center justify-center">
												<Progress time={time} color={primaryColor} />
											</div>
											<div className="block lg:hidden w-full m-6 text-center font-bold text-4xl text-sky-700">
												{Math.floor(time / 60)
													.toString()
													.padStart(2, '0')}
												:{time % 60 < 10 ? `0${time % 60}` : time % 60}
											</div>
											<button onClick={changePreview}>デバッグ用</button>
										</div>
									</div>
									<div className="w-full lg:w-1/2 p-6 flex items-center justify-center">
										{/* プロンプトフォームコンポーネント */}
										<PromptForm changePrompt={changePrompt} color={primaryColor} />
									</div>
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</>
	);
}

export default Playing;
