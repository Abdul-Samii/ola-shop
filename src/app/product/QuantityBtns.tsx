'use client'
import React, { useState } from "react";
import Button from "../component/elements/Button";

const QuantityBtns = () => {
  const [itemsCount, setItemsCount] = useState(0);

  const handleItemsQuantity = async (direction: string) => {
    direction==='-' ? setItemsCount(itemsCount-1) : setItemsCount(itemsCount+1);
  }

  return (
    <div className="flex space-x-4">
      <p className="text-sm text-neutral-500 my-auto">Quantity</p>
      <Button 
        btnTitle="-"
        className="w-7 h-7 flex justify-center items-center bg-neutral-300 cursor-pointer"
        onClick={() => handleItemsQuantity('-')}
        disabled={itemsCount===0}  
      />
      <p className="my-auto w-3 text-center">{itemsCount}</p>
      <Button btnTitle="+" className="w-7 h-7 flex justify-center items-center bg-neutral-300 cursor-pointer" onClick={() => handleItemsQuantity('+')} />
    </div>
  )
}
export default QuantityBtns;
