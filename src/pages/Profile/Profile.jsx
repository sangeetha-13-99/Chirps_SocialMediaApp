import { Avatar, AvatarBadge, Box, Card, CardBody, CardFooter, CardHeader, HStack, Link, Text, useDisclosure } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
// import { UserCard } from "../../common/UserCard";
import { Calendar, Camera, Edit } from "../../utils/icons";
import { useEffect } from "react";
import { setAllUsersPosts } from "../../store/profileActions";
import { PostCard } from "../../common/PostCard";
import { EditProfile } from "./components/EditProfile";
import { Overlay } from "../../common/Overlay";
// import { profileSliceActions } from "../../store/profileSlice";

export const Profile = () => {
  const dispatch=useDispatch();
  const {isOpen,onClose,onOpen}=useDisclosure();
  const {profileId}=useParams();
  const {Allusers}=useSelector(state=>state.user);
  const {user}=useSelector(state=>state.auth);
  const getCurrentUser=Allusers.find(cUser=>cUser._id===profileId);
  const {profilePosts}=useSelector(state=>state.profile);

  useEffect(()=>{
    dispatch(setAllUsersPosts(getCurrentUser.username));
    // dispatch(profileSliceActions.setProfile(getCurrentUser));
  },[getCurrentUser.username,getCurrentUser,dispatch]);

  return (
    <Box>
      <Card px="4">
        <CardHeader>
        <HStack justifyContent="space-between">
          <HStack justifyContent="flex-start" w="100%" pb="2">
            <Avatar src={getCurrentUser.userImage} alt={getCurrentUser.username} size="xl">
              {user._id===getCurrentUser._id && <AvatarBadge border="2px solid" borderColor="red.400" boxSize='1.5rem' right="0.5rem" bottom="0.5rem">
                <Camera className="icon" />
              </AvatarBadge>}
            </Avatar>
            <Box textAlign="left">
                <Text>{getCurrentUser.firstName+" "+getCurrentUser.lastName}</Text>
                <Text>{"@"+getCurrentUser.userHandler}</Text>
            </Box>
          </HStack>
          {user._id===getCurrentUser._id && <Edit className="icon" onClick={onOpen} />}
        </HStack>
        </CardHeader>
        <CardBody>
          <Box>
            <HStack justifyContent="space-between"  w="100%">
              <HStack w="100%">
                <Text fontWeight="bold">joined On</Text>
                <HStack>
                  <Calendar className="icon"/>
                  <Text>{getCurrentUser.createdAt.slice(0,10)}</Text>
                </HStack>
              </HStack>
              <HStack w="100%">
                <Text fontWeight="bold">Born</Text>
                <HStack>
                  <Calendar className="icon"/>
                  <Text>{getCurrentUser.dateOfBirth}</Text>
                </HStack>
              </HStack>
            </HStack>
            <Text>{getCurrentUser.bio}</Text>
            <Link href={getCurrentUser.link} isExternal>Website</Link>
          </Box>
        </CardBody>
        <CardFooter display="flex" justifyContent="space-between">
          <Text>{profilePosts.length} Posts</Text>
          <Text>{getCurrentUser.followers.length} Followers</Text>
          <Text>{getCurrentUser.following.length} Followers</Text>
        </CardFooter>
      </Card>
      <Overlay open={isOpen} close={onClose}>
        <EditProfile profile={getCurrentUser} close={onClose}/>
      </Overlay>
      <Box>
      {profilePosts.length>0 &&
        <Box>
          {profilePosts.map(post=>{
            return <PostCard key={post._id} post={post}/>
          })}
        </Box>
      }
      </Box> 
    </Box>
  )
}
