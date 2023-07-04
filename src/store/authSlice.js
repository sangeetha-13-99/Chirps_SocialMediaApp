import { createSlice } from "@reduxjs/toolkit";


export const authSlice=createSlice({
    name:'auth',
    initialState:{
        isLoggedIn:false,
        user:{
            _id: "6a6b43f2-b6dd-47f2-ba43-625b6ee2a707",
            firstName: "Sangeetha",
            lastName: "Jula",
            username: "sangeetha@gmail.com",
            userHandler:"sangeethajula",
            userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg",
            // createdAt: formatDate(),
            // updatedAt: formatDate(),
          },
       
    },
    reducers:{
        LoggedIn:(state,action)=>{
            state.isLoggedIn=true;
            state.user=action.payload;
        },
        LogOut:(state)=>{
            state.isLoggedIn=false;
            state.user={};
        },
        setUser:(state,action)=>{
          state.user=action.payload.user
        }
    }
})


export const authActions=authSlice.actions;
