import { FormControl,Flex, Image } from '@chakra-ui/react';
import { useLocation } from 'react-router'
import appImage from "../assets/appImage.png"

export const Login = () => {
    const {state} = useLocation();
  return (
        <div>
            <Flex>

                
            </Flex>
        
            <Image src={appImage} h="100%" w="14rem" alt='chirps' />
        </div>
  )
}
