import { getAllUsersPostsPostService } from "../apiServices/postService";
import { loaderActions } from "./loaderSlice";
import { profileSliceActions } from "./profileSlice";

const setAllUsersPosts=(username)=>{
    return async(dispatch)=>{
        try{
           dispatch(loaderActions.setLoading({loading:true}))
            const {data:{posts}}=await getAllUsersPostsPostService(username);  
            dispatch(profileSliceActions.setProfilePosts({profilePosts:posts}));


        }
        catch(error){
            console.log(error)
        }
        finally{
            dispatch(loaderActions.setLoading({loading:false}))
        }
    }
}

export {
    setAllUsersPosts
}
