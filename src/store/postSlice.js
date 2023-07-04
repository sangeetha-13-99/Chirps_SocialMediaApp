import { createSlice } from "@reduxjs/toolkit";


export const postSlice=createSlice({
    name:'post',
    initialState:{
       posts:[],
       usersActivityPosts:[],
      //  userPosts:[],
       sortBy:"latest",
       loading:false
    
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
      }
    }
})




export const postSliceActions=postSlice.actions;
