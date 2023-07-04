import axios from "axios";

const getAllUsersUsersService = () => axios.get("/api/users");

const getUserUsersService = (username) => axios.get(`/api/users/${username}`);

const followUserUserService = (followUserId, authorization) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization } }
  );
};

const unfollowUserUserService = (followUserId, authorization) =>
  axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization } }
  );

const editUserUsersService = (userData, authorization) =>
  axios.post(
    "/api/users/edit",
    { userData },
    {
      headers: { authorization },
    }
  );
const addBookMarkUsersService = (postId, authorization) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization },
    }
  );

const removeBookmarkUsersService = (postId, authorization) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization },
    }
  );


export { 
    getAllUsersUsersService,
    getUserUsersService,
    addBookMarkUsersService,
    editUserUsersService,
    removeBookmarkUsersService,
    followUserUserService,
    unfollowUserUserService
 };