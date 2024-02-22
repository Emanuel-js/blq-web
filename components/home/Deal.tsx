import React, { useCallback, useRef } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Mousewheel } from "swiper/modules";
import { Swiper } from 'swiper';
import { BiShare } from "react-icons/bi";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";



const DealList: React.FC<{ deals: any[],title:string,subtitle:string }> = ({ deals,title,subtitle }) => {
  const changeColor = (deal: any) => {
    const parts = deal.description.split(/(\d+%)/g);
    return parts.map((part: any, index: any) =>
      /\d+%/.test(part) ? (
        <span key={index} style={{ color: "red" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const swiperRef = useRef<any | null>(null);

 
  const handlePrev = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-10 w-full p-10 md:p-0">
  <div className="flex flex-col justify-between w-full md:w-[20%] md:max-w-[250px]">
    <div className="flex flex-col ">
      <h1 className="text-[24px]">{title}</h1>
      <div className="text-[#999] text-[12px]">{subtitle}</div>
    </div>

    <div className="lg:flex lg:gap-10 items-center hidden md:flex">
      <MdOutlineKeyboardArrowLeft
        onClick={handlePrev}
        className="cursor-pointer"
        size={25}
      />
      <MdKeyboardArrowRight
        onClick={handleNext}
        className="cursor-pointer"
        size={25}
      />
    </div>
  </div>


  <SwiperComponent
    ref={swiperRef as any}
    spaceBetween={7}
    className="w-full flex"
    slidesPerView={2}
    breakpoints={{
      890: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }}
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      disabledClass: "swiper-button-disabled", 
    }}
    onNavigationPrev={(swiper) => {
      console.log("Prev");
    }}
    onNavigationNext={(swiper) => {
      console.log("Next");
    }}
    modules={[Navigation, Pagination, Mousewheel]}
  >
    {deals.map((deal, index) => (
      <SwiperSlide key={index}>
        {deal.type === "BUNDLE" && (
          <div>
         
            <div className="relative">
            <Image
  src={deal.thumbnail.uri}
  alt="deal"
  className="rounded-lg w-full h-auto"
  layout="responsive"
  width={500} // replace with your desired width
  height={300} // replace with your desired height
/>
              <div className="absolute bottom-0 left-0 p-4">
                <button className="bg-[#009E8A] text-white py-1 px-1 rounded flex items-center">
                  <BiShare size={10} />
                  <div>리턴 가능</div>
                </button>
              </div>
            </div>
            <p className="text-[14px]">{deal.title}</p>
            {changeColor(deal)}
            <div className="flex gap-2 items-center text-[12px]">
              <IoIosStar />
              {deal.rating}
            </div>
          </div>
        )}
      </SwiperSlide>
    ))}
  </SwiperComponent>
</div>

  );
};

export default DealList;
