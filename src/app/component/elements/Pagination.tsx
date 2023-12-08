'use client'
import React, { useCallback, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { PaginationType } from "@/types";

const Pagination = ({ currentPg, totalPages }: PaginationType) => {

  const [currentPage, setCurrentPage] = useState(currentPg);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const setPages = useCallback(() => {
    const startPage = Math.max(1, currentPage - Math.floor(5 / 2));
    const endPage = Math.min(totalPages, startPage + 5 - 1);
    
    const uniquePages = new Set<number>();

    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== 30) {
        uniquePages.add(i);
      }
    }
    setVisiblePages(Array.from(uniquePages));
  }, [currentPage, totalPages]);

  useEffect(() => {
    setPages();
  }, [setPages]);

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
      {visiblePages?.map((page) => (
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
