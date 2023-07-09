import { Button, HStack, useColorModeValue } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { followUser } from "../store/usersAction";
import { UserCard } from "./UserCard";

export const FollowerCard = ({user}) => {
    const dispatch=useDispatch();
    const borderGray=useColorModeValue('gray.100','gray.900');
  return (
    <HStack my="2" justifyContent="space-between" borderRadius="10px">
        <UserCard user={user}/>
        <Button onClick={()=>dispatch(followUser(user))}>Follow</Button>
    </HStack>
  )
}