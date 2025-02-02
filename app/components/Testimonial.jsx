import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/assets/assets";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const Testimonial = () => {
  return (
    <div className="w-full px-6 md:px-[12%] py-10 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-6">
        What Our Clients Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg"
          >
            <FaQuoteLeft className="text-orange-500 text-4xl mb-4" />
            <p className="text-lg text-gray-600 italic">
              {testimonial.feedback}
            </p>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mt-6 border-2 border-orange-500"
            />
            <h3 className="text-xl font-semibold mt-3">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
