'use client'
import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = ({ currentPg = 14, totalPages = 30 }) => {

  const [currentPage, setCurrentPage] = useState(currentPg);
  const [final, setFinal] = useState<number[]>([]);
  const visiblePages = 5;

  const setPages = () => {
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);
    
    const uniquePages = new Set<number>();

    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== 30) {
        uniquePages.add(i);
      }
    }
    setFinal(Array.from(uniquePages));
  };

  useEffect(() => {
    setPages();
  }, []);

  const handleSelectPage = (page: number) => {
    setCurrentPage(page);
    setPages();
  };

  const pageClasses = "w-7 h-7 text-xs rounded-md flex justify-center items-center hover:bg-slate-100 cursor-pointer active:bg-slate-100";

  return (
    <div className="flex space-x-2 justify-end">
      <BsChevronLeft size={12} className="my-auto" />
      <p className={pageClasses} onClick={() => handleSelectPage(1)}>1</p>
      <p>...</p>
      {final?.map((page) => (
        <p
          key={page}
          onClick={() => handleSelectPage(page)}
          className={pageClasses}
        >
          {page}
        </p>
      ))}
      <p>...</p>
      <p className={pageClasses} onClick={() => handleSelectPage(totalPages)}>30</p>
      <BsChevronRight size={12} className="my-auto" />
    </div>
  );
};

export default Pagination;
