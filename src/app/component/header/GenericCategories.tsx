import React from "react";
import CategoryItem from "./CategoryItem";

const GenericCategories = () => {
  const categories = [
    {name: 'Groceries & Pets', icon: 'FaShoppingBasket'},
    {name: 'Health & Beauty', icon: 'FaAmericanSignLanguageInterpreting'},
    {name: 'Mens Fashion', icon: 'FaTshirt'},
    {name: 'Womens Fashion', icon: 'FaTshirt'},
    {name: 'Mother & Baby', icon: 'FaBabyCarriage'},
    {name: 'Home & Lifestyle', icon: 'FaChair'},
    {name: 'Electronic Devices', icon: 'FaCameraRetro'},
    {name: 'Electronic Accessories', icon: 'FaPlug'},
    {name: 'Home & TV Appliances', icon: 'FaTv'},
    {name: 'Sport & Outdoor', icon: 'FaDribbble'},
    {name: 'Waches, Bags & Jewellery', icon: 'FaShoppingBag'},
    {name: 'Automotive & Motorbike', icon: 'FaBicycle'}
  ]

  return (
    <div className="w-1/4 h-80 text-sm border rounded-xl bg-white flex-col lg:flex justify-center hidden relative">
      {
        categories.map((category, index) => <CategoryItem categoryName={category.name} iconName={category.icon} key={index} />)
      }
    </div>
  )
}
export default GenericCategories;
