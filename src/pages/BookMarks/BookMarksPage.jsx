import { Box,Text } from "@chakra-ui/react";
import { useSelector } from "react-redux"
import { PostCard } from "../../common/PostCard";
import { Fragment } from "react";

export const BookMarksPage = () => {
  const {Allusers}=useSelector(state=>state.user);
  const {user}=useSelector(state=>state.auth);
  const getCurrentUser=Allusers.find((cUser)=>cUser._id===user._id);
  const explorePosts=getCurrentUser.bookmarks.map((post)=>{
    return <PostCard key={post._id} post={post}/>
  })
  return (
    <Fragment>
      {explorePosts.length>0?
        <Box>
          {explorePosts}
        </Box>
        :
        <Box textAlign="center">
          <Text fontFamily="heading" fontSize="3rem">No BookMarks Post</Text>
        </Box>
      }
    </Fragment>
  )
}