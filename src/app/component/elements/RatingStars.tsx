'use client'
import { RatingStarType } from "@/types";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const RatingStars = ({ rating }: RatingStarType) => {

  const [ratings, setRatings] = useState(rating);

  const handleRatings = (ratings: number) => {
    setRatings(ratings);
  }

  return (
    <div className="flex mt-2">
      <AiFillStar size={12} className={`outline-none ${ratings >= 1 ? 'text-orange-600' : 'text-orange-200'}`} onClick={() => { handleRatings(1) }} />
      <AiFillStar size={12} className={`outline-none ${ratings >= 2 ? 'text-orange-600' : 'text-orange-200'}`} onClick={() => { handleRatings(2) }} />
      <AiFillStar size={12} className={`outline-none ${ratings >= 3 ? 'text-orange-600' : 'text-orange-200'}`} onClick={() => { handleRatings(3) }} />
      <AiFillStar size={12} className={`outline-none ${ratings >= 4 ? 'text-orange-600' : 'text-orange-200'}`} onClick={() => { handleRatings(4) }} />
      <AiFillStar size={12} className={`outline-none ${ratings === 5 ? 'text-orange-600' : 'text-orange-200'}`} onClick={() => { handleRatings(5) }} />
    </div>
  )
}
export default RatingStars;
