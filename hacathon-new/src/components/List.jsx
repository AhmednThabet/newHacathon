import React from "react";
import data from "../data/dummy_data.json";
import { useState } from "react";
import { paginate } from "./pagination/paginate";
import Pagination from "./pagination/Pagination";
export const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const count = data.length;
  const dataWithPag = paginate(data, currentPage, pageSize);
  return (
    <div>
      {dataWithPag.map((d) => (
        <div key={d.list}>
          <h2>{d.name}</h2>
          <span>{d.email}</span>
        </div>
      ))}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default List;
