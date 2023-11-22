'use client'
import React, { useCallback, useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";

const  HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleSwipe = useCallback((start: number, end: number) => {
    let totalDistance = end - start;
    if (Math.abs(totalDistance) > 30) {
      setIsMenuOpen(!(totalDistance>0));
    }
  }, [])

  useEffect(() => {
    let start: number;
    const handleTouchStart = (e: any) => {
      start = e.touches[0].clientX || 0
    };

    const handleTouchEnd = (e: any) => {
      handleSwipe(start, e.changedTouches[0].clientX);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleSwipe]);

  return (
    <div className="md:hidden">
      <LuMenu className="mr-2" color='white' size={24} onClick={handleMenu} />
      <ul className={"navigation fixed transform transition-all duration-500 ease-in-out bg-orange-500 h-full right-0 w-1/2 mt-5 uppercase text-white text-sm " + (isMenuOpen ? 'translate-x-0' : 'translate-x-full')}>
        <li className="border-b-[0.5px] px-[20px] py-[10px] border-orange-300 hover:bg-orange-300">Login</li>
        <li className="border-b-[0.5px] px-[20px] py-[10px] border-orange-300 hover:bg-orange-300">Signup</li>
        <li className="border-b-[0.5px] px-[20px] py-[10px] border-orange-300 hover:bg-orange-300">Cart</li>
        <li className="border-b-[0.5px] px-[20px] py-[10px] border-orange-300 hover:bg-orange-300">About Us</li>
      </ul>
    </div>
    
  )
}
export default HamburgerMenu;
