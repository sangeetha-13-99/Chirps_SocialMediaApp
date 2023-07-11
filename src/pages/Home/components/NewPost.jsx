import { Avatar, Box, Button, Card, CardBody, CardFooter, Flex, FormControl, FormLabel, HStack, Image, Input, Textarea, VStack } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { Close, Image as ImageIcon } from "../../../utils/icons"
import { useRef, useState } from "react"
import {uploadFile} from "../../../utils/uploadFile"
import { createNewPost } from "../../../store/postActions"
import { fileUploadHandler } from "../../../utils/fileUpload"
// import { useEffect } from "react"


export const NewPost = () => {
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.auth);
  const fileInputRef=useRef(null);
  const [value,setValue]=useState({
    text:"",
    mediaUrl:"",
    url:""
  });

  const uploadFileHandler=(e)=>{
    const isUploaded=fileUploadHandler(e);
    if(isUploaded){
      const file=e.target.files[0]
      setValue(prev=>({...prev,mediaUrl:file,url:URL.createObjectURL(file)}));
    }
    return;
  }

  const removeFileHandler=()=>{
    const fileInput=fileInputRef.current;
    fileInput.value="";
    setValue(prev=>({...prev,mediaUrl:"",url:""}));
  }


  const postSubmitHandler= async()=>{
      if(!value.text.trim() && !value.mediaUrl && !value.url){
        return 
      }
      else{
        if(value.mediaUrl){
          try{
            let {url}= await uploadFile(value.mediaUrl);
            dispatch(createNewPost({mediaUrl:url,content:value.text.trim()}));
            setValue({text:'',mediaUrl:"",url:""});
          }
          catch(error){
            toast.error('unable to upload file');
          }
        }
        else{
          dispatch(createNewPost({mediaUrl:"",content:value.text.trim()}));
          setValue({text:'',mediaUrl:"",url:""});
        }
      }
  }

  return (
        <Card borderRadius="none" p="4" boxShadow="md">
          <CardBody minH="20vh" p="0">
            <HStack alignItems="flex-start">
                <Avatar src={user.userImage}/>
                <VStack p="4" w="100%">
                  <Textarea resize="none" border="none"  outline="none"  mt="0" placeholder="Whats Happening ?" onChange={(e)=>setValue(prev=>({...prev,text:e.target.value}))} value={value.text} >
                  </Textarea>
                  {
                    (value.mediaUrl!=="") &&
                    <Box pos="relative">
                        {value.mediaUrl.type.split("/")[0]==="image"? <Image src={value.url} alt="post media" w="200" h="200" />:value.mediaUrl.type.split("/")[0]==="video"?<video width="200" height="200" controls >
                        <source src={value.url} type={value.mediaUrl && value.mediaUrl.type}/>
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
