import React from "react";
import GenericCategories from "./component/header/GenericCategories";
import Carousel from "./component/header/Carousel";
import Categories from "./component/categories/Categories";
import Services from "./component/header/Services";
import Channels from "./component/categories/Chanels";
import Banner from "./component/banner/Banner";
import ProductsCatalog from "./component/catalog/ProductsCatalog";
import FlashSale from "./component/flashsales/FlashSale";

const Home = () => {
  return (
    <div className="lg:px-[8%] mt-16 md:mt-0 md:pt-16 min-h-screen">
      <div className="lg:flex md:mt-4">
        <GenericCategories />
        <Carousel />
      </div>
      <div className="md:flex md:flex-col">
        <Channels />
        <Banner />
        <Services />
        <Categories />
        <FlashSale />
      </div>
      <ProductsCatalog />
    </div>
  )
}
export default Home;
