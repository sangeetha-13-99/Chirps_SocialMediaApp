import { createSlice } from "@reduxjs/toolkit";


export const loaderSlice=createSlice({
    name:'loader',
    initialState:{
        isLoading:false
    },
    reducers:{
        setLoading(state,action){
            state.isLoading=action.payload.loading;
        },
    }
})


export const loaderActions=loaderSlice.actions;