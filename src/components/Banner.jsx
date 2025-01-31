import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerData } from "../constants/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Banner() {
    return (
        <section className='banner'>
            <div className='container'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='mySwiper'
                >
                    {bannerData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.img} alt='banner img' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Banner;
