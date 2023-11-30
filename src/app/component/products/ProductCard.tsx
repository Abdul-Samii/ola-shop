import Image from "next/image";
import React, { Fragment } from "react";
import RatingStars from "../elements/RatingStars";
import { productCardType } from "@/types";

const ProductCard = ({ product }: productCardType) => {
  return (
    <Fragment>
      <div className="mx-auto w-[47vw] md:w-[22vw] lg:w-[13.5vw] bg-white  h-[40vh] md:h-[38vw] lg:h-[42vh] mt-4 hover:shadow-lg rounded-md md:rounded-none cursor-pointer flex flex-col">
        <div className="h-[200px] relative">
          <Image
            src={product.image}
            alt="smart watch"
            fill={true}
            sizes="100vh"
            className="rounded-t-md md:rounded-none absolute"
          />
        </div>
        <p className="pt-6 px-4 text-sm line-clamp-1 md:line-clamp-2">{product.title}</p>
        <div className="px-4 mt-auto mb-3">
          <h3 className="text-orange-500">Rs.{product.price}</h3>
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
    </Fragment>
  )
}
export default ProductCard;
