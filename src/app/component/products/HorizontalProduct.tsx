import { productCardType } from "@/types";
import Image from "next/image";
import React from "react";
import RatingStars from "../elements/RatingStars";

const HorizontalProduct = ({ product }: productCardType) => {
  return (
    <div className="grid grid-cols-2 bg-white">
      <div className=" h-[60px] w-[60px] relative ml-auto flex mr-2">
        <Image
          src={product.image}
          alt="smart watch"
          fill={true}
          sizes="100vh"
          className="absolute"
        />
      </div>
      <div>
      <div className="mb-3">
          <h3 className="text-orange-500 text-sm">Rs.{product.price}</h3>
          <div className="flex">
            <p className="text-gray-500 text-xs line-through">Rs.8999</p>
            <p className="text-xs">-22.22%</p>
          </div>
          <div className="flex">
            <RatingStars rating={product.rating.rate} />
            <p className="text-xs text-gray-400 mt-1.5 pl-1">({product.rating.count})</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HorizontalProduct;
