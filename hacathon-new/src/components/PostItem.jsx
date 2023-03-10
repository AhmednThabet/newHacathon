import React from "react";
import MyPopover from "./MyPopover";
const PostItem = ({ name, img, text, handleEditPost }) => {
  return (
    <div className="flex relative  gap-4 border  items-center  border-gray-200  p-4  my-1 flex-col md:flex-row">
      {img ? (
        <span className="w-[25%] h-[25%]  md:w-[5%]  md:h-[5%] bg-gray-100 block rounded-full ">
          <img src={img} alt="imgPlaceholder" />
        </span>
      ) : (
        <span className="w-[25%] h-[25%]  md:w-[5%]  md:h-[5%] bg-gray-100 block rounded-full ">
          <img src="/images/imgPlaceholder.jpg" alt="imgPlaceholder" />
        </span>
      )}
      <div className="w-[80%]">
        <span className=" font-semibold text-md">{name}</span>
        <p className=" font-normal text-sm">{text}</p>
      </div>
      <div className="absolute top-0 right-0">
        <MyPopover handleEditPost={handleEditPost} />
      </div>
    </div>
  );
};

export default PostItem;
