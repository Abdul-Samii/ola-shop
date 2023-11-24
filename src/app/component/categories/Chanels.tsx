'use client'
import Image from "next/image";
import React, { useCallback, useState, useEffect, Fragment } from "react";

const Channels = () => {
  const channelsList = [
    {name: "Mart", img: "/images/mart.png"},
    {name: "Fashion", img: "/images/fashion.png"},
    {name: "Beauty", img: "/images/beauty.png"},
    {name: "Home & Decor", img: "/images/homedecor.png"},
    {name: "Free Delivery", img: "/images/freedelivery.png"},
    {name: "OlaShop Like New", img: "/images/olashopnew.png"},
    {name: "Everyday Low Price", img: "/images/lowprice.png"},
    {name: "New on OlaShop", img: "/images/newhere.png"},
    {name: "Flash Sale", img: "/images/flashsale.png"},
  ]
  const [chanelDisplayNumber, setChanelDisplayNumber] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setChanelDisplayNumber(window.innerWidth < 768 ? 5 : channelsList.length);
    }
  }, [])

  const handleResize = useCallback(() => {
    setChanelDisplayNumber(typeof window !== "undefined" && window.innerWidth < 768 ? 5 : channelsList.length);
  }, [channelsList.length]);

  useEffect(() => {
    typeof window !== "undefined" && window.addEventListener("resize", handleResize);
    return () => {
      typeof window !== "undefined" && window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className="md:bg-white md:h-32 mt-8 p-4 mb-8 flex justify-between order-1 md:order-3">
        {
          channelsList.slice(0, chanelDisplayNumber).map((channel: any, index: any) => (
            <Fragment key={index}>
              <div key={index} className="cursor-pointer">
                <Image
                  src={channel.img}
                  alt={channel.name}
                  className="rounded-full shadow-lg md:shadow-none md:rounded-none h-14 w-14 md:h-16 md:w-16"
                  height={70}
                  width={70}
                />
                <p className="text-xs p-1 text-center w-14 md:w-[70px] absolute leading-4">{channel.name}</p>
              </div>
              <div className={`border-r-[2px] hidden bg-red-400 h-12 m-auto ${index === channelsList.length - 1 ? 'hidden' : 'md:block'}`}></div>
            </Fragment>
          ))
        }
    </div>
  )
}
export default Channels;
