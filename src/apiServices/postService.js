import axios from "axios";

const getAllPostsPostService = () => axios.get("/api/posts");

// const getPagedPostsFromServer = (pageNum) =>
//   axios.get(`/api/posts/page/${pageNum}`);

const getAllUsersPostsPostService = (username) =>
  axios.get(`/api/posts/user/${username}`);

const addPostPostService = (postData, authorization) =>
  axios.post("/api/posts", { postData }, { headers: { authorization } });

const editPostPostService = (postData, authorization) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    { headers: { authorization } }
  );

const deletePostPostService = (postId, authorization) =>
  axios.delete(`/api/posts/${postId}`, { headers: { authorization } });

const likePostPostService = (postId, authorization) =>
  axios.post(`/api/posts/like/${postId}`, {}, { headers: { authorization } });

const dislikePostPostService = (postId, authorization) => {
  return axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization },
    }
  );
};

export {
    getAllPostsPostService,
    getAllUsersPostsPostService,
    addPostPostService,
    editPostPostService,
    deletePostPostService,
    likePostPostService,
    dislikePostPostService,
};