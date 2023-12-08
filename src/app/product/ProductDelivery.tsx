import React from "react";
import { PiMapPinLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import { AiFillAmazonCircle } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineNotInterested } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";

import Button from "../component/elements/Button";

const ProductDelivery = () => {
  let address = "Sindh, Karachi - Gulshan-e-Iqbal, Block 15";
  let deliveryDate = "16 Dec - 31 Dec";
  let deliveryDays = "11 - 26 day(s)";
  let deliveryCost = "Rs. 99";
  let storeName = "Any 3 Store";

  return (
    <div className="bg-[#FAFAFA] lg:w-1/4">
      <div className="border-b-[1px] pb-4">
        <p className="text-gray-500 text-xs font-semibold p-4">Delivery</p>
        <div className="flex lg:justify-center justify-between ml-2 space-x-2">
          <div className="flex space-x-2">
            <PiMapPinLight size={22} className="my-auto" color="gray" />
            <p className="text-xs w-[65%]">{address}</p>
          </div>
          <div className="flex justify-end pr-2">
            <Button
              btnTitle="CHANGE"
              onClick={async() => {'use server'}}
              className="text-xs font-semibold text-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 border-b-[1px] pb-4">
        <div className="flex lg:justify-center justify-start ml-2 space-x-2">
          <CiDeliveryTruck size={22} />
          <div>
            <p className="text-sm font-semibold">Standard Delivery <span className="text-xs font-normal">{deliveryDate}</span></p>
            <p className="text-xs text-gray-500">{deliveryDays}</p>
          </div>
          <p className="text-xs mt-2 font-semibold">{deliveryCost}</p>
        </div>
        <div className="flex justify-start ml-2 mt-6 space-x-2">
          <BsCashCoin size={20} />
          <p className="text-xs">Cash on Delivery Available</p>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold p-4">Service</p>
        <div className="flex justify-start ml-2 space-x-2">
          <AiFillAmazonCircle size={20} color="orange" />
          <div className="text-xs">
            <p className="text-orange-500 font-semibold">Daraz Verified</p>
            <p className="text-gray-500">Get exactly what you ordered!</p>
          </div>
        </div>

        <div className="flex justify-start ml-2 space-x-2 mt-6">
          <TbTruckReturn size={20} />
          <div className="text-xs">
            <p className="font-semibold">14 days free & easy return</p>
            <p className="text-gray-500">Change of mind is not applicable</p>
          </div>
        </div>

        <div className="flex justify-start ml-2 space-x-2 mt-6">
          <MdOutlineNotInterested size={18} />
          <div className="text-xs">
            <p className="">Warranty not available</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-start ml-2 border-b-[1px] pb-4">
        <div className="">
          <p className="text-xs">Sold by</p>
          <p>{storeName}</p>
        </div>
        <div className="flex text-blue-600 ml-auto items-center mr-2 space-x-1">
          <IoMdChatboxes size={15} />
          <Button
            btnTitle="CHAT"
            className="text-xs font-semibold"
            onClick={async() => {'use server'}}
          />
        </div>
      </div>
      <Button
        btnTitle="Visit Store"
        className="text-xs text-blue-500 font-semibold flex py-5 mx-auto"
        onClick={async() => {'use server'}}
      />
    </div>    
  )
}
export default ProductDelivery;
