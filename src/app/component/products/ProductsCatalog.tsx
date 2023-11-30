//Needs improvement
import Image from "next/image";
import React, { Fragment } from "react";
import RatingStars from "../elements/RatingStars";
import Button from "../elements/Button";
import { getTheData } from "@/app/actions/actions";
import ProductCard from "./ProductCard";

let productsData;
const ProductsCatalog = async() => {
  let limit = 6;
  
  const setProductsData = async(lim: number) => {
    'use server'
    productsData = await getTheData(6);
    return await getTheData(lim)
  }

  productsData = await setProductsData(12);

  const handleLoadMore = async() => {
    'use server'
    await setProductsData(20) //Getting undefined error of Let variable
  }

  return (
    <div className="mt-4">
      <h3 className="font-medium text-lg pl-2">Just For You</h3>
      <div className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-y-4 gap-x-1 mt-4">
      {
        productsData?.map((product: any, index: number) => (
          <ProductCard product={product} key={index} />
        ))
      }
      </div>
      <div className="flex justify-center mt-10">
      {/* This is the Load More Button */}
        <Button
          btnTitle="Load More"
          className="border-[1px] border-orange-500 text-orange-600 font-semibold p-2 md:w-96 w-44"
          onClick={handleLoadMore}
        />
      </div>
    </div>
  )
}
export default ProductsCatalog;
