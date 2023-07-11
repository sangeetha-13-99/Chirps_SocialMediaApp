import { Box } from "@chakra-ui/react"
// import { useSelector } from "react-redux"
import { NewPost } from "./components/NewPost"
import { Filter } from "./components/Filter";
import { HomePosts } from "./components/HomePosts";


export const HomePage = () => {

  return (
    <Box >
      <NewPost isOverlay={false}/>
      <Filter/>
      <HomePosts/>
    </Box>
  )
}
