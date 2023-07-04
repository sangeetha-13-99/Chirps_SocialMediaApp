import { FormControl,Flex, Input, FormLabel, Heading, Box, Button, Link, Card, Text, Checkbox  } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router'
import { Link as ReachLink } from 'react-router-dom';
import {HidePasswordIcon,RightIcon,ShowPasswordIcon} from "../../../utils/icons"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";

// import { authActions } from '../store/authSlice';
import { loaderActions } from '../../../store/loaderSlice';
import { signUpService } from '../../../apiServices/authService';
// import { setToken } from '../utils/tokenVerify';


export const SignUp = () => {
    const {state} = useLocation();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [loginError,setLoginError]=useState(null);
    const [signUpFormData,setSignUpFormData]=useState(
        {
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            confirmpassword:'',
            checkbox:true,
        }
    )
    const [togglePassword,setTogglePassword]=useState({
        password:{type:'password',show:false},
        confirmPassword:{type:'password',show:false}
    });

    const showPasswordToggler= () => {
      setTogglePassword(prev=>{
        return {...prev,password:prev.password.show?{type:'password',show:false}:{type:'text',show:true}}
      })
    }
    const showConfirmPasswordToggler= () => {
        setTogglePassword(prev=>{
            return {...prev,confirmPassword:prev.confirmPassword.show?{type:'password',show:false}:{type:'text',show:true}}
          })
    }

    useEffect(()=>{
        const timer=setTimeout(() => {
            if(signUpFormData.password && signUpFormData.confirmpassword && signUpFormData.password!==signUpFormData.confirmpassword){
                setLoginError('confirm Password is not same as password field');
            }
            else{
                setLoginError(null);
            }
        }, 1000);
        return (()=>clearInterval(timer));
    },[signUpFormData.password,signUpFormData.confirmpassword]);

    const signUpFormHandler=async ()=>{
        const authData={
         firstName:signUpFormData.firstname,
         lastName:signUpFormData.lastname,
         username:signUpFormData.username,
         password:signUpFormData.password,
         confirmpassword:signUpFormData.confirmpassword,
         checkbox:signUpFormData.checkbox,
        }
        try{
          dispatch(loaderActions.setLoading(true));
            if(!authData.firstName|| !authData.lastName||!authData.username || !authData.password ||!authData.confirmpassword|| !authData.checkbox){
                throw ({response:{status:null,message:'Please Provide All Valid Details for signup'}});
            }
            if(authData.password !== authData.confirmpassword){
                throw ({response:{status:null,message:'confirm Password is not same as password field'}});
            }
            const data=await signUpService(authData);
            toast.success('SignUp Successful');
            return navigate('/auth/login',{state:state});
        }catch({response}){
            if(response.status===422){
              return navigate('/auth/login',{state:state});
            }
            else if(response.status){
                setLoginError(response.data.errors[0]);
            }
            else{
                setLoginError(response.message);
            }
            return;
          } finally{
            dispatch(loaderActions.setLoading(false));
          }
    }


  return (
        <Card boxShadow="md" borderRadius="md" p="8" borderLeft="2px solid" borderColor="red.400" >
            <Flex flexDirection="column" justifyContent="space-evenly" rowGap="4">
              <Heading fontFamily="heading" fontSize="3rem" color="red.400" fontWeight="bold">Sign Up</Heading>
              <Text textAlign="center" color="red.800">{loginError}</Text>
              <Flex flexWrap="wrap" rowGap="4" justifyContent="space-between" >
                <FormControl w="48%">
                  <FormLabel >First Name</FormLabel>
                  <Input variant='outline' type='email' placeholder='adasrsha' value={signUpFormData.firstname} onChange={(e)=>setSignUpFormData(prev=>({...prev,firstname:e.target.value}))}/>
                </FormControl> 
                <FormControl w="48%">
                  <FormLabel >Last Name</FormLabel>
                  <Input variant='outline' type='email' placeholder='balika' value={signUpFormData.lastname} onChange={(e)=>setSignUpFormData(prev=>({...prev,lastname:e.target.value}))}/>
                </FormControl> 
                <FormControl w="100%">
                  <FormLabel >User Name</FormLabel>
                  <Input variant='outline' type='email' placeholder='adarshbalika@gmail.com' value={signUpFormData.username} onChange={(e)=>setSignUpFormData(prev=>({...prev,username:e.target.value}))}/>
                </FormControl> 
                <FormControl pos="relative" w="48%">
                  <FormLabel>Password</FormLabel>
                  <Input variant='outline' type={togglePassword.password.type}  placeholder='xyz@123' value={signUpFormData.password} onChange={(e)=>setSignUpFormData(prev=>({...prev,password:e.target.value}))}/>
                    {togglePassword.password.show?
                    <ShowPasswordIcon onClick={showPasswordToggler} pos="absolute" top="60%" right="1rem" cursor="pointer" zIndex="1" color="red.400" />:
                    <HidePasswordIcon onClick={showPasswordToggler}  pos="absolute" top="60%" right="1rem" cursor="pointer" zIndex="1" color="red.400" />
                    }
                </FormControl>
                <FormControl pos="relative" w="48%">
                  <FormLabel>Confirm Password</FormLabel>
                  <Input variant='outline' type={togglePassword.confirmPassword.type}  placeholder='xyz@123' value={signUpFormData.confirmpassword} onChange={(e)=>setSignUpFormData(prev=>({...prev,confirmpassword:e.target.value}))}/>
                    {togglePassword.confirmPassword.show?
                    <ShowPasswordIcon onClick={showConfirmPasswordToggler} pos="absolute" top="60%" right="1rem" cursor="pointer" zIndex="1" color="red.400" />:
                    <HidePasswordIcon onClick={showConfirmPasswordToggler}  pos="absolute" top="60%" right="1rem" cursor="pointer" zIndex="1" color="red.400" />
                    }
                </FormControl>
                <Checkbox colorScheme='none' iconColor='red.400' borderColor="red.400" checked={signUpFormData.checkbox} onChange={(e)=>setSignUpFormData(prev=>({...prev,checkbox:e.target.checked}))}>I accept all Terms & Conditions</Checkbox>
                <Flex justifyContent="space-evenly" alignItems="center" w="100%">
                  <Button onClick={signUpFormHandler} >Sign Up</Button>
                </Flex>
              </Flex>
              <Link as={ReachLink} to="/auth/login" display="inline-flex" alignItems="center" justifyContent="center">
                <Box display="inline-block" fontSize="1rem">Already Have an Account</Box><RightIcon display="inline" h="6" w="8"/></Link>
            </Flex>
        </Card>
  )
}

