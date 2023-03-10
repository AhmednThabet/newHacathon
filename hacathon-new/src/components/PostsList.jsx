import React from "react";
import List from "./List";

import Header from "./Header";

const PostsList = () => {
  return (
    <div className="py-5 px-24">
      <Header />
      <List />
      {/* <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button> */}
    </div>
  );
};

export default PostsList;
