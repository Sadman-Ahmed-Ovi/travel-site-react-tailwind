import React, { useState } from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    url: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    url: 'https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Carousel = () => {

    const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center'>
      <BsFillArrowLeftSquareFill
        onClick={prevSlide}
        className='absolute top-[50%] text-3xl  cursor-pointer left-8'
      />
      <BsFillArrowRightCircleFill
        onClick={nextSlide}
        className='absolute top-[50%] text-3xl cursor-pointer right-8'
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
          {index === slide && (
            <img className='w-full rounded-md' src={item.url} alt='/' />
          )}
        </div>
      ))}
    </div>
    );
};

export default Carousel;