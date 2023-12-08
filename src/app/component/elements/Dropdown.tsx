'use client'
import React, { useEffect, useRef, useState } from "react";
import { GrFormDown } from "react-icons/gr";

import Button from "./Button";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("Relevant")
  const dropdownRef = useRef<any>(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen)
  }
  const handleDropdownValue = (option: string) => {
    setSelectedValue(option);
    handleDropdownToggle();
  }

  const closeDropdown = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  let options = ["Relevant", "Recent"];

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={handleDropdownToggle} className="flex w-28 cursor-pointer bg-slate-100 p-2 rounded-lg m-auto justify-between">
        <Button
          btnTitle={selectedValue}
          className="text-cente ml-4"
          onClick={handleDropdownToggle}
        />
        <GrFormDown size={20} />
      </div>
    { isOpen &&
      <ul className="bg-white w-28 font-semibold shadow-md rounded-lg absolute">
        {
          options.map((option, index) => (
            <li key={index} className="hover:bg-orange-200 px-4 py-2 rounded-lg" onClick={() => handleDropdownValue(option)}>{option}</li>
          ))
        }
      </ul>
    }
    </div>
  )
}
export default Dropdown;
