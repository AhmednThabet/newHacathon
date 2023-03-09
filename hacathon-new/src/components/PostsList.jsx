import React from "react";
import PostItem from "./PostItem";
const PostsList = () => {
  return (
    <div className=" mx-[10%] ">
      <h2 className="font-semibold text-3xl my-4">List of post</h2>
      {[...Array(5)].map(() => (
        <PostItem />
      ))}
    </div>
  );
};

export default PostsList;
