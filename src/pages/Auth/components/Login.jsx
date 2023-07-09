import { FormControl,Flex, Input, FormLabel, Heading, Box, Button, Link, Card, Text  } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router'
import { Link as ReachLink } from 'react-router-dom';
import {HidePasswordIcon,RightIcon,ShowPasswordIcon} from "../../../utils/icons"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";

import { authActions } from '../../../store/authSlice';
import { loaderActions } from '../../../store/loaderSlice';
import { loginService } from '../../../apiServices/authService';
import { setToken } from '../../../utils/tokenVerify';
import { setAllPostsData,setAllUsersActivityPosts } from '../../../store/postActions';
import { setAllUsersData } from '../../../store/usersAction';


export const Login = () => {
    const {state} = useLocation();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // const {isLoggedIn,user}=useSelector((state)=>state.auth);
    // const {isLoading}=useSelector((state)=>state.loader);
    const [togglePassword,setTogglePassword]=useState(false);
    const [loginError,setLoginError]=useState(null);

    const [data,setData]=useState({
      username:'',
      password:''
    });

    const loginHelper=async(username,password)=>{
      console.log(username,password)
      try {
        dispatch(loaderActions.setLoading(true));
        if (username.trim() === "" || password.trim() === "") {
          throw {response:{status:"",message:"Please Provide Valid login Details"}};
        }
        const 
          {data: { foundUser, encodedToken },status} = await loginService(username,password);

        console.log(data,"data");
        if (status === 200) {
          console.log(foundUser,encodedToken,"loggedIN")
          setToken(encodedToken);
          const {_id,firstName,lastName,username,userHandler,userImage,createdAt}=foundUser;
          dispatch(authActions.LoggedIn({_id,firstName,lastName,username,userHandler,userImage,createdAt}));
          dispatch(setAllUsersData());
          // dispatch(setAllPostsData());
          // ✨ usersdata is public  need to improve the app later
          toast.success('loggedIn Successful');
          return navigate(state!==null?state:"/");
        }
      } catch ({response}) {
        console.log(response)
        response.status===404 && toast.error('login Failed');
        response.status===404 ? 
          setLoginError("The email you entered is not Registered. create new account")
          : setLoginError(response.message);
          return;
      } finally{
        dispatch(loaderActions.setLoading(false));
      }
    }
  
    const loginFormHandler = () => {
      const username=data.username;
      const password=data.password;
      loginHelper(username,password);
    };
    
    const loginHandlerWithTestData=()=>{
      loginHelper('sangeetha@gmail.com','1234');
    }


  return (
        <Card boxShadow="md" borderRadius="md" p="8" borderLeft="2px solid" borderColor="red.400">
            <Flex flexDirection="column" justifyContent="space-evenly" rowGap="4">
              <Heading fontFamily="heading" fontSize="3rem" color="red.400" fontWeight="bold">Login</Heading>
              <Text>{loginError}</Text>
              <FormControl>
                <FormLabel >User Name</FormLabel>
                <Input variant='outline' type='email' placeholder='adarshbalika@gmail.com' value={data.username} onChange={(e)=>setData(prev=>({...prev,username:e.target.value}))}/>
              </FormControl> 
              <FormControl pos="relative">
                <FormLabel>Password</FormLabel>
                <Input variant='outline' type={!togglePassword?'text':'password'}  placeholder='xyz@123' value={data.password} onChange={(e)=>setData(prev=>({...prev,password:e.target.value}))}/>
                  {!togglePassword?
                  <ShowPasswordIcon onClick={()=>setTogglePassword(prev=>!prev)} pos="absolute" top="60%" right="1rem" cursor="pointer" zIndex="1" color="red.400" />:
                  <HidePasswordIcon onClick={()=>setTogglePassword(prev=>!prev)}  pos="absolute" top="60%" right="1rem" cursor="pointer" zIndex="1" color="red.400" />
                  }
              </FormControl> 
              <Flex justifyContent="space-evenly" alignItems="center">
                <Button onClick={loginFormHandler} >Login</Button>
                <Button onClick={loginHandlerWithTestData}>Login As Guest</Button>
              </Flex>
              <Link as={ReachLink} to="/auth/signup" display="inline-flex" alignItems="center" justifyContent="center">
                <Box display="inline-block" fontSize="1rem">Create New Account</Box><RightIcon display="inline" h="6" w="8"/></Link>
            </Flex>
           
        </Card>
  )
}
