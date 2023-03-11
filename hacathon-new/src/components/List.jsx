import React, { useEffect } from "react";
import { useState } from "react";
import { paginate } from "./pagination/paginate";
import Pagination from "./pagination/Pagination";
import PostItem from "./PostItem";
import { API_URLS } from "../data/constant";
import useAxios from "../hooks/useAxios";
import Header from "./Header";
export const List = () => {
  const { fetchData, response } = useAxios();
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetchData({
      url: API_URLS.GET_POSTS,
      method: "get",
      headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
    });
  }, []);

  useEffect(() => {
    if (response?.status === "success") {
      setAllPosts(response.data.posts);
    }
  }, [response]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const count = allPosts.length;
  const dataWithPag = paginate(allPosts, currentPage, pageSize);

  // edit post function
  const handleEditPost = (data) => {
    const posts = [...allPosts];
    let post = posts.find((post) => post._id === data._id);
    post.text = data.text;
    post.image = data.image;
    setAllPosts(posts);
  };
  // delete post function
  const handleDeletePost = (id) => {
    fetchData({
      url: API_URLS.DELETE_POST(id),
      method: "del",
      headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
    });
    // if (response?.statusCode === 200) {
    //   const posts = { ...allPosts };
    //   const filteredPosts = posts.filter((post) => post._id !== id);
    //   setAllPosts(filteredPosts);
    // }
  };

  return (
    <div>
      <Header />
      {dataWithPag.map(({ _id, user, text, img }) => (
        <PostItem
          key={_id}
          id={_id}
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
