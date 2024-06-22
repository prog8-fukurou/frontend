import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { CircleHelp } from 'lucide-react';

const RoomA = () => {
  return (
		
    <div className="container h-screen flex flex-col justify-center items-center gap-8 relative">
      <div className="text-center space-y-4 text-neutral-700">
        <h1 className="text-3xl font-bold text-left">部屋A</h1>
				<Button className="absolute top-4 left-0 m-3 taxt-left bg-sky-700">←スタート画面に戻る</Button>
      </div>
      <div className="flex flex-col gap-4">
        <form action="" className="flex mx-auto gap-4 items-end">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="roomId">部屋コード</Label>
            <div className="flex gap-2">
              <Input type="text" id="roomId" placeholder="部屋コード" />
              <Button size={'sm'} className="text-base bg-sky-700">
                Copy
              </Button>
            </div>
          </div>
        </form>
        
        <Button size={'lg'} className="text-base bg-sky-700">
          ゲームスタート
        </Button>
        <p className="text-center text-gry-500">制限時間は１分です</p>
      </div>
      <Button variant="link" asChild className="text-lg absolute bottom-10 right-10 xl:bottom-20 xl:right-20 2xl:bottom-40">
        <Link to={'/'}>
          <CircleHelp className="mr-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};

export default RoomA;