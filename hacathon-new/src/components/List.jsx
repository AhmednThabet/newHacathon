import React, { useEffect } from "react";
// import data from "../data/dummy_data.json";
import { useState } from "react";
import { paginate } from "./pagination/paginate";
import Pagination from "./pagination/Pagination";
import PostItem from "./PostItem";
import { API_URLS } from "../data/constant";
import useAxios from "../hooks/useAxios";
import Header from "./Header";
export const List = () => {
  const [allPosts, setAllPosts] = useState([]);
  const { fetchData, response, error, loading } = useAxios();
  useEffect(() => {
    fetchData({
      url: API_URLS.GET_POSTS,
      method: "get",
      headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
    });
    if (response?.statusCode === 200) setAllPosts(response.data.posts);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const count = allPosts.length;
  const dataWithPag = paginate(allPosts, currentPage, pageSize);
  // add post function
  const handleAddPost = () => {};
  // edit post function
  const handleEditPost = () => {};
  // delete post function
  const handleDeletePost = () => {};

  return (
    <div>
      <Header handleAddPost={handleAddPost} />
      {dataWithPag.map(({ _id, user, text, img }) => (
        <PostItem
          key={_id}
          name={user.name}
          img={img}
          text={text}
          handleEditPost={handleEditPost}
          handleDeletePost={handleDeletePost}
        />
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
