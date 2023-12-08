import { BreadCrumbType } from "@/types";
import React from "react";

const BreadCrumb = ({ className, breadcrumbs }: BreadCrumbType) => {

  return (
    <div className={`space-x-2 text-gray-500 text-sm py-4 ${className}`}>
      <p className="text-blue-700 opacity-60 cursor-pointer">{breadcrumbs.parentCategory}</p>
      <p>&gt;</p>
      <p className="text-blue-700 opacity-60 cursor-pointer">{breadcrumbs.subcategory}</p>
      <p>&gt;</p>
      <p>{breadcrumbs.productName}</p>
    </div>
  )
}
export default BreadCrumb;
