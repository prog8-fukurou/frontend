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
				<text x={(size + 2) / 2} y={63} writing-mode={'tb'} fill="#0ea5e9" fontSize={10}>
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
	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	const changePreview = () => {
		setPreview(!preview);
	};

	return (
		<>
			<div className="h-screen w-screen overflow-hidden">
				{preview ? (
					<>
						<div className="flex w-full m-12">
							<div className="w-1/3">
								<button onClick={changePreview} className="flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
									</svg>
									<span className="ml-3">フォーム入力に戻る</span>
								</button>
							</div>
							<div className="w-1/3 text-center font-bold text-4xl">
								{Math.floor(time / 60)
									.toString()
									.padStart(2, '0')}
								:{time % 60 < 10 ? `0${time % 60}` : time % 60}
							</div>
							<div className="w-1/3"></div>
						</div>
						<div className="w-full flex items-center justify-center">ここにしおりのコンポーネントを入れる</div>
					</>
				) : (
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
									<button onClick={changePreview}>デバッグ用</button>
								</div>
							</div>
							<div className="w-full lg:w-1/2 lg:p-[10rem] flex items-center justify-center">
								{/* プロンプトフォームコンポーネント */}
								<PromptForm />
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default Playing;
