import React from "react";

const PostItem = ({ name, img, email }) => {
  return (
    <div className="flex justify-between border bg-red-500 border-gray-50 ">
      <div>{img ? <p>{img}</p> : null}</div>
      <div className="">
        <p>{name}</p>
        <p>{email}</p>
        <div>...</div>
      </div>
    </div>
  );
};

export default PostItem;
