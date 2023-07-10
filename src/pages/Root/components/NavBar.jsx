import { Avatar, Box, Flex, HStack, Link, Text, VStack, useDisclosure } from "@chakra-ui/react"
import {  BookMark, Explore, Heart, Home, Post, Search } from "../../../utils/icons"
import { useSelector } from "react-redux"
import { Link as ReachLink } from "react-router-dom"
import { Overlay } from '../../../common/Overlay';
import { Search as SearchComponent } from '../../Home/components/Search';
import { PostOverlay } from "../../../common/PostOverlay";
// import { NewPost } from "../../Home/components/NewPost";

export const NavBar = () => {
    const {user}=useSelector((state)=>state.auth);
    const {isOpen,onClose,onOpen}=useDisclosure();
    const {isOpen:isOpenPostModal,onClose:onClosePostModal,onOpen:onOpenPostModal}=useDisclosure();


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
            <Box display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%" cursor="pointer" onClick={onOpenPostModal}>
                <Post className="icon" style={{"scale":" 1.5 1.5"}} />
                <Text display={{lg:"inherit",base:"none"}}>Post</Text>
            </Box>
            <Box display={{ base:"inline-flex",lg:"none"}} alignItems="center" gap="4" p="1rem" w="100%" onClick={onOpen}>
                <Search className="icon"  style={{"scale":"2"}} />
                <Text display={{lg:"inherit",base:"none"}}>Search</Text>
            </Box>
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
        <Overlay open={isOpen} close={onClose}>
            <SearchComponent/>
        </Overlay>
        <Overlay open={isOpenPostModal} close={onClosePostModal}>
          <PostOverlay close={onClosePostModal}/>
        </Overlay>
    </Flex>
  )
}
