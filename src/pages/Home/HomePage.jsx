import { Box } from "@chakra-ui/react"
// import { useSelector } from "react-redux"
import { NewPost } from "./components/NewPost"
import { Filter } from "./components/Filter";
import { HomePosts } from "./components/HomePosts";


export const HomePage = () => {
  // const {user}=useSelector((state)=>state.auth);
  // console.log(user,"home")
  return (
    <Box >
      <NewPost isOverlay={false}/>
      <Filter/>
      <HomePosts/>
    </Box>
  )
}
