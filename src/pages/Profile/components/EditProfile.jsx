import { Avatar, Box, Button, Flex, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { editUser } from "../../../store/usersAction"
import { useDispatch } from "react-redux"
import {  avatarImage } from "./Avatars"



export const EditProfile = ({profile,close}) => {
    const dispatch=useDispatch();
    const [prof,setProf]=useState({
        firstName:"",
        lastName:"",
        userHandler:"",
        bio:"",
        link:"",
        userImage:""
    });



    const editProfileHandler=()=>{
        dispatch(editUser({...profile,...prof}));
        close();
    }

    useEffect(()=>{
        setProf({firstName:profile.firstName,lastName:profile.lastName,bio:profile.bio,link:profile.link,userHandler:profile.userHandler,userImage:profile.userImage});
    },[]);

  return (
    <Box>
        <HStack justifyContent="space-around" flexWrap="wrap">
            {
                avatarImage.map((image,index)=>{
                    return <Avatar key={index} src={image} size="lg" border="1px solid"  borderColor="red.400"  onClick={(e)=>setProf(prev=>({...prev,userImage:e.target.src}))} cursor="pointer" />
                })
            }
        </HStack>
        <Flex flexWrap="wrap" w="100%" justifyContent="space-between" gap="4">
            <FormControl w={{base:"100%",lg:"40%"}}>
                <FormLabel>First Name</FormLabel>
                <Input value={prof.firstName} onChange={(e)=>setProf(prev=>({...prev,firstName:e.target.value}))}/>
            </FormControl>
            <FormControl w={{base:"100%",lg:"40%"}}>
                <FormLabel>Last Name</FormLabel>
                <Input value={prof.lastName} onChange={(e)=>setProf(prev=>({...prev,lastName:e.target.value}))}/>
            </FormControl>
            <FormControl w={{base:"100%",lg:"40%"}}>
                <FormLabel>User Handler</FormLabel>
                <Input value={prof.userHandler} onChange={(e)=>setProf(prev=>({...prev,userHandler:e.target.value}))}/>
            </FormControl>
            <FormControl  w={{base:"100%",lg:"40%"}}>
                <FormLabel>Bio</FormLabel>
                <Input value={prof.bio} onChange={(e)=>setProf(prev=>({...prev,bio:e.target.value}))}/>
            </FormControl> 
            <FormControl  w="100%">
                <FormLabel>Website Link</FormLabel>
                <Input value={prof.link} onChange={(e)=>setProf(prev=>({...prev,link:e.target.value}))}/>
            </FormControl> 
        </Flex>
        <Button mt="4" onClick={editProfileHandler}>Edit</Button>
    </Box>
  )
}
