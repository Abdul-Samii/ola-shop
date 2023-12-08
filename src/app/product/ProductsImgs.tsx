'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const ProductImgs = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>()

  const images = [
    {name: 'Studio Headphones', src: '/images/earbuds.png'},
    {name: 'Hand Dishwashing', src: '/images/lemonmax.jpeg'},
    {name: 'Foot Deodorant', src: '/images/footdeo.jpeg'},
    {name: 'Spices', src: '/images/spices.jpeg'},
    {name: 'Screw & Nut Drivers', src: '/images/screwdriver.jpeg'},
    {name: 'Serum & Essence', src: '/images/serum.jpeg'},
    {name: 'Wireless Earbuds', src: '/images/usb.jpeg'},
    {name: 'Thermal Flasks & Container', src: '/images/containers.jpeg'},
    {name: 'Door hardware & locks', src: '/images/locks.jpeg'},
    {name: 'Humidifiers', src: '/images/humidifiers.jpeg'},
    {name: 'Fan Parts & Accessories', src: '/images/fan.jpeg'},
    {name: 'Bath Towels', src: '/images/bathtowel.jpeg'},
    {name: 'Wardobe Organisers', src: '/images/wardobe.jpeg'},
    {name: 'Clothes Hangers & Pegs', src: '/images/clotheshangers.jpeg'},
    {name: 'Casual', src: '/images/casual.jpeg'},
    {name: 'Space Savers', src: '/images/spacesavers.jpeg'}
  ]

  return (
    <section className='lg:w-96'>
      <div className='container'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='h-72 w-screen lg:w-full md:h-[28rem] lg:h-72 rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.name}
                  className='block'
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-20 md:h-36 w-screen lg:w-96 lg:h-20 rounded-lg'
        >
          {images.map((image: any, index: number) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.name}
                  className='block h-full w-full object-cover border-[1px]'
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default ProductImgs;
