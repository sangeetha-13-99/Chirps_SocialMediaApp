import { VStack} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { PostCard } from "../../../common/PostCard"

export const HomePosts = () => {
    const {usersActivityPosts}=useSelector(state=>state.post);
    const usersHomePosts=usersActivityPosts.map((post)=>{
        return <PostCard key={post._id} post={post}/>
    })
  return (
    <VStack>
        {usersHomePosts}
    </VStack>
  )
}
