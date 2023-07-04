import { Box,Text } from "@chakra-ui/react";
import { useSelector } from "react-redux"
import { PostCard } from "../../common/PostCard";
import { Fragment } from "react";

export const LikedPage = () => {
  const {posts}=useSelector(state=>state.post);
  const {user}=useSelector(state=>state.auth);
  const userLikedPosts=posts.filter((post)=>{
    if(post.likes.likedBy.find((cUser)=>cUser._id===user._id)){
      return true;
    }
    return false;
  })
  const likedPosts=userLikedPosts.map((post)=>{
    return <PostCard key={post._id} post={post}/>
  })
  return (
    <Fragment>
      {likedPosts.length>0?
        <Box>
          {likedPosts}
        </Box>
        :
        <Box textAlign="center">
          <Text fontFamily="heading" fontSize="3rem">No Liked Posts</Text>
        </Box>
      }
    </Fragment>
  )
}