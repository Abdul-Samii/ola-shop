import React from "react";
import { Icons } from "../elements/Icons";

const Services = () => {
  const servicesList = [
    {service: "Safe Payments", icon: "FaRegCreditCard", className:"text-orange-600 my-auto"},
    {service: "Nationwide Delivery", icon: "FaTruck", className:"text-gray-600 my-auto"},
    {service: "Free & East Returns", icon: "FaUndo", className:"text-purple-700 my-auto"},
    {service: "Best Price Guaranted", icon: "FaTag", className:"text-orange-600 my-auto"},
    {service: "100% Authentic Products", icon: "FaChessQueen", className:"text-gray-600 my-auto"},
    {service: "OlaShop Verified", icon: "FaCheck", className:"text-purple-700 my-auto"},
  ]

  return (
    <div className="bg-[#FFE8DE] rounded-md mt-8 hidden md:block md:order-2">
      <div className="flex p-2 justify-evenly">
        {
          servicesList.map((service, index) => (
            <div key={index} className="flex">
              <Icons iconName={service.icon} size={16} className={service.className} />
              <p className="ml-2 text-sm">{service.service}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Services;
