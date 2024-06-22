import { useWebSocket } from "@/WebSocketContext";
import { Input } from "@/components/ui/input";
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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const GameRoom = () => {
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
    <div className="container mt-20">
      <h1>部屋</h1>
      <Input
        type="text"
        readOnly
        defaultValue={roomId}
        className="focus-visible:ring-0"
      />
      <p>メンバー：{users}人</p>
      <Button onClick={handleUserReady} disabled={users === "2" ? false : true}>
        game start
      </Button>

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

export default GameRoom;
