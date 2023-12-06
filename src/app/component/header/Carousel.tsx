'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const Carousel = () => {
  const [itr, setItr] = useState(0);
  const [imgs, setImgs] = useState([
    {src: '/images/slider1.jpeg', alt: 'img1', act: 'translate-x-full'},
    {src: '/images/slider2.jpeg', alt: 'img2', act: 'translate-x-full'},
    {src: '/images/slider3.jpeg', alt: 'img3', act: 'translate-x-full'},
    {src: '/images/slider4.jpeg', alt: 'img4', act: 'translate-x-full'},
    {src: '/images/slider5.jpeg', alt: 'img5', act: 'translate-x-full'},
  ]);

  const changeImg = () => {
    setImgs((prevImgs) => {
      const updatedImgs = [...prevImgs];
      // updatedImgs[itr].act = 'translate-x-full';
      const nextItr = (itr + 1) % updatedImgs.length;
      // updatedImgs[nextItr].act = 'translate-x-0';
      setItr(nextItr);
      return updatedImgs;
    });
  }

  useEffect(() => {
    const inter = setInterval(() => {
      changeImg()
    }, 3000);
    return () => {
      clearInterval(inter)
    }
  })

  const handleManualCarousel = (dir: string) => dir==="right" ? setItr((itr + 1) % imgs.length) : setItr((itr - 1 + imgs.length) % imgs.length);

  return (
    <div className="md:h-80 h-52 w-full relative flex flex-col justify-center lg:ml-4">
      <Image
        src={imgs[itr]?.src}
        alt={imgs[itr]?.alt || "img"}
        fill={true}
        className='md:rounded-lg transition transform duration-300 delay-200 ease-in-out absolute'
        sizes="full"
      />
      <HiOutlineChevronRight
        onClick={() => handleManualCarousel('right')}
        className="bg-orange-100 md:h-16 h-8 opacity-50 absolute right-0 cursor-pointer"
        size={20}
      />
      <HiOutlineChevronLeft
        onClick={() => handleManualCarousel('left')}
        className="bg-orange-100 md:h-16 h-8 opacity-50 absolute cursor-pointer"
        size={20}
      />
    </div>
  )
}
export default Carousel;
