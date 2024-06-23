import { Brochure } from "@/components/Brochure";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Vote = () => {
  const [time, setTime] = useState(60);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const player_brochures = [
    {
      base: {
        background_color: "#0369A1",
        travel_plan_name: "旅行プラン名1",
        travel_place: "旅行先",
        travel_schedule: ["日程 1", "日程 2", "日程 3"],
        suggested_sightseeing_spots: ["観光地 1", "観光地 2", "観光地 3"],
        travel_plan_description: "旅行プランの説明",
        belongings: ["持ち物 1", "持ち物 2", "持ち物 3"],
      },
      expand: {
        members: ["メンバー 1", "メンバー 2", "メンバー 3"],
        image_url: "https://example.com/image.jpg",
      },
    },
    {
      base: {
        background_color: "#0369A1",
        travel_plan_name: "旅行プラン名2",
        travel_place: "旅行先",
        travel_schedule: ["日程 1", "日程 2", "日程 3"],
        suggested_sightseeing_spots: ["観光地 1", "観光地 2", "観光地 3"],
        travel_plan_description: "旅行プランの説明",
        belongings: ["持ち物 1", "持ち物 2", "持ち物 3"],
      },
      expand: {
        members: ["メンバー 1", "メンバー 2", "メンバー 3"],
        image_url: "https://example.com/image.jpg",
      },
    },
    {
      base: {
        background_color: "#0369A1",
        travel_plan_name: "旅行プラン名3",
        travel_place: "旅行先",
        travel_schedule: ["日程 1", "日程 2", "日程 3"],
        suggested_sightseeing_spots: ["観光地 1", "観光地 2", "観光地 3"],
        travel_plan_description: "旅行プランの説明",
        belongings: ["持ち物 1", "持ち物 2", "持ち物 3"],
      },
      expand: {
        members: ["メンバー 1", "メンバー 2", "メンバー 3"],
        image_url: "https://example.com/image.jpg",
      },
    },
  ];

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

  return (
    <div className="flex flex-col gap-16 container justify-center h-screen">
      <div className="md:flex items-center justify-center">
        <div className="w-full md:w-1/4"></div>
        <div className="w-full md:w-1/2 text-center">
          <div className="text-2xl font-semibold tracking-widest">
            どのしおりに投票しますか？
          </div>
        </div>
        <div className="w-full text-center mt-6 md:m-0 md:w-1/4 md:text-start font-semibold text-3xl text-sky-700">
          {Math.floor(time / 60)
            .toString()
            .padStart(2, "0")}
          :{time % 60 < 10 ? `0${time % 60}` : time % 60}
        </div>
      </div>
      <div className="w-full flex">
        <div className=" flex items-center justify-center">
          <Button className="mr-4 p-2" onClick={handlePrev}>
            <ChevronLeft />
          </Button>
        </div>
        <div className="w-full">
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
        <Button className="bg-sky-700">このしおりに投票する</Button>
      </div>
    </div>
  );
};

export default Vote;
