import { Avatar, Box, Flex, HStack, Link, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import {  BookMark, Explore, Heart, Home, Post, Search } from "../../../utils/icons"
import { useSelector } from "react-redux"
import { Link as ReachLink, useLocation } from "react-router-dom"

export const NavBar = () => {
    const {user}=useSelector((state)=>state.auth);
   const {pathname}=useLocation();
//     console.log(pathname,"nab")
  return (
    <Flex flexDirection={{base:"row",lg:"column"}} justifyContent="space-between" h="100%">
        <VStack flexDirection={{base:"row",lg:"column"}} justifyContent="space-between" alignItems="center" w="100%">
            <Link as={ReachLink}  to="/" display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%">
                <Home className="icon"  style={{"scale":"2"}} />
                <Text display={{lg:"inherit",base:"none"}}>Home</Text>
            </Link>
            <Link as={ReachLink} to="/explore" display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%">
                <Explore className="icon"  style={{"scale":"2"}} />
                <Text display={{lg:"inherit",base:"none"}}>Explore</Text>
            </Link>
            <Link as={ReachLink}  display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%">
                <Post className="icon" style={{"scale":" 1.5 1.5"}} />
                <Text display={{lg:"inherit",base:"none"}}>Post</Text>
            </Link>
            <Link as={ReachLink}   display={{ base:"inline-flex",lg:"none"}} alignItems="center" gap="4" p="1rem" w="100%">
                <Search className="icon"  style={{"scale":"2"}} />
                <Text display={{lg:"inherit",base:"none"}}>Search</Text>
            </Link>
            <Link as={ReachLink} to="/bookmark" display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%">
                <BookMark className="icon" style={{"scale":" 1.4 1.4"}} />
                <Text display={{lg:"inherit",base:"none"}}>BookMark</Text>
            </Link>
            <Link as={ReachLink} to="/liked" display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%">
                <Heart className="icon"  style={{"scale":" 1.4 1.4"}} />
                <Text display={{lg:"inherit",base:"none"}}>Liked</Text>
            </Link>
        </VStack>
        <HStack display={{lg:"flex",base:"none"}} alignSelf="flex-end" as={ReachLink} to={`/profile/${user._id}`}>
                <Avatar src={user.userImage}/>
                <Box>
                    <Text>{user.userHandler}</Text>
                    {/* <Text color={gray}>{user.createdAt.slice(0,10)}</Text> */}
                </Box>
        </HStack>
     
    </Flex>
  )
}
