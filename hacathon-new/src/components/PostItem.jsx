import React from "react";
import MyPopover from "./MyPopover";
const PostItem = ({ name, img, email }) => {
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
        <p className=" font-normal text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          dignissimos mollitia autem praesentium quae iusto ut odit. Qui
          asperiores ut blanditiis unde fugiat, modi cum maxime voluptates ea
          iure accusantium.
        </p>
      </div>
      <div className="absolute top-0 right-0">
        <MyPopover />
      </div>
    </div>
  );
};

export default PostItem;
