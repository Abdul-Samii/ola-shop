import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="order-2 md:order-1">
      <Image
        src="/images/olashop-banner.gif"
        alt="banner"
        className="md:h-72 w-[90%] m-auto cursor-pointer"
        height={100}
        width={100}
      />
    </div>
  )
}
export default Banner;
