import { Avatar, Box, HStack, Text ,Link} from "@chakra-ui/react";
import {Link as ReachLink} from "react-router-dom"

export const UserCard = ({user}) => {
  return (
    <ReachLink to={`/profile/${user._id}`} >
    <HStack justifyContent="flex-start" w="100%"  pb="2">
      <Avatar src={user.userImage} alt={user.username}/>
      <Box textAlign="left">
          <Text>{user.firstName+" "+user.lastName}</Text>
          <Text>{"@"+user.userHandler}</Text>
      </Box>
    </HStack>
    </ReachLink>
  )
}
