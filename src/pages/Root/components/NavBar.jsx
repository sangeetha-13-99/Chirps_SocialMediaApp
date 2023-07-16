import { Avatar, Box, Flex, HStack, Link, Text, VStack, useDisclosure } from "@chakra-ui/react"
import {  ActiveBookMark, ActiveExplore, ActiveHeart, ActiveHome, ActivePost, ActiveSearch, BookMark, Explore, Heart, Home, Post, Search } from "../../../utils/icons"
import { useSelector } from "react-redux"
import { Link as ReachLink } from "react-router-dom"
import { Overlay } from '../../../common/Overlay';
import { Search as SearchComponent } from '../../Home/components/Search';
import { PostOverlay } from "../../../common/PostOverlay";
import { useState } from "react";

export const NavBar = () => {
    const [active,setActive]=useState('home');
    const {user}=useSelector((state)=>state.auth);
    const {isOpen,onClose,onOpen}=useDisclosure();
    const {isOpen:isOpenPostModal,onClose:onClosePostModal,onOpen:onOpenPostModal}=useDisclosure();


  return (
    <Flex flexDirection={{base:"row",lg:"column"}} justifyContent="space-between" h="100%">
        <VStack flexDirection={{base:"row",lg:"column"}} justifyContent="space-between" alignItems="center" w="100%">
            <Link as={ReachLink}  to="/" onClick={()=>setActive('home')} _hover={{textDecoration:"none"}} display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%">
                {active!=="home"?<Home className="icon"  style={{"scale":"2"}} />:<ActiveHome className="icon"  style={{"scale":"2"}} />}
                <Text display={{lg:"inherit",base:"none"}}>Home</Text>
            </Link>
            <Link as={ReachLink} to="/explore" onClick={()=>setActive('explore')} _hover={{textDecoration:"none"}} display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%">
                {active!=="explore"?<Explore className="icon"  style={{"scale":"2"}} />:<ActiveExplore  className="icon"  style={{"scale":"2"}} />}
                <Text display={{lg:"inherit",base:"none"}}>Explore</Text>
            </Link>
            <Box display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%" cursor="pointer" onClick={()=>{onOpenPostModal();
                setActive('post');
            }}>
                {active!=="post"? <Post className="icon" style={{"scale":" 1.5 1.5"}} />:<ActivePost className="icon" style={{"scale":" 1.5 1.5"}} />}
                <Text display={{lg:"inherit",base:"none"}}>Post</Text>
            </Box>
            <Box display={{ base:"inline-flex",lg:"none"}} alignItems="center" gap="4" p="1rem" w="100%" onClick={()=>{onOpen();
                setActive('search');
            }}>
                {active!=="search"? <Search className="icon"  style={{"scale":"2"}} />:<ActiveSearch  className="icon"  style={{"scale":"2"}}/>}
                <Text display={{lg:"inherit",base:"none"}}>Search</Text>
            </Box>
            <Link as={ReachLink} to="/bookmark" onClick={()=>setActive('bookmark')} _hover={{textDecoration:"none"}} display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%">
                {active!=="bookmark"? <BookMark className="icon" style={{"scale":" 1.4 1.4"}} />:<ActiveBookMark className="icon" style={{"scale":" 1.4 1.4"}}/>}
                <Text display={{lg:"inherit",base:"none"}}>BookMark</Text>
            </Link>
            <Link as={ReachLink} to="/liked" onClick={()=>setActive('liked')} _hover={{textDecoration:"none"}} display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%">
                {active!=="liked" ?<Heart className="icon"  style={{"scale":" 1.4 1.4"}} />:<ActiveHeart className="icon"  style={{"scale":" 1.4 1.4"}} />}
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
