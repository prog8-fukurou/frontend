import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleHelp } from "lucide-react";
import { useWebSocket } from "@/WebSocketContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Start = () => {
  const { connectWebSocket } = useWebSocket();
  const navigate = useNavigate();

  const client_id = uuid();

  const handleCreateRoom = () => {
    const url = `ws://${process.env.VITE_WS_URL}/ws?client_id=${client_id}`;
    connectWebSocket(url);
    navigate("/prepare", { state: { roomId: "", clientId: client_id } });
  };

  const handleEnterRoom: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const room_id = form.get("roomId") || "";
    const url = `ws://${process.env.VITE_WS_URL}/ws?client_id=${client_id}&room_id=${room_id}`;
    connectWebSocket(url);
    navigate("/prepare", { state: { roomId: room_id, clientId: client_id } });
  };
  return (
    <div className="container h-screen flex flex-col justify-center items-center gap-16 relative">
      <div className="text-center space-y-4 text-neutral-700">
        <h1 className="text-6xl font-bold">夢の旅</h1>
        <p className="tracking-widest text-lg">ゆのたび</p>
      </div>
      <div className="flex flex-col gap-16">
        <Button
          size={"lg"}
          className="text-base bg-sky-700"
          onClick={handleCreateRoom}
        >
          新しい部屋を作る
        </Button>
        <form
          onSubmit={handleEnterRoom}
          className="flex mx-auto gap-4 items-end"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="roomId">部屋コードを入力</Label>
            <Input
              type="text"
              id="roomId"
              name="roomId"
              defaultValue={""}
              placeholder="部屋コード"
            />
          </div>
          <Button type="submit" className="bg-sky-700">
            部屋に入る
          </Button>
        </form>
      </div>
      <Button
        variant="link"
        className="text-lg absolute bottom-10 right-10 xl:bottom-20 xl:right-20 2xl:bottom-40"
      >
        <CircleHelp className="mr-2 h-4 w-4" />
        ルール説明
      </Button>
    </div>
  );
};

export default Start;
