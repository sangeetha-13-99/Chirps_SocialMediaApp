import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, HStack, Text, VStack,Image, useColorModeValue, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverBody, AspectRatio, useDisclosure } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { ActiveBookMark, ActiveHeart, BookMark,Comment, Delete, Edit, Expand, Heart, Share } from "../utils/icons";
import { Link as ReachLink} from "react-router-dom";
import { deletePost, dislikePost, editPost, likePost } from "../store/postActions";
import { Fragment } from "react";
import { UnfollowUser, addBookmarkPost, followUser, removeBookmarkPost } from "../store/usersAction";
import { postSliceActions } from "../store/postSlice";
import { Overlay } from "./Overlay";
// import { NewPost } from "../pages/Home/components/NewPost";
import { PostOverlay } from "./PostOverlay";


export const PostCard = ({post}) => {
  const dispatch=useDispatch();
  const {isOpen,onOpen,onClose}=useDisclosure();
  const {user}=useSelector(state=>state.auth)
  const {Allusers}=useSelector(state=>state.user);

  const currentUser=Allusers.find((cUser)=>cUser._id===user._id);
  const getPostUser=Allusers.find(user=>user.username===post.username);
  const gray=useColorModeValue('WhiteAlpha 900','gray.700');
  const borderGray=useColorModeValue('gray.100','gray.900');

  let renderPostMedia=""
  if(post.mediaUrl){
    if(['png','svg','jpg','jpeg','gif','webp','avif'].includes(post.mediaUrl.split(".").pop().toLowerCase())){
      renderPostMedia=<Image  objectFit="cover" maxW="100%" h="100%"  borderRadius="10px" src={post.mediaUrl} alt={post.content} />
    }
    else if(['mp3','mp4','webm','ogg'].includes(post.mediaUrl.split(".").pop().toLowerCase())){
      renderPostMedia=(<video controls style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"10px"}}>
      <source src={post.mediaUrl} />
      </video>)
    }
  }

  const isFollowing=getPostUser.followers.some((postUser)=>postUser._id===currentUser._id);
  const isLiked=post.likes.likedBy.some((likedUsers)=>likedUsers._id===currentUser._id);
  const isBookMarked=currentUser.bookmarks.some((bookmarkPostId)=>bookmarkPostId===post._id);
 
  return (
    <Fragment>
    <Overlay open={isOpen} close={onClose}>
      <PostOverlay close={onClose}/>
    </Overlay>
    <Card boxShadow="md" my="2"  w="100%" borderRadius="10px" bg={gray} border="1px solid" borderColor={borderGray} pos="relative">
      <VStack  w="100%">
            <CardHeader alignSelf="start" w="100%">
                <HStack w="100%" justifyContent="space-between">
                    <HStack as={ReachLink} to={`/profile/${getPostUser._id}`} alignSelf="flex-end" >
                        <Avatar src={getPostUser.userImage}/>
                        <Box>
                            <Text fontWeight="bold">{getPostUser.userHandler}</Text>
                            <Text>{post.createdAt.slice(0,10)}</Text>
                        </Box>
                        {/* <Box>
                          <Text>{ new Date(post.createdAt).get}</Text>
                        </Box> */}
                    </HStack>
                    <Box alignSelf="center" px="4">
                      <Popover>
                        <PopoverTrigger>
                          <Expand  w="6" h="6" color="red.400" />
                        </PopoverTrigger>
                        <PopoverContent w="150px">
                          <PopoverCloseButton  w="6" h="6" color="red.400" bg="none"/>
                          <PopoverBody>
                            <VStack className="customBg">
                                {currentUser._id===getPostUser._id?
                                <Fragment>
                                  <Box className="post-popup" onClick={()=>{
                                    dispatch(postSliceActions.setCurrentEditPost({post}));
                                    onOpen();
                                  }}>
                                      <Edit className="icon" />
                                      <Text>Edit</Text>
                                  </Box>
                                  <Box className="post-popup" onClick={()=>dispatch(deletePost(post._id))}>
                                      <Delete className="icon"  />
                                      <Text>Delete</Text>
                                  </Box>
                                </Fragment>
                               :
                               <Fragment>
                                  {isFollowing?
                                  <Box className="post-popup" onClick={()=>dispatch(UnfollowUser(getPostUser))} >
                                      <Text>UnFollow</Text>
                                  </Box>
                                  :
                                  <Box className="post-popup" onClick={()=>dispatch(followUser(getPostUser))} >
                                      <Text>Follow</Text>
                                  </Box>}
                               </Fragment>
                               }
                            </VStack>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Box>
                </HStack>
            </CardHeader>
            <CardBody pt="0" pl="16" alignSelf="flex-start" w="100%" >
              <Box>
                {post.content}
              </Box>
              <Box pt="2" height={renderPostMedia && "300px"} w="100%">
                {renderPostMedia}
              </Box>
            </CardBody>
            <CardFooter w="100%" pt="0" pl="16">
              <HStack justifyContent="space-between"  w="100%" pt="4" borderTop="1px solid" borderColor={borderGray}>
                <Box display="inline-flex" alignItems="center">
                  <Box className="card-icon red" >
                    {!isLiked?<Heart className="icon" onClick={()=>dispatch(likePost(post._id))}/>:<ActiveHeart className="icon" onClick={()=>dispatch(dislikePost(post._id))} />}
                  </Box>
                  <Text>{post.likes.likeCount}</Text>
                </Box>
                <Box display="inline-flex" alignItems="center">
                  <Box className="card-icon ">
                    <Comment className="icon orange"/>
                  </Box>
                  <Text>{post.comments.length}</Text>
                </Box>
                <Box className="card-icon blue">
                  {!isBookMarked?
                  <BookMark className="icon" onClick={()=>dispatch(addBookmarkPost(post))}/>:
                  <ActiveBookMark  className="icon"  onClick={()=>dispatch(removeBookmarkPost(post))}/>}
                </Box>
                <Box className="card-icon green">
                  <Share className="icon "/>
                </Box>
              </HStack>
            </CardFooter>
        </VStack>
    </Card>
    </Fragment>
  )
}
