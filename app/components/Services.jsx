import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { services } from "@/assets/assets";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // for screens wider than 1024px (tablet or larger)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600, // for screens smaller than 600px (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="services" className=" w-full px-[12%] py-10 scroll-mt-20">
      <h4 className=" text-center mb-2 text-lg font-Ovo">What i offer</h4>
      <h2 className=" text-center text-5xl font-Ovo">My Services</h2>
      <p className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a Passionate MERN-stack developer with a strong problem-solving
        mindset skilled in JavaScript, React.js, Next.js, TypeScript, and
        Node.js, delivering scalable solutions. Always learning and
        collaborating to build impactful software.
      </p>
      {/* Service Cards */}
      <>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[10rem] h-[20rem] m-6 p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-sm md:text-xl font-semibold">
                {service.title}
              </h3>
              <p>{service.description}</p>
              <p className="mt-4 text-blue-500 cursor-pointer">read more...</p>
            </div>
          ))}
        </Slider>
      </>
    </div>
  );
};

export default Services;
