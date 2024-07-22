import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import styled from "./swiper.module.scss"

export default function SwiperUI() {
  const [selectedImage, setSelectedImage] = useState('https://swiperjs.com/demos/images/nature-1.jpg');

  const handleSlideClick = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <div className={styled.container}>
      <div className={styled.container_swiper}>
      <Swiper
        direction={'vertical'}
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        style={{ height: "400px" }}
        className="mySwiper swiper-custom"
      >
        {['https://swiperjs.com/demos/images/nature-1.jpg', 'https://swiperjs.com/demos/images/nature-2.jpg', 'https://swiperjs.com/demos/images/nature-3.jpg', 'https://swiperjs.com/demos/images/nature-4.jpg ', 'https://swiperjs.com/demos/images/nature-5.jpg'].map((src, index) => (
          <SwiperSlide key={index} style={{ margin: "10px 0" }} onClick={() => handleSlideClick(src)}>
            <img className={selectedImage === src ? styled.container_swiper_image_selected : styled.container_swiper_image} src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
        </Swiper>
        </div>
      <div className={styled.container_image}>
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
}
