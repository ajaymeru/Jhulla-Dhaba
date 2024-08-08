// src/Home.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './Home.css';

import { EffectFade, Navigation, Autoplay } from 'swiper/modules';

import homeData from './Home.json';
import LinkToBook from './LinkToBook';

const Home = () => {
    const imageUrls = homeData.HomeImages;

    return (
        <div className="home-container">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                // pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
            >
                {imageUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                        <img src={url} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <LinkToBook />
        </div>
    );
}

export default Home;
