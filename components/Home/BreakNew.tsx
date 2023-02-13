import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {dateFormat} from "../Format_Date";
import { AllPostsNode } from "../../Types/globals-types";

function BreakNew({ data }: {data: AllPostsNode[]}) {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const prevHandler = () => {
    swiperRef.slidePrev();
  };
  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div className="w-full bg-white">
      <div className="flex max-w-[1320px] mx-auto text-center  py-4">
        <div className="w-full flex flex-wrap justify-between ">
          <div className="flex justify-center items-center md:w-[100%] bg-[#d4010e] lg:w-[20%] order-1 w-[49%] text-white lg:py-0 py-2">
            <h1 className="self-center">BREAKING NEWS</h1>
          </div>
          <div className=" lg:w-[70%] md:w-[80%] bg-white md:order-2 order-last w-full grid-cols-6 overflow-hidden flex flex-row justify-between lg:mt-0 mt-2">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper col-span-4 border-2 border-y-red-600 w-full"
              onSwiper={(swiper) => setSwiperRef(swiper)}
            >
              {data?.map((item, index: number) => (
                <SwiperSlide key={index}>
                  <div className="flex sm:ml-1 space-x-2 text-left">
                    <p className="self-center bg-[#d4010e] min-w-max text-[12px] text-white">
                      {item.categories.nodes[0].name}
                    </p>
                    <p className="self-center text-[12px] min-w-max text-white bg-black ">
                      {dateFormat(item.date)}
                    </p>
                    <h1 className=" text-slate-900 hover:text-red-600 p-2 truncate">
                      {item.title}
                    </h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="md:w-[20%] lg:w-[10%] bg-[#d4010e]  md:order-last order-2 lg:mt-0 md:mt-2  w-[49%] ">
            <div className="lg:w-[50%] md:w-[30%] w-[20%] mx-auto h-[100%] flex justify-between items-center ">
              <div
                onClick={prevHandler}
                className="w-5 h-5 rounded-full bg-white flex justify-center items-center"
              >
                <i className="fa-solid fa-angle-left blackiconcolor rounded-full"></i>
              </div>
              <div
                onClick={nextHandler}
                className="w-5 h-5 rounded-full bg-white flex justify-center items-center"
              >
                <i className="fa-solid fa-angle-right blackiconcolor bg-white rounded-full"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakNew;
