import React from "react";
import data from "../data/dummy_data.json";
import { useState } from "react";
import { paginate } from "./pagination/paginate";
import Pagination from "./pagination/Pagination";
import PostItem from "./PostItem";
export const List = () => {
  //   fetchData({ url: "user/signup", method: "post", data });

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const count = data.length;
  const dataWithPag = paginate(data, currentPage, pageSize);
  console.log(dataWithPag);
  return (
    <div>
      {dataWithPag.map(({ list, name, email }) => (
        <PostItem key={list} name={name} email={email} />
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
