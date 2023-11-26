"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export interface IImageGallery {
  imageUrls: string[];
}

const Gallery: React.FC<IImageGallery> = ({ imageUrls }) => {
  const swiperRef = useRef<SwiperClass>();

  const renderImage = (imageUrl: string, key: number) => {
    return (
      <SwiperSlide key={key} className="p-[6px]">
        <Image src={imageUrl} alt="" sizes="100vw" width={0} height={0} className="rounded-2xl object-cover w-full" />
      </SwiperSlide>
    );
  };

  return (
    <div className="relative p-0 m-0 overflow-hidden">
      <Swiper
        className={"flex-1 flex items-stretch w-screen relative left-1/2 -translate-x-1/2 !pb-10"}
        loop={true}
        slidesPerView={1.2}
        slidesPerGroup={1}
        spaceBetween={16}
        pagination={true}
        modules={[Pagination]}
        centeredSlides={true}
        rewind={true}
        watchOverflow={true}
        watchSlidesProgress={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1.4,
          },
          768: {
            slidesPerView: 1.6,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {imageUrls.map(renderImage)}
      </Swiper>
      <section className="absolute top-0 left-0 flex flex-col justify-center w-full h-full">
        <article className="w-full flex justify-between mx-auto xl:max-w-screen-2xl lg:max-w-screen-xl sm:max-w-screen-md md:max-w-screen-lg sm:py-[80px] py-[48px] px-4 lg:px-8 xl:px-[80px] 2xl:px-[104px]">
        </article>
      </section>
    </div>
  );
};

export default React.memo(Gallery);
