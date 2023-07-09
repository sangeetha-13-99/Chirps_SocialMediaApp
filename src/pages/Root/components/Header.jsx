import { Avatar, Box, HStack, Image, Input, InputGroup, InputLeftElement, Slide, Text, VStack, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { Fragment, useState } from 'react'
import { Close, Expand,Logout, People,Search } from '../../../utils/icons'
import { useDispatch, useSelector } from 'react-redux';
import appImage from "../../../assets/appImage.png"
import appImageDark from "../../../assets/appImageDark.png"
import { authActions } from '../../../store/authSlice';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Overlay } from '../../../common/Overlay';
import { Search as SearchComponent } from '../../Home/components/Search';

export const Header = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [toggleSideBar,setToggleSideBar]=useState(false);
    const {user}=useSelector((state)=>state.auth);
    const {isOpen,onClose,onOpen}=useDisclosure();
    
    const logOutHandler=()=>{
      dispatch(authActions.LogOut());
    }

  return (
    <Fragment>
            <HStack>
              <Box alignSelf="center" display={{lg:'none',base:'block'}} px="4">
                  {!toggleSideBar?<Expand  w="6" h="6" color="red.400" onClick={()=>setToggleSideBar(true)}/>:<Close w="6" h="6" color="red.400" onClick={()=>setToggleSideBar(false)}/>}
              </Box>
              <Box alignSelf="center"  px="4">
                {useColorModeValue(
                  <Image src={appImage} w={{lg:"8rem",base:"6rem"}} alt='chirps' />,
                  <Image src={appImageDark} w={{lg:"8rem",base:"6rem"}} alt='chirps' />
                )}
              </Box>
            </HStack>
            <HStack display={{lg:'block',base:'none'}}>
                <InputGroup onClick={onOpen}>
                    <InputLeftElement pointerEvents='none'>
                    <Search className="icon" style={{"scale":" 1.4 1.4"}} />
                    </InputLeftElement>
                    <Input type='search' placeholder='search' readOnly cursor="pointer"  />
                </InputGroup>
            </HStack>
            <HStack>
                <Link px="8" to={`/profile/${user._id}`}>
                  <Avatar w={{base:'2.5rem',lg:"3rem"}} h={{base:'2.5rem',lg:"3rem"}} src={user.userImage} name={user.firstName}/>
                </Link>
                <Box px="8" display={{lg:'block',base:'none'}}>
                    <Logout className="icon" onClick={logOutHandler} display="inline-block" style={{"scale":"2"}} />
                </Box>
            </HStack>
            <Slide  direction='left' in={toggleSideBar} style={{ zIndex: 10 ,top:'10%'}}>
                <VStack display={{lg:'none',base:'block'}} className="customBg">
                    {/*  on click show followers on model */}
                    <Box display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%">
                        <People className="icon" display="inline-block" style={{"scale":" 1.4 1.4"}} />
                        <Text>who to Follow</Text>
                    </Box>
                    {/* on click log out */}
                    <Box display="inline-flex" alignItems="center" gap="4" p="1rem" w="100%"  onClick={logOutHandler} >
                        <Logout className="icon"style={{"scale":" 1.4 1.4"}} />
                        <Text>Logout</Text>
                    </Box>
                </VStack>
            </Slide>
            <Overlay open={isOpen} close={onClose}>
                <SearchComponent/>
            </Overlay>
    </Fragment>
  )
}
