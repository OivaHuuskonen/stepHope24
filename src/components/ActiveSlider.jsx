import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import CardFlip from './CardFlip';
import { ServiceData } from '../constants';

const PageHeader = ({ title }) => (
  <div className="mx-auto px-4 max-w-[1000px] w-full gap-8">
    <div className="sm:text-left pb-2 md:text-center">
      <p className="text-4xl font-bold text-[#679186] inline border-b-2 border-[#f9b4ab] sm:text leading-normal">
        {title}
      </p>
    </div>
  </div>
);

const ActiveSlider = () => {
  return (
    <div name="pyykkilista" className="flex items-center justify-center flex-col h-[900px] bg-[#fdebd3]">
      <PageHeader title="14 kohdan pyykkilista" />
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <CardFlip {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;








{/*import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
//import { RxArrowTopRight } from "react-icons/rx";
import CardFlip from "./CardFlip";
import { ServiceData } from "../constants";

const PageHeader = ({ title }) => (
  <div className="mx-auto px-4 max-w-[1000px] w-full gap-8">
    <div className="sm:text-left pb-2 md:text-center">
      <p className="text-4xl font-bold text-[#679186] inline border-b-2 border-[#f9b4ab] sm:text leading-normal">
        {title}
      </p>
    </div>
  </div>
);


const ActiveSlider = () => {
       return (



                <div name="pyykkilista" className="flex items-center justify-center flex-col h-[900px] bg-[#fdebd3]">

                    <PageHeader title="14 kohdan pyykkilista"/>


                    <Swiper
                        breakpoints={{
                            340: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="max-w-[90%] lg:max-w-[80%]"
                    >
                        {ServiceData.map((item) => (
                            <SwiperSlide key={item.title}>
                                <CardFlip {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
       
   
    );
};

export default ActiveSlider;*/}







{/*import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import CardFlip from "./CardFlip";
import { ServiceData } from "../constants";
import BackgroundVideo from './BackgroundVideo';

const ActiveSlider = ({ hasVideoBackground }) => {
    return (

<div className={`page-transition ${hasVideoBackground ? 'page-with-video-background' : 'page-without-video-background'}`}>
<div className="relative z-10">
      <BackgroundVideo />


        <div name='slider' className="flex items-center justify-center flex-col h-[900px] z-15">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[80%]"
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <CardFlip {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            </div>
            </div>
    )
};

export default ActiveSlider;


{/*<div className={`page-transition ${hasVideoBackground ? 'page-with-video-background' : 'page-without-video-background'}`}>
<div className="relative z-10">
      <BackgroundVideo />*/}



{/*import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;*/}