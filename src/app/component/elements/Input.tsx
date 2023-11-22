import React from "react";

const Input = ({placeholder, value, onChange, className}: any) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  )
}
export default Input;
