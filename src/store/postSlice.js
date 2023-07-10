import { createSlice } from "@reduxjs/toolkit";


export const postSlice=createSlice({
    name:'post',
    initialState:{
       posts:[],
       usersActivityPosts:[],
       sortBy:"latest",
       loading:false,
       currentEditPost:null
    },
    reducers:{
      setAllPosts:(state,action)=>{
        state.posts=action.payload.posts
      },
      setUsersActivityPosts:(state,action)=>{
        state.usersActivityPosts=action.payload.posts;
      },
      // setUsersPost:(state,action)=>{
      //   state.userPosts=action.payload.posts
      // },
      setLoading:(state,action)=>{
        state.loading=action.payload.loading
      },
      setSortBy:(state,action)=>{
        state.sortBy=action.payload.sortBy
      },
      setCurrentEditPost:(state,action)=>{
        state.currentEditPost=action.payload.post
      }
    }
})




export const postSliceActions=postSlice.actions;
