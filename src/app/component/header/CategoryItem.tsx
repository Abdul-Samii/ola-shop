import React from "react";
import { categoryItemType } from "@/types";
import { Icons } from "../elements/Icons";

const CategoryItem = ({categoryName, iconName}: categoryItemType) => {
  
  return (
    <div className="flex hover:bg-orange-100 cursor-pointer">
      <div className="h-5 w-5 bg-orange-100 flex items-center text-center justify-center ml-2 my-auto rounded-full">
        <Icons iconName={iconName} size={10} className="text-[#757575]" />
      </div>
      <p className="text-[#757575] py-1 px-2 w-full text-xs">{categoryName}</p>
    </div>
  )
}
export default CategoryItem;
