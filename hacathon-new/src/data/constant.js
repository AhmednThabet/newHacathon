export const API_URLS = {
  SIGN_UP: "",
  SIGN_IN: "",
  GET_POSTS: "/post/list",
  ADD_POST: "/post/add",
  GET_POST_DETAILS: (id) => `/post/details/${id}`,
  DELETE_POST: (id) => `/post/delete/${id}`,
  EDIT_POST: (id) => `/post/update/${id}`,
};
