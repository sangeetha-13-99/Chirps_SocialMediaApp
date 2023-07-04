import { Avatar, Box, Button, Card, CardBody, CardFooter, Flex, FormControl, FormLabel, HStack, Image, Input, Textarea, VStack } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { Close, Image as ImageIcon } from "../../../utils/icons"
import { useRef, useState } from "react"
import {uploadFile} from "../../../utils/uploadFile"
import { createNewPost } from "../../../store/postActions"


export const NewPost = () => {
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.auth);
  const fileInputRef=useRef(null);
  const [value,setValue]=useState({
    text:'',
    mediaUrl:"",
  });

  const uploadFileHandler=(e)=>{
    const file=e.target.files[0]
    const size=Math.round(file.size/1048576);
    if(size>1){
      toast.warn('upload files less than 1 mb');
      return
    }else{
      if(file.type.split('/')[0]==="image" || file.type.split('/')[0]==="video" ){
        setValue(prev=>({...prev,mediaUrl:file}));
      }
      else{
        toast.warn('upload Image or video files only');
      }
      return ;
    }
  }

  const removeFileHandler=()=>{
    const fileInput=fileInputRef.current;
    fileInput.value="";
    setValue(prev=>({...prev,mediaUrl:""}));
  }
  const postSubmitHandler= async()=>{
    console.log(value,!value.text.trim() || !value.mediaUrl)
      if(!value.text.trim() && !value.mediaUrl){
        return 
      }
      else{
        if(value.mediaUrl){
          try{
            let {url}= await uploadFile(value.mediaUrl);
            dispatch(createNewPost({mediaUrl:url,content:value.text.trim()}));
            setValue({text:'',mediaUrl:""});
          }
          catch(error){
            toast.error('unable to upload file');
          }
        }
        else{
          dispatch(createNewPost({mediaUrl:"",content:value.text.trim()}));
          setValue({text:'',mediaUrl:""});
        }
      }
  }

  return (
        <Card borderRadius="none" p="4">
          <CardBody minH="20vh" p="0">
            <HStack alignItems="flex-start">
                <Avatar src={user.userImage}/>
                <VStack p="4">
                  <Textarea resize="none" border="none" outline="none"  mt="0" placeholder="Whats Happening ?" onChange={(e)=>setValue(prev=>({...prev,text:e.target.value}))} value={value.text} >
                  </Textarea>
                  {
                    (value.mediaUrl!=="") &&
                    <Box pos="relative">
                        {value.mediaUrl.type.split("/")[0]==="image"? <Image src={URL.createObjectURL(value.mediaUrl)} alt="post media" w="200" h="200" />:value.mediaUrl.type.split("/")[0]==="video"?<video width="200" height="200" controls >
                        <source src={URL.createObjectURL(value.mediaUrl)} type={value.mediaUrl.type}/>
                        </video>:''}
                        <Close cursor="pointer" color="red.400" borderColor="red.400" borderRadius="50%" border="1.5px solid" pos="absolute" top="4" right="4" onClick={removeFileHandler} />
                    </Box>
                  }
                </VStack>
            </HStack>
          </CardBody>
          <CardFooter borderTop="1px solid" pb="0">
            <Flex justifyContent="space-between" alignItems="center" w="100%">
                <FormControl w="0" h="0" pos="relative">
                    <FormLabel display="inline" cursor="pointer">
                      <ImageIcon className="icon"  style={{"scale":" 2 2"}} />
                    </FormLabel>
                    <Input ref={fileInputRef} type='file' w="0" h="0" accept="image/*, video/*" pos="absolute" border="none" onChange={uploadFileHandler} />
                </FormControl>
              <Button bg="red.400" color="white" onClick={postSubmitHandler}>Post</Button>
            </Flex>
          </CardFooter>
        </Card>
  )
}
