import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Image, Typography } from "antd";
import { useEffect, useState } from "react";
import { reviewData } from "../../data";
//@ts-ignore
import React from "react";

export default function Reviews() {
  const [mobile, setMobile] = useState(window.innerWidth < 800);

  const handleResize = () => {
    setMobile(window.innerWidth < 800);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full px-5 py-20 bg-black">
      <Typography
        children="21,000+ Reviews For A Reason"
        typeof="h1"
        className="text-bold text-white text-5xl font-Lora text-center"
      />
      <div className="pt-10 relative">
        <Swiper
          className="mySwiper"
          freeMode={true}
          navigation
          spaceBetween={30}
          slidesPerView={mobile ? 1 : 2}
        >
          {reviewData.map((item) => (
            <SwiperSlide
              key={item.id}
              className="border h-full border-gray-300"
            >
              <div className="grid grid-cols-2">
                <div className="col-span-1 flex flex-col justify-between p-5">
                  <Typography
                    children={item.title}
                    typeof="p"
                    className="text-white text-sm"
                  />
                  <Typography
                    children={item.name}
                    typeof="p"
                    className="text-white font-bold"
                  />
                </div>
                <div className="col-span-1 h-full w-full flex">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
