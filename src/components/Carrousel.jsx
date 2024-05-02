import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import slide1 from "../assets/b3.png";
import slide2 from "../assets/b4.png";
import slide3 from "../assets/b5.png";
import slide4 from "../assets/b6.png";
import slide5 from "../assets/b7.png";

export default function Carrousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="banner1" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
