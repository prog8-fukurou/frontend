import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Copy } from 'lucide-react';

const Prep = () => {
	return (
		<div className="h-screen w-screen flex flex-col">
			<div className="h-1/6 flex w-full p-12">
				<div className="w-1/3">
					<Button className="text-white bg-sky-700">
						<ChevronLeft />
						<span className="ml-3">フォーム入力に戻る</span>
					</Button>
				</div>
				<div className="w-2/3"></div>
			</div>
			<div className="h-1/6 w-full flex items-center justify-center">
				<div className="w-2/3 text-center font-semibold text-2xl">他のユーザーの参加を待っています... ( N / 4 )</div>
				<div className="w-1/3 flex items-center">
					<div className="max-w-96 flex gap-2 items-center">
						<Input type="text" id="roomId" readOnly className="focus-visible:ring-0 focus-visible:ring-offset-0" />
						<Button size={'sm'} className="text-base bg-sky-700">
							<span className="sr-only">Copy</span>
							<Copy className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
			<div className="h-2/3 flex items-center justify-center">
				<div className="w-96">
					<div>参加中のユーザー</div>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell className="font-medium">test user 1 ( You ) </TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">test user 2</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>
			<div className="h-1/6 container flex items-center justify-center">
				<div className="w-4/5"></div>
				<div className="w-1/5 flex items-center justify-center">
					<div>
						<p className="text-center text-gry-500 mb-2">制限時間１分</p>
						<Button size={'lg'} className="text-base bg-sky-700 tracking-widest">
							準備OK
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prep;
