import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

// Import your images
import Image1 from "./resources/image 1.png"; // Replace with actual paths
import Image2 from "./resources/image 2.png";
import Image3 from "./resources/image 3.png";

const Slider = () => {
  return (
    <div
      style={{
        maxWidth: "80%",
        margin: "0 auto",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Swiper
        // modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={3} // Show 3 slides at a time
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        style={{
          paddingBottom: "30px", // Adjust padding for pagination dots
        }}
      >
        <SwiperSlide>
          <div
            style={{
              padding: "10px",
              backgroundColor: "#f9fafb",
              borderRadius: "16px",
            }}
          >
            <img
              src={Image1}
              alt="Slide 1"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              padding: "10px",
              backgroundColor: "#f9fafb",
              borderRadius: "16px",
            }}
          >
            <img
              src={Image2}
              alt="Slide 2"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              padding: "10px",
              backgroundColor: "#f9fafb",
              borderRadius: "16px",
            }}
          >
            <img
              src={Image3}
              alt="Slide 3"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default Slider;
