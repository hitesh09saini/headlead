import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: 'Brooklyn Simmons',
    company: 'manam',
    text: 'Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar.',
    avatar: '/avatar1.png'
  },
  {
    name: 'Esther Howard',
    company: 'Offmax',
    text: 'Vitae tellus bibendum nibh integer auctor pretium sed.',
    avatar: '/avatar2.png'
  },
  {
    name: 'Arlene McCoy',
    company: 'bloopixel',
    text: 'Eu eu eget lorem commodo sagittis enim in viverra Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar.',
    avatar: '/avatar3.png'
  },
  {
    name: 'Jane Cooper',
    company: 'unpixel',
    text: 'Amet aliquam, volutpat nisl, duis sed at Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar .',
    avatar: '/avatar4.png'
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-black border border-gray-700 p-6 rounded w-full flex flex-col">
    <div className="flex items-center mb-4">
      <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-4" />
      <div>
        <h4 className="text-white font-semibold">{testimonial.name}</h4>
        <p className="text-gray-400 text-sm">{testimonial.company}</p>
      </div>
    </div>
    <p className="text-gray-300">{testimonial.text}</p>
  </div>
);

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const prevSlide = () => sliderRef.current.slickPrev();
  const nextSlide = () => sliderRef.current.slickNext();

  return (
    <section className="bg-black text-white py-[80px] flex justify-center items-center">
      <div className="md:w-[90%] w-[97%] ">
        {/* Custom Navigation Buttons */}
        <div className="flex justify-end gap-4 mb-4">
          <button onClick={prevSlide} className="w-10 h-10 border border-yellow-500 rounded-lg text-yellow-500">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={nextSlide} className="w-10 h-10 border border-yellow-500 rounded-lg text-yellow-500">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <h2 className="text-lg mb-8">Hear what our customers say :)</h2>

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
