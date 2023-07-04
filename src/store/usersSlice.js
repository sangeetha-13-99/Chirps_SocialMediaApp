import { createSlice } from "@reduxjs/toolkit";


export const usersSlice=createSlice({
    name:'user',
    initialState:{
        isLoading:false,
        Allusers:[],
    },
    reducers:{
        setAllUsers:(state,action)=>{
          state.Allusers=action.payload.users;
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload.loading;
        }
    }
})


export const usersSliceActions=usersSlice.actions;
