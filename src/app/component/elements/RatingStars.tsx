'use client'
import { RatingStarType } from "@/types";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const RatingStars = ({ rating, size=12 }: RatingStarType) => {

  const [ratings, setRatings] = useState(rating);

  const handleRatings = (ratings: number) => {
    setRatings(ratings);
  }

  return (
    <div className="flex mt-2">
      {
        Array.from({length:5}, (_, index) => (
          <AiFillStar key={index} size={size} className={`outline-none ${ratings >= (index+1) ? 'text-orange-600' : 'text-orange-200'}`} onClick={() => { handleRatings(index+1) }} />
        ))
      }
    </div>
  )
}
export default RatingStars;
