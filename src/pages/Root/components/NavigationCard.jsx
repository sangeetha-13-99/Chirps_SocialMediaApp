import {  Box, Card, HStack, Text, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router"
import { LeftIcon } from "../../../utils/icons";

export const NavigationCard = () => {
    const {pathname}=useLocation();
    const [path,setPath]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        console.log(pathname.split('/')[1]);
        const getPath=pathname.split('/')[1]||"Home";
        setPath(getPath);
    },[pathname]);

  return (
        <HStack p="4" zIndex="1" backdropBlur="2xl" bg={useColorModeValue('gray.100','gray.800')} top="0" pos="sticky" justifyContent={pathname.split('/')[1]?"space-between":"center"} boxShadow="sm" borderBottom="1px solid" borderBottomColor={useColorModeValue('gray.100','gray.700')}>
            {pathname.split('/')[1] && <HStack onClick={()=>navigate(-1)} cursor="pointer">
            <LeftIcon className="icon"/>
            <Text>Go Back</Text>
            </HStack>}
            <Text fontWeight="bold" >{path}</Text>
        </HStack>
  )
}
