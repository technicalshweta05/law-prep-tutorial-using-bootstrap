import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const toppers = [
  {
    id: 1,
    bg: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200",
    photo:
      "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/12/50262691_Moksh.webp",
  },
  {
    id: 2,
    bg: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200",
    photo:
      "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/12/64000471_Jai-Bohra.webp",
  },
  {
    id: 3,
    bg: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200",
    photo:
      "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/12/59640501_Manav.webp",
  },
  {
    id: 4,
    bg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    photo:
      "https://clat.lawpreptutorialpatna.com/wp-content/uploads/2025/12/38793781_Vidit-Rawat.webp",
  },
];

const ClatToppers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-5 bg-white">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-5">

          <h2 className="clat-topper-heading mb-0">
            Hear from Our CLAT Toppers
          </h2>

          <div className="d-flex gap-3">

            <button ref={prevRef} className="swiper-arrow">
              <FaChevronLeft />
            </button>

            <button ref={nextRef} className="swiper-arrow">
              <FaChevronRight />
            </button>

          </div>

        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {toppers.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="topper-video-card"
                style={{
                  backgroundImage: `url(${item.bg})`,
                }}
              >
                <div className="video-overlay">

                  <div className="student-circle">
                    <img
                      src={item.photo}
                      alt=""
                      className="student-photo"
                    />
                  </div>

                  <button className="watch-btn">
                    <FaPlay className="me-2" />
                    Watch My Story
                  </button>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default ClatToppers;