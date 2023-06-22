import { Box, Grid, GridItem, Heading, Image,Text } from '@chakra-ui/react'
import { Outlet } from 'react-router'

import loginSideImage from "../assets/auth.png"


export const Auth = () => {
  return (
    <Grid templateColumns={{md:'repeat(2, 1fr)',base:'1fr'}} gap="1rem" h="100vh" bgGradient='linear(to-r, red.100, white)'>
        <GridItem display={{base:'none',md:"block"}} >
            <Box h="100%">
                <Image src={loginSideImage} h="100%" w={{md:'90%', base:"15rem"}} alt='login ' />
            </Box>
        </GridItem>
        <GridItem flexDirection="column" justifyContent="space-around" alignContent="space-around" display="flex" p="1rem">
            <Box lineHeight="3rem">
              <Text><Text as="span" bg="red.500" p="2" fontWeight="bold" color="white">Follow</Text> People Around the Globe🌍</Text>
              <Text><Text as="span" bg="red.500" p="2" fontWeight="bold" color="white">Connect</Text> WITH YOUR 🤙🏼FRIENDS</Text>
              <Text><Text as="span" bg="red.500" p="2" fontWeight="bold" color="white">Share</Text> WHAT YOU THINKING 🤔</Text>
            </Box>
            <Outlet/>
        </GridItem>
        
    </Grid>
  )
}
