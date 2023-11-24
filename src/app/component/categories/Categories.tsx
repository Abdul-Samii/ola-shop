'use client'
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const Categories = () => {

  const categories = [
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
  const [displayCategoriesNumber, setDisplayCategoriesNumber] = useState(0);

  useEffect(() => {
    if (typeof window!== 'undefined') {
      setDisplayCategoriesNumber(window.innerWidth < 768 ? 12 : categories.length);
    }
  }, [])

  const handleResize = useCallback(() => {
    setDisplayCategoriesNumber(typeof window !== "undefined" && window.innerWidth < 768 ? 12 : categories.length);
  }, [categories.length]);

  useEffect(() => {
    typeof window !== "undefined" && window.addEventListener("resize", handleResize);
    return () => {
      typeof window !== "undefined" && window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className="mt-6 order-1 md:order-4">
      <div className="flex justify-between p-2">
        <h3 className="font-medium text-lg">Categories</h3>
        <h3 className="text-xs text-orange-500 font-semibold my-auto md:hidden">SHOP MORE</h3>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-8 bg-white">
        {
          categories.slice(0, displayCategoriesNumber).map((category, index) => (
            <div key={index} className="border-[0.1px] p-4 hover:shadow-lg flex flex-col cursor-pointer">
              <Image
                src={category.src}
                alt={category.name}
                height={40}
                width={40} 
                className="m-auto"
              />
              <p className="text-xs text-center p-2">{category.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Categories;
