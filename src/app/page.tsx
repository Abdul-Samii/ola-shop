import React from "react";
import TopbarNav from "./component/navbar/TopbarNav";
import GenericCategories from "./component/header/GenericCategories";
import Carousel from "./component/header/Carousel";
import Categories from "./component/categories/Categories";
import Services from "./component/header/Services";
import Channels from "./component/categories/Chanels";
import Banner from "./component/banner/Banner";
import ProductsCatalog from "./component/products/ProductsCatalog";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <TopbarNav />
      <div className="lg:px-[8%] mt-16 md:mt-0 md:pt-16">
        <div className="lg:flex md:mt-4">
          <GenericCategories />
          <Carousel />
        </div>
        <div className="md:flex md:flex-col">
          <Channels />
          <Banner />
          <Services />
          <Categories />
        </div>
        <ProductsCatalog />
      </div>
    </div>
  )
}
export default Home;
