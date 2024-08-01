// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

// Swiper Library
import { Swiper, SwiperSlide } from "swiper/react";

// swiper Slider
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required moduled
import { Pagination } from "swiper";

// Icons
import { BsArrowBarRight } from "react-icons/bs";
// next Image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[450px] mb-2"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden">
                      {/* Image */}
                      <Image
                        src={image.path}
                        alt={image.title}
                        width={600}
                        height={1000}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] 
                      to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                      ></div>
                      {/* Title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 text-[13px] tracking-[0.2em]">
                        <div className="flex items-center gap-x-2">
                          {/* Title part1 */}
                          <div className="delay-100">LIVE</div>
                          {/* Title part2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowBarRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
