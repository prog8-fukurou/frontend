import { useWebSocket } from "@/WebSocketContext";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MasterWait = () => {
  const hasSentMessage = useRef(false);
  const navigate = useNavigate();
  const { messages } = useWebSocket();

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

  const voteStart = checkMessage()["vote-start"];
  useEffect(() => {
    if (voteStart) {
      if (!hasSentMessage.current) {
        hasSentMessage.current = true; // フラグを設定して再送信を防止
        console.log("vote start!");
        navigate("/vote");
        return;
      } else {
        return;
      }
    }
  }, [voteStart]);

  return (
    <div className="container h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-center text-4xl">
        あなたはこの部屋のゲームマスターです！
      </h1>
      <p className="text-xl">プレイヤーがゲーム中…</p>
    </div>
  );
};

export default MasterWait;
