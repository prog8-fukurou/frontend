import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { CircleHelp } from 'lucide-react';

const Start = () => {
	return (
		<div className="container h-screen flex flex-col justify-center items-center gap-16 relative">
			<div className="text-center space-y-4 text-neutral-700">
				<h1 className="text-6xl font-bold">夢の旅</h1>
				<p className="tracking-widest text-lg">ゆのたび</p>
			</div>
			<div className="flex flex-col gap-16">
				<Button size={'lg'} className="text-base">
					新しい部屋を作る
				</Button>
				<form action="" className="flex mx-auto gap-4 items-end">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="roomId">部屋コードを入力</Label>
						<Input type="text" id="roomId" placeholder="部屋コード" />
					</div>
					{/* TODO: inputが空の時はdisabled状態にする */}
					<Button type="submit">部屋に入る</Button>
				</form>
			</div>
			<Button variant="link" asChild className="text-lg absolute bottom-10 right-10 xl:bottom-20 xl:right-20 2xl:bottom-40">
				<Link to={'/'}>
					<CircleHelp className="mr-2 h-4 w-4" />
					ルール説明
				</Link>
			</Button>
		</div>
	);
};

export default Start;
