'use client'
import { ButtonType } from "@/types";
import React from "react";

const Button = ({ className, btnTitle, onClick }: ButtonType) => {

  return (
    <button
      className={className}
      onClick={onClick}
      type="submit"
    >
      {btnTitle}
    </button>
  )
}
export default Button;
