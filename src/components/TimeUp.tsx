import { Brochure } from "@/components/Brochure";
import { Button } from "@/components/ui/button";
import { BrochureProps, BrochurePropsExpand } from "@/types/Brochure";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useWebSocket } from "@/WebSocketContext";
import { useNavigate } from "react-router-dom";
// import html2canvas from "html2canvas";

const TimeUp = ({
  prompts,
}: {
  prompts: { base: BrochureProps; expand: BrochurePropsExpand }[];
}) => {
  const [time, setTime] = useState(60);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { sendMessage, messages } = useWebSocket();
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const player_brochures = prompts;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? player_brochures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === player_brochures.length - 1 ? 0 : prevIndex + 1
    );
  };

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

  const hasSentMessage = useRef(false);
  const navigate = useNavigate();

  const voteStart = checkMessage()["vote-start"];
  useEffect(() => {
    if (voteStart) {
      if (!hasSentMessage.current) {
        hasSentMessage.current = true; // フラグを設定して再送信を防止
        console.log("i am player");
        navigate("/master");
        return;
      } else {
        return;
      }
    }
  }, [voteStart]);

  const handleSelect = (prompt: any) => {
    console.log(prompt);
    fetch(`${process.env.VITE_API_URL}/image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        player_brochures[
          currentIndex
        ].expand.image_url = `data:image/png;base64,${data.image}`;
        // const brochure = document.querySelector("brochure");
        // if (brochure) {
        //   html2canvas(brochure).then((brochureImage)=>{
        //     sendMessage();
        //   });
        // }
        sendMessage("game-end");
        console.log("gameend");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  //dataを受け取った後
  // const shioriUI = document.querySelector("");
  // html2canvas(shioriUI).then();

  return (
    <>
      <div className="flex flex-col gap-16 container justify-center">
        <div>
          <div className="w-full md:flex items-center justify-center">
            <div className="hidden md:flex md:w-1/4"></div>
            <div className="w-full md:w-1/2 text-center">
              <h1 className="text-2xl font-semibold tracking-widest">
                タイムアップ！ どの内容でしおりを完成させる？
              </h1>
            </div>
            <div className="w-full md:w-1/4 text-center mt-6 md:m-0 md:text-start font-semibold text-3xl text-sky-700">
              {Math.floor(time / 60)
                .toString()
                .padStart(2, "0")}
              :{time % 60 < 10 ? `0${time % 60}` : time % 60}
            </div>
          </div>
          <div className="w-full">
            <div className="p-6 flex flex-col gap-4">
              <div className="w-full flex">
                <div className=" flex items-center justify-center">
                  <Button className="mr-4 p-2" onClick={handlePrev}>
                    <ChevronLeft />
                  </Button>
                </div>
                <div className="w-full brochure">
                  <Brochure
                    key={currentIndex}
                    base={player_brochures[currentIndex].base}
                    expand={player_brochures[currentIndex].expand}
                  />
                </div>
                <div className=" flex items-center justify-center">
                  <Button className="ml-4 p-2" onClick={handleNext}>
                    <ChevronRight />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  onClick={() => {
                    handleSelect(player_brochures[currentIndex].base);
                  }}
                  className="bg-sky-700"
                >
                  このしおりで続ける
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeUp;
