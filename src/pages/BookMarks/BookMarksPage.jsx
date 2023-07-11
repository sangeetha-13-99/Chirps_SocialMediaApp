import { Box,Text } from "@chakra-ui/react";
import { useSelector } from "react-redux"
import { PostCard } from "../../common/PostCard";
import { Fragment } from "react";

export const BookMarksPage = () => {
  const {Allusers}=useSelector(state=>state.user);
  const {user}=useSelector(state=>state.auth);
  const {posts}=useSelector(state=>state.post)
  const getCurrentUser=Allusers.find((cUser)=>cUser._id===user._id);
  const getAllBookMarks=getCurrentUser.bookmarks;
  const bookMarksPost=posts.filter(post=>{
    if(getAllBookMarks.includes(post._id)){
      return true;
    }
    return false;
  });
  const renderBookMarkPost=bookMarksPost.map(post=>{
    return <PostCard key={post._id} post={post}/>
  })
  return (
    <Fragment>
      {renderBookMarkPost.length>0?
        <Box>
          {renderBookMarkPost}
        </Box>
        :
        <Box textAlign="center">
          <Text fontFamily="heading" fontSize="3rem">No BookMarks Post</Text>
        </Box>
      }
    </Fragment>
  )
}