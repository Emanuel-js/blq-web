import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

interface BannerProps {
    banner: BannerData[];
  }

  const Banner: React.FC<BannerProps> = ({ banner }) => {
  return (
  <div>
    <Swiper
        slidesPerView={1} // Adjust this value
        centeredSlides={true}
        shortSwipes={true}
        navigation={{
            nextEl: '.swiper-button-next.custom-next-icon',
            prevEl: '.swiper-button-prev.custom-prev-icon',
          }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={30}
        breakpoints={{
            // when window width is <= 640px
            640: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
          }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
    >
            <div className="swiper-button-next custom-next-icon"></div>
<div className="swiper-button-prev custom-prev-icon"></div>
        {banner.map((item) => {
            return (
                <SwiperSlide key={item.creator} style={{ width: 'auto' }}>
                    
                    <img src={item.pcImageUrl} alt={item.title} style={{ width: '100%', height: 'auto' }} />
                </SwiperSlide>
            )
        })}
    </Swiper>

  </div>
  )
}

export default Banner