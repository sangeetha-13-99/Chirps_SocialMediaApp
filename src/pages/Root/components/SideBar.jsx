import { Box, Card, Text, useColorModeValue } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { FollowerCard } from "../../../common/FollowerCard";

export const SideBar = () => {
    const {Allusers}=useSelector(state=>state.user);
    const {user}=useSelector(state=>state.auth);
  const gray=useColorModeValue('WhiteAlpha 900','gray.700');

    const unfollowedUsers=Allusers.filter((cUser)=>{
        const {followers}=cUser;
        if(cUser._id !==user._id && (!followers.some((fUser)=>fUser._id===user._id)||followers.length===0)){
            return true;
        }
        return false;
    });
  return (
    <Card textAlign="center" p="4" w="80%" maxH="90%" overflowY="auto" borderRadius="none" display={{lg:"block",base:"none"}} margin="0 auto" bg={gray}>
      <Text fontFamily="heading" fontSize="2rem" color="red.400">Who To Follow</Text>
      <Box>
        {
           unfollowedUsers.map((user)=>{
             return (<FollowerCard key={user._id} user={user}/>)
           }) 
        }
      </Box>
        
    </Card>
  )
}
