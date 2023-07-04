import { addBookMarkUsersService, followUserUserService, getAllUsersUsersService, removeBookmarkUsersService, unfollowUserUserService } from "../apiServices/usersService";
import { loaderActions } from "./loaderSlice";
import { usersSliceActions } from "./usersSlice";
import { getToken } from '../utils/tokenVerify';
import { toast } from "react-toastify";
import { setAllUsersActivityPosts } from "./postActions";
import { authActions } from "./authSlice";

const setAllUsersData=()=>{
    return async(dispatch)=>{
        try{
            dispatch(loaderActions.setLoading({loading:true}))
            const {data:{users}}=await getAllUsersUsersService(); 
            console.log(users,"useraction") 
            dispatch(usersSliceActions.setAllUsers({users}));
            dispatch(setAllUsersActivityPosts());
        }
        catch(error){
            console.log(error)
        }
        finally{
            dispatch(loaderActions.setLoading({loading:false}));
        }
    }
}

const followUser=(userfollower)=>{
    return async(dispatch)=>{
        const token=getToken();
        try{
            dispatch(loaderActions.setLoading({loading:true}));
            await followUserUserService(userfollower._id,token);
            dispatch(setAllUsersData());
            toast.info(`following @${userfollower.userHandler}`);
        }
        catch(error){
            toast.error(`unable to follow @${userfollower.userHandler}`)
        }
        finally{
            dispatch(loaderActions.setLoading({loading:false}));
        }
    }
}


const UnfollowUser=(userUnfollower)=>{
    return async(dispatch)=>{
        const token=getToken();
        try{
            dispatch(loaderActions.setLoading({loading:true}));
            console.log(userUnfollower._id,"unfollowe") 
            await unfollowUserUserService(userUnfollower._id,token);
            dispatch(setAllUsersData());
            toast.info(`unfollowing @${userUnfollower.userHandler}`);
        }
        catch(error){
            toast.error(`unable to unfollow @${userUnfollower.userHandler}`)
        }
        finally{
            dispatch(loaderActions.setLoading({loading:false}));
        }
    }
}

const addBookmarkPost=(post)=>{
    return async(dispatch)=>{
        const token=getToken();
        try{
            dispatch(loaderActions.setLoading({loading:true}));
            console.log(post._id,"unfollowe") 
            await addBookMarkUsersService(post._id,token);
            dispatch(setAllUsersData());
        }
        catch(error){
            toast.error(`unable to bookmark`)
        }
        finally{
            dispatch(loaderActions.setLoading({loading:false}));
        }
    }
}

const removeBookmarkPost=(post)=>{
    return async(dispatch)=>{
        const token=getToken();
        try{
            dispatch(loaderActions.setLoading({loading:true}));
            console.log(post._id,"unfollowe") 
            await removeBookmarkUsersService(post._id,token);
            dispatch(setAllUsersData());
        }
        catch(error){
            toast.error(`unable to bookmark`)
        }
        finally{
            dispatch(loaderActions.setLoading({loading:false}));
        }
    }
}

 

 
export {
    setAllUsersData,
    followUser,
    UnfollowUser,
    addBookmarkPost,
    removeBookmarkPost
}