import { Avatar, Box, Button, Card, HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { followUser } from "../store/usersAction";

export const FollowerCard = ({user}) => {
    const dispatch=useDispatch();
    const borderGray=useColorModeValue('gray.100','gray.900');
  return (
    <VStack my="2">
        <HStack justifyContent="flex-start" w="100%" borderBottom="1px solid" borderColor={borderGray} pb="2">
            <Avatar src={user.userImage} alt={user.username}/>
            <Box>
                <Text>{user.userHandler}</Text>
            </Box>
        </HStack>
        <Button onClick={()=>dispatch(followUser(user))}>Follow</Button>
    </VStack>
  )
}