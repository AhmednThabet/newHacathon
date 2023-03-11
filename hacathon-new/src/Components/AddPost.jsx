import React, { useEffect, useState } from "react";
import { API_URLS } from "../data/constant";
import useAxios from "../hooks/useAxios";

export const AddPost = ({ closeModal }) => {
  const [text, setText] = useState();
  const [image, setImage] = useState();

  const data = new FormData();
  data.append("text", text);
  data.append("image", image);
  const { fetchData, response } = useAxios();

  const handleEditText = (e) => {
    setText(e.target.value);
  };
  const handleEditFile = (e) => {
    setImage(e.target.files[0]);
  };
  const handleAddClick = () => {
    if (!text) return;

    fetchData({
      url: API_URLS.ADD_POST,
      method: "post",
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
        "content-type": "multipart/form-data",
      },
    });
  };
  if (response?.statusCode === 201) {
    closeModal();
  }
  return (
    <div className=" ">
      <span className=" inline-block font-semibold text-xl">Add Post</span>
      <textarea
        name="postDetails"
        id="postDetails"
        cols="30"
        rows="4"
        onChange={(e) => handleEditText(e)}
        className="block p-2.5 w-full text-sm text-gray-dark border border-gray-300 focus:ring-blue-500   border-gray focus:ring-0 focus:border-blue rounded-md mb-3 mt-2"
      ></textarea>
      <input type="file" onChange={(e) => handleEditFile(e)} />
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Cancel
        </button>

        <button
          type="button"
          className="w-full   justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default AddPost;
