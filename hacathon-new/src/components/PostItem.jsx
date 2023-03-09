import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
const PostItem = () => {
  return (
    <div className="flex justify-between border border-gray-100 my-2 ">
      <p className="w-20 h-20 bg-gray-200 m-8 rounded-[50%] ">Imag</p>

      <div className=" flex flex-col my-4 max-w-[800px]">
        <p className="font-bold my-2">Ahmed Thabet</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quidem
          sint pariatur cum quaerat laudantium, praesentium aspernatur sed at
          iste ea reiciendis sit dolorem voluptates, voluptatibus ut quam.
          Consequuntur, voluptatum.
        </p>
      </div>
      <div>
        <EllipsisHorizontalIcon
          className="m-4"
          color="blue"
          height={20}
          width={20}
        />
      </div>
    </div>
  );
};

export default PostItem;
