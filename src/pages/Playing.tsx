'use client';

import PromptForm from '@/components/PromptForm';
import { useState } from 'react';
import { useEffect } from 'react';

export const Progress = (props: { time: any }) => {
	// SVGの描画サイズ
	const size = 150;
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
				style={{ transform: 'rotate(-90deg)' }} // そのままだと3時の方向が起点になってしまうので-90°回転させてます
			>
				<circle
					r={radius}
					cx={size / 2}
					cy={size / 2}
					stroke="#0ea5e9"
					strokeWidth="4"
					fill="#ffffff"
					strokeLinecap="round"
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					values={props.time}
				/>
				<text x={(size + 2) / 2} y={66} writing-mode={'tb'} fill="#0ea5e9">
					{props.time}
				</text>
			</svg>
		</div>
	);
};

export function Playing() {
	const [time, setTime] = useState(60);
	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="h-screen w-screen overflow-hidden">
				<div className="w-full h-full m-6 flex items-center justify-center">
					<div className="lg:flex items-center justify-center">
						<div className="w-full lg:w-1/2 flex items-center justify-center p-3 text-neutral-700">
							<div className="lg:w-[40rem]">
								<div className="text-3xl font-bold tracking-wider">個性あふれる架空旅行のしおりを生成してみよう！</div>
								<div className="mt-6 ml-12 text-lg text-start">
									<p>すべての項目を入力しなくてOK！</p>
									<p>好きなところを１つ以上入れてね</p>
								</div>
								<Progress time={time} />
							</div>
						</div>
						<div className="w-full lg:w-1/2 lg:p-[10rem] flex items-center justify-center">
							{/* プロンプトフォームコンポーネント */}
							<PromptForm />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Playing;
