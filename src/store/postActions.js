import {getAllPostsPostService,getAllUsersPostsPostService,addPostPostService,deletePostPostService,editPostPostService,likePostPostService,dislikePostPostService,} from "./../apiServices/postService"
import { loaderActions } from "./loaderSlice";
import { postSliceActions } from "./postSlice";
import { getToken } from '../utils/tokenVerify';
import { toast } from "react-toastify";

const likePost=(postId)=>{
    return async(dispatch)=>{
        const token=getToken();
        try{
            dispatch(loaderActions.setLoading({loading:true}))
            const {data:{posts}}=await likePostPostService(postId,token);
            console.log(postId,"liked",posts)
            dispatch(postSliceActions.setAllPosts({posts}));
            dispatch(setAllUsersActivityPosts());
        }catch(error){
            toast.error(error.message);
        }finally{
            dispatch(loaderActions.setLoading({loading:false}))
        }
    } 
}

const dislikePost=(postId)=>{
    return async(dispatch)=>{
        const token=getToken();
        try{
            dispatch(loaderActions.setLoading({loading:true}))
            const {data:{posts}}=await dislikePostPostService(postId,token);
            console.log(postId,"disliked",posts)
            dispatch(postSliceActions.setAllPosts({posts}));
            dispatch(setAllUsersActivityPosts());
        }catch(error){
            toast.error(error.message);
        }finally{
            dispatch(loaderActions.setLoading({loading:false}))
        }
    } 
}

const editPost=(post)=>{
    return async(dispatch)=>{
        const token=getToken();
        try{
            dispatch(loaderActions.setLoading({loading:true}))
            const {data:{posts}}=await editPostPostService(post,token);
            console.log(post,"edited",posts)
            dispatch(postSliceActions.setAllPosts({posts}));
            dispatch(setAllUsersActivityPosts());
            toast.success('Post Edited Succesfully');
        }catch(error){
            toast.error('unable to Edit Post');
        }finally{
            dispatch(loaderActions.setLoading({loading:false}))
        }
    } 
}

const deletePost=(postId)=>{
    return async(dispatch)=>{
        const token=getToken();
        // console.log(postId,"deleted",token,await deletePostPostService(postId,token))
        try{
            dispatch(loaderActions.setLoading({loading:true}))
            const {data:{posts}}=await deletePostPostService(postId,token);
            dispatch(postSliceActions.setAllPosts({posts}));
            dispatch(setAllUsersActivityPosts());
            toast.success('Post Deleted Succesfully')
        }catch(error){
            toast.error('unable to Delete Post');
        }finally{
            dispatch(loaderActions.setLoading({loading:false}))
        }
    } 
}


const createNewPost=(post)=>{
    return async(dispatch)=>{
        const token=getToken();
        try{
            dispatch(loaderActions.setLoading({loading:true}))
            const {data:{posts}}=await addPostPostService(post,token);
            console.log(post,"craetedPosts",posts)
            dispatch(postSliceActions.setAllPosts({posts}));
            dispatch(setAllUsersActivityPosts());
            toast.success('Post Added')
        }catch(error){
            toast.error('unable to create Post')
        }finally{
            dispatch(loaderActions.setLoading({loading:false}))
        }
    } 
}

const setAllPostsData=()=>{
    return async(dispatch)=>{
        try{
            dispatch(loaderActions.setLoading({loading:true}))
            const {data:{posts}}=await getAllPostsPostService();  
            console.log(posts)
            dispatch(postSliceActions.setAllPosts({posts}));
        }
        catch(error){
            console.log(error)
        }
        finally{
            dispatch(loaderActions.setLoading({loading:false}))
        }
    }
}


const setAllUsersActivityPosts=()=>{
    return async(dispatch,getState)=>{

        const {username}=getState().auth.user;
        const {following}=getState().user.Allusers.find(({username:currUsername})=>currUsername===username);
        const {sortBy}=getState().post;

        console.log(username,following,getState().auth);

        try{
            dispatch(loaderActions.setLoading({loading:true}));

            const {data:{posts:usersPosts}}=await getAllUsersPostsPostService(username);
            
            const followersPosts=following.map(async(user)=>{
                const posts= await getAllUsersPostsPostService(user.username);  
                return posts
            });
            const AllFollwersPosts= await Promise.all(followersPosts);
            let AllPosts=[...usersPosts];
            AllFollwersPosts.map(({data:{posts}})=>{
                AllPosts=[...AllPosts,...posts]
            });
            dispatch(postSliceActions.setUsersActivityPosts({posts:AllPosts}));
            dispatch(setSortByAllUsersActivityPosts(sortBy));
        }
        catch(error){
            console.log(error)
        }
        finally{
            dispatch(loaderActions.setLoading({loading:false}));
        }
    }
}

const setSortByAllUsersActivityPosts=(sortBy)=>{
    console.log('sortBy')
    return (dispatch,getState)=>{
        const {usersActivityPosts}=getState().post;
        const usersPosts=[...usersActivityPosts];
        if(sortBy==="latest"){
            const latestusersActivityPosts=usersPosts.sort(({createdAt:postA},{createdAt:postB})=>{
                if(new Date(postA)> new Date(postB)){
                    return -1;
                }
                else if(new Date(postA)< new Date(postB)){
                    return 1;
                }
                else{
                    return 0;
                }
            });
           
            dispatch(postSliceActions.setUsersActivityPosts({posts:latestusersActivityPosts}));
        }
        else if(sortBy==="trending"){
            const trendingusersActivityPosts=usersPosts.sort((postA,postB)=>{
                console.log(postA.likes.likeCount,postA.comments.length,postB.likes.likeCount,postB.comments.length,"count")
                const postACount=Number(postA.likes.likeCount)+Number(postA.comments.length);
                const postBCount=Number(postB.likes.likeCount)+Number(postB.comments.length);
                if(postACount > postBCount){
                    return -1;
                }
                else if(postACount < postBCount){
                    return 1;
                }
                else{
                    return 0;
                }
            }); 
            console.log("trend",trendingusersActivityPosts);
            dispatch(postSliceActions.setUsersActivityPosts({posts:trendingusersActivityPosts}));
        }
        dispatch(postSliceActions.setSortBy({sortBy}));
    }
}

export {
    setAllPostsData,
    setAllUsersActivityPosts,
    setSortByAllUsersActivityPosts,
    createNewPost,
    editPost,
    deletePost,
    likePost,
    dislikePost
}
