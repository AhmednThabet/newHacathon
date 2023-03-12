import React, { useEffect, useState } from "react";
import { API_URLS } from "../data/constant";
import useAxios from "../hooks/useAxios";

export const EditPost = ({
  idPost,
  closeModal,
  handleEditPost,
  text: pastText,
  image: pastImg,
}) => {
  const { fetchData, response, loading } = useAxios();
  const [text, setText] = useState();
  const [image, setImage] = useState();
  // we will make this change when click on the or delete button as in xd (I set it by default false)
  const [isImageDelete, setIsImageDelete] = useState(true);

  const data = new FormData();
  data.append("text", text);
  data.append("image", image);
  data.append("deleteImage", isImageDelete);

  const handleEditText = (e) => {
    setText(e.target.value);
  };
  const handleEditFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleEditClick = (e) => {
    if (!text) return;
    fetchData({
      url: API_URLS.EDIT_POST(idPost),
      method: "put",
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
        "content-type": "multipart/form-data",
      },
    });
  };
  if (response && response.statusCode == 200) {
    // to log FormData in console
    // console.log(Object.fromEntries(data));
    closeModal();
    handleEditPost(response.data);
  }
  return (
    <div className=" ">
      <span className=" inline-block font-semibold text-xl">Edit Post</span>
      <textarea
        name="postDetails"
        id="postDetails"
        cols="30"
        rows="4"
        defaultValue={pastText}
        onChange={(e) => handleEditText(e)}
        className="block p-2.5 w-full text-sm text-gray-dark border border-gray-300 focus:ring-blue-500   border-gray focus:ring-0 focus:border-blue rounded-md mb-3 mt-2"
      ></textarea>
      <input type="file" value={pastImg} onChange={(e) => handleEditFile(e)} />
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
          onClick={handleEditClick}
        >
          {loading ? "Loading..." : "Edit"}
        </button>
      </div>
    </div>
  );
};
export default EditPost;
