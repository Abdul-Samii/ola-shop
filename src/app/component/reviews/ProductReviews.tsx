import React from "react";
import { TbDots } from "react-icons/tb";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { MdPhotoCamera } from "react-icons/md";

import { Pagination, Dropdown, ProgressBar, RatingStars } from "../elements";

const ProductReviews = () => {
  let reviewsData = [
    {customerName: "Usama Q.", comment: "If There Was An Option Of 6,7,8 star ⭐⭐⭐⭐⭐⭐⭐ Then i Really gave Maximum Stars , Highly Recommended, Only in 533PKR. Will Purchase Again , Quality 💯 , Price 💯 , Stuff 💯, everything is 💯% Ok. thank seller", rating: 4, imgs: ['/images/spacesavers.jpeg', '/images/spacesavers.jpeg', '/images/spacesavers.jpeg', '/images/spacesavers.jpeg']},
    {customerName: "Javed I.", comment: "Same as ordered. Quality is worth the price. In just 600 you get this really nice quality bag. it also has a zip inside which is a plus point", rating: 2, imgs: ['/images/spacesavers.jpeg', '/images/spacesavers.jpeg', '/images/spacesavers.jpeg', '/images/spacesavers.jpeg']},
    {customerName: "Ben K.", comment: "Very Bad Item, please don't order from this vender", rating: 1, imgs: ['/images/spacesavers.jpeg', '/images/spacesavers.jpeg', '/images/spacesavers.jpeg', '/images/spacesavers.jpeg']},
  ]

  let totalRatings = [
    {totalRecords: 50},
    {totalRecords: 30},
    {totalRecords: 15},
    {totalRecords: 10},
    {totalRecords: 5},
  ]
  let totalReviews = 110;

  return (
    <div>
      <h3 className="bg-[#f0efef] font-semibold p-4 text-sm" >Ratings & Reviews</h3>
      <div className="bg-white px-4 pt-6 pb-4">
        <div className="border-b-[1px] pb-6 flex space-x-16">
          <div className="md:border-r-[1px] pr-12">
            <div className="flex">
              <h1 className="text-3xl">4.3</h1>
              <div className="ml-2 my-auto relative flex bg-orange-500 text-xs text-white space-x-2 w-28 h-fit px-2 py-1">
                <FaStar />
                <p>Very Good</p>
                <div className="absolute top-0 right-0 bottom-0 bg-orange-500 w-6 transform -skew-x-12"></div>
              </div>
            </div>
            <RatingStars rating={3} size={22} />
            <p className="text-sm mt-2">106 Ratings</p>
          </div>
          <div className="w-96 hidden md:block">
            {
              totalRatings.map((ratings, index) => {
                return(
                  <div key={index} className="flex w-full space-x-5">
                    <RatingStars size={16} rating={5-index} />
                    <ProgressBar progressValue={+(ratings.totalRecords)/+totalReviews*100} />
                    <p className="text-xs my-auto">{ratings.totalRecords}</p>
                  </div>
              )})
            }
          </div>
        </div>
        <div className="md:flex border-b-[1px] py-4 justify-between space-y-3 md:space-y-0">
          <div className="flex space-x-4">
            <div className="w-28 h-8 cursor-pointer space-x-1 bg-slate-50 rounded-lg flex justify-center items-center">
              <MdPhotoCamera className="" />
              <p className="text-xs">Photos(23)</p>
            </div>
            {
              Array.from({length: 5}, (_, index) => (
                <div key={index} className="w-12 h-8 cursor-pointer space-x-1 bg-slate-50 rounded-lg flex justify-center items-center">
                  <FaStar className="text-orange-500" />
                  <p className="text-xs">{5-index}</p>
                </div>
              ))
            }
          </div>
          <div className="flex space-x-2 text-xs items-end">
            <p className="my-auto">Sort By: </p>
            <Dropdown />
          </div>
        </div>
      {
        reviewsData.map((review, index) => (
          <div key={index} className="py-2">
            <div className="flex space-x-2 text-gray-500 text-xs justify-between">
              <div className="flex space-x-2">
                <RatingStars rating={3} />
                <p className="my-auto mt-1.5">{review.customerName}</p>
              </div>
              <div className="mt-1.5 flex space-x-2 right-0">
                <p className="">5 days ago</p>
                <TbDots className="" />
              </div>
            </div>
            <p className="text-xs w-[80%] mt-2">{review.comment}</p>
            <div className="mt-2 flex space-x-2 w-full relative overflow-scroll border-b-[1px]">
              {
                review.imgs.map((img, index) => (
                  <Image
                    src="/images/spacesavers.jpeg"
                    alt="img"
                    height={100}
                    width={100}
                    className="max-w-fit h-auto block"
                    key={index}
                  />
                ))
              }
            </div>
          </div>
         ))
        }
        <div className="mt-4">
          <Pagination
            currentPg={14}
            totalPages={30}
          />
        </div>
      </div>
    </div>
  )
}
export default ProductReviews;
