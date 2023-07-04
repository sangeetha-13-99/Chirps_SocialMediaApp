import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./authSlice";
import { loaderSlice } from "./loaderSlice";
import { postSlice } from "./postSlice";
import { usersSlice } from "./usersSlice";
import { profileSlice } from "./profileSlice";

const store=configureStore({
    reducer:{auth:authSlice.reducer,loader:loaderSlice.reducer,post:postSlice.reducer,user:usersSlice.reducer,profile:profileSlice.reducer}
});

export default store ;