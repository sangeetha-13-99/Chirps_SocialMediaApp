import { createSlice } from "@reduxjs/toolkit";


export const profileSlice=createSlice({
    name:'profile',
    initialState:{
        isLoading:false,
        profilePosts:[],
        profile:{}
    },
    reducers:{
        setProfile:(state,action)=>{
          state.profile=action.payload.profile;
        },
        setProfilePosts:(state,action)=>{
            state.profilePosts=action.payload.profilePosts;
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload.loading;
        }
    }
})


export const profileSliceActions=profileSlice.actions;