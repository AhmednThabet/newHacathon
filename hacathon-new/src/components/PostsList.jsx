import React from "react";
import PostItem from "./PostItem";
const PostsList = () => {
  return (
    <div>
      {[...Array(5)].map(() => (
        <PostItem />
      ))}
    </div>
  );
};

export default PostsList;
