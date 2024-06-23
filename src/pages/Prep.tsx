import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { useWebSocket } from "@/WebSocketContext";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Prep = () => {
  const location = useLocation();
  const data = location.state.roomId;
  const { messages, sendMessage } = useWebSocket();
  const [roomId, setRoomId] = useState(data);
  const [userName, setUserName] = useState("");
  const [dialog, setDialog] = useState(true);
  const hasSentMessage = useRef(false);
  const navigate = useNavigate();

  type User = {
    clientId: string;
    userName: string;
  };

  const user: User = {
    clientId: location.state.clientId,
    userName: "",
  };

  // :(コロン)で区切られているコマンド（メッセージ）をオブジェクトに格納
  const checkMessage = () => {
    const result: Record<string, string> = {};

    messages.map((message) => {
      const [key, value] = message.split(":");
      if (key === undefined || value === undefined) {
        throw new Error("Input string is not in the correct format");
      }
      result[key] = value;
    });

    return result;
  };

  const users = checkMessage()["user-join"];

  useEffect(() => {
    if (!data) {
      if (messages.length > 0) {
        const message: string = checkMessage()["room-init"];
        if (message) {
          if (typeof message === "string") {
            setRoomId(message.substring(message.indexOf(":") + 1));
          } else {
            console.log("messageは文字列ではありません");
          }
        }
      }
    }
  }, [messages, data]);

  const handleGetUserName = () => {
    setDialog(false);
    user.userName = userName;
    console.log(user);
  };

  const handleUserReady = () => {
    sendMessage(`user-ready`);
  };

  const gameStart = checkMessage()["game-start"];
  useEffect(() => {
    if (gameStart) {
      if (!hasSentMessage.current) {
        sendMessage(`user-init:${userName}`);
        console.log(userName);
        hasSentMessage.current = true; // フラグを設定して再送信を防止
        if (checkMessage()["game-start"] === user.clientId) {
          console.log("i am master");
          navigate("/master");
          return;
        } else {
          console.log("i am player");
          navigate("/playing");
          return;
        }
      } else {
        return;
      }
    }
  }, [gameStart]);

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-1/6 flex w-full p-12">
        <div className="w-1/3">
          <Button asChild variant={"link"}>
            <Link to={"/"}>
              <ChevronLeft />
              スタート画面に戻る
            </Link>
          </Button>
        </div>
        <div className="w-2/3"></div>
      </div>
      <div className="h-1/6 w-full flex items-center justify-center">
        <div className="w-2/3"></div>
        <div className="w-1/3 flex items-center">
          <div className="max-w-96 flex gap-2 items-center">
            <Input
              type="text"
              id="roomId"
              readOnly
              defaultValue={roomId}
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button size={"sm"} className="text-base bg-sky-700">
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="h-2/3 flex items-center justify-center">
        <div className="text-center font-semibold text-2xl">
          他のユーザーの参加を待っています... ( {users} / 4 )
        </div>
      </div>
      <div className="h-1/6 container flex items-center justify-center">
        <div className="w-4/5"></div>
        <div className="w-1/5 flex items-center justify-center">
          <div>
            <p className="text-center text-gry-500 mb-2">制限時間１分</p>
            <Button
              size={"lg"}
              className="text-base bg-sky-700 tracking-widest"
              onClick={handleUserReady}
              disabled={users === "4" ? false : true}
            >
              準備OK
            </Button>
          </div>
        </div>
      </div>

      {/* ページが変わって最初に表示するダイアログ */}
      <Dialog open={dialog}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          showClose={false}
        >
          <DialogHeader>
            <DialogTitle>ニックネームを入力してください</DialogTitle>
            <DialogDescription>この部屋だけで使う名前です</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid grid-cols-6 items-center gap-4 w-full">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="col-span-5"
              />
            </div>
          </div>
          <DialogFooter>
            <Button asChild variant={"link"}>
              <Link to={"/"}>戻る</Link>
            </Button>
            <Button type="submit" onClick={handleGetUserName}>
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Prep;
