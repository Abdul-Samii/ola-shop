'use client'
import { ButtonType } from "@/types";
import React from "react";

const Button = ({ className, btnTitle, onClick, disabled=false  }: ButtonType) => {

  return (
    <button
      className={className}
      onClick={onClick}
      type="submit"
      disabled={disabled}
    >
      {btnTitle}
    </button>
  )
}
export default Button;
