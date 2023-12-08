import React from "react";
import { BsHeart } from "react-icons/bs";
import { MdShare } from "react-icons/md";

import BreadCrumb from "../BreadCrumb";
import ProductsImg from "../ProductsImgs";
import QuantityBtns from "../QuantityBtns";
import ProductDelivery from "../ProductDelivery";
import ProductReviews from "@/app/component/reviews/ProductReviews";
import { Button, RatingStars } from "@/app/component/elements";

const Product = ({ params }: any) => {

  let breadcrumbs = {
    parentCategory: 'Furniture & Decor',
    subcategory: 'Furniture',
    productName: 'Wooden Chair'
  }

  return (
    <div className="lg:px-[8%] pt-16 min-h-screen">
      <BreadCrumb breadcrumbs={breadcrumbs} className="hidden md:flex"/>
      <div className="lg:flex bg-white lg:justify-between lg:h-1/2">
        <ProductsImg />
        <div className="lg:w-1/3 mx-4 mt-6">
          <div className="space-y-3">
            <h2 className="text-lg">Chest Bag Men New Leisure Fashion Trend One Shoulder Chest Bag Outdoor Sports Multi Functional Crossbody Bag</h2>
            <div className="flex">
              <RatingStars rating={3} />
              <p className="text-xs text-blue-700 opacity-60 px-2 mt-1.5">154 Ratings</p>
            </div>
            <div className="flex">
              <div className="flex space-x-2 text-xs">
                <p className="text-gray-500">Brand: <span className="text-blue-700 opacity-60 cursor-pointer hover:underline">No Brand</span></p>
                <p className="text-gray-400">|</p>
                <p className="text-blue-700 opacity-60 cursor-pointer hover:underline">More Travel from No Brand</p>
              </div>
              <MdShare className="ml-auto" color="gray" size={20} />
              <BsHeart className="mx-3" size={18} />
            </div>
            <div className="border-b-[1px]" />
            <h1 className="text-3xl text-orange-500 py-2">Rs. 4174</h1>
            <QuantityBtns />
          </div>
          <div className="flex space-x-1 text-white mt-16">
            <Button
              btnTitle="Buy Now"
              className="bg-blue-700 opacity-60 w-full p-2 rounded-sm"
              onClick={async () => {'use server'}}
            />
            <Button
              btnTitle="Add to Cart"
              className="bg-orange-500 w-full p-2 rounded-sm"
              onClick={async () => {'use server'}}
            />
          </div>
        </div>
        <ProductDelivery />
      </div>
      <div className="mt-6">
        <ProductReviews />
      </div>
    </div>
  )
}
export default Product;
