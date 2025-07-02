import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { testimonials } from "../assets/data";

const TestimonialSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Attach navigation once refs are available
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="py-10 container mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">What our clients say</h2>
        <p className="text-gray-600">Things that our clients say about us</p>
      </div>
      <div className="relative">
        <Swiper
          onSwiper={setSwiperInstance}
          loop={true}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full md:py-12 py-4">
              <div className="shadow-xl bg-white text-center flex flex-col min-h-[280px]">
                <div className="mx-auto w-24 h-24 mb-5">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, index) => (
                    <span className="text-yellow-500 text-xl mb-3" key={index}>
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            ref={prevRef}
            className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-blue-500 hover:text-white transition-all cursor-pointer duration-100"
          >
            <BsChevronLeft />
          </button>
          <button
            ref={nextRef}
            className="swiper-button-next-custom w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:bg-blue-500 hover:text-white transition-all cursor-pointer duration-100"
          >
            <BsChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
