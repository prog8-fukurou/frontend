import { ChevronLeft } from 'lucide-react';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { CircleHelp } from 'lucide-react';

const Prep = () => {
	return (
		<div className="h-screen p-6">
			<div className="flex w-full m-12">
				<div className="w-1/3">
					<Button className="text-white bg-sky-700">
						<ChevronLeft />
						<span className="ml-3">フォーム入力に戻る</span>
					</Button>
				</div>
				<div className="w-2/3"></div>
			</div>
			<div className="w-full flex items-center justify-center">
				<div className="w-2/3 text-center font-semibold text-2xl">参加者を募集しています...</div>
				<div className="w-1/3 flex items-center">
					<div className="max-w-96 flex gap-2">
						<Input type="text" id="roomId" placeholder="部屋コード" />
						<Button size={'sm'} className="text-base bg-sky-700">
							Copy
						</Button>
					</div>
				</div>
			</div>
			<div className="h-full container flex items-center justify-center">
				<Button size={'lg'} className="text-base bg-sky-700">
					ゲームスタート
				</Button>
				<p className="text-center text-gry-500">制限時間は１分です</p>
			</div>
		</div>
	);
};

export default Prep;
