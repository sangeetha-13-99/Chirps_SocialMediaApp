import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux"
import { PostCard } from "../../common/PostCard";

export const ExplorePage = () => {
  const {posts}=useSelector(state=>state.post);
  const ExplorePosts=posts.map((post)=>{
    return <PostCard key={post._id} post={post}/>
})
  return (
    <Box>
      {ExplorePosts}
    </Box>
  )
}
