import React from "react";
import ProductCard from "../products/ProductCard";
import { getTheData } from "@/app/actions/actions";
import Button from "../elements/Button";
import HorizontalProduct from "../products/HorizontalProduct";
import Timer from "./Timer";

const FlashSale = async () => {
  let productsData;
  const setProductsData = async(limit: number) => {
    return await getTheData(limit)
  }
  productsData = await setProductsData(6);

  return (
    <div className="mt-6 md:order-3">
      <div className="flex justify-between p-2">
        <h3 className="font-medium text-lg text-gray-500">Flash Sale</h3>
        <h3 className="text-xs text-orange-500 font-semibold my-auto md:hidden">SHOP MORE</h3>
      </div>
      <div className="w-full border-b-[1px] flex p-4 md:bg-white bg-orange-500">
        <p className="text-sm text-orange-600 my-auto hidden md:block">On Sale Now</p>
        <div className="flex space-x-2 ml-16 my-auto">
          <p className="text-sm my-auto text-white md:text-black">Ending in</p>
          <div className="flex text-black md:text-white space-x-1">
            <Timer />
          </div>
        </div>
        <Button
          btnTitle="Shop More"
          className="text-orange-500 border-[1px] border-orange-500 p-2 rounded-sm ml-auto mr-4 cursor-pointer hidden md:block"
          onClick={async() => {
            'use server'
            console.log("This is a test")
          }}
        />
      </div>
      <div className="bg-white w-full hidden  md:grid md:grid-cols-4 lg:grid-cols-6">
      {
        productsData?.map((product: any, index: number) => (
          <div key={index} className="">
          <ProductCard product={product} key={index} />
          </div>
        ))
      }
      </div>
      <div className="flex md:hidden bg-white">
        <div className="w-1/2">
        <ProductCard product={productsData[4]} />
        </div>
        <div className="border-r-[1px]" />
      <div className="h-[40vh] flex flex-col justify-center space-y-2 mr-8">
          {
            productsData.slice(1, 4).map((product: any, index: number) => (
              <HorizontalProduct product={product} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default FlashSale;
