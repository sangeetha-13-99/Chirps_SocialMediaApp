import { Box, Grid, GridItem, Image, useColorModeValue } from '@chakra-ui/react'
import { Outlet } from 'react-router'
import appImage from "./../../assets/appImage.png"
import appImageDark from "./../../assets/appImageDark.png"
import loginSideImage from "./../../assets/auth.png"


export const Auth = () => {
  // const image=useColorModeValue(appImage,appImageDark);
  return (
    <Grid templateColumns={{lg:'repeat(2, 1fr)',base:'1fr'}} gap="1rem"  h="100%">
        <GridItem display={{base:'none',lg:"block"}} >
            <Box h="100%">
                <Image src={loginSideImage} h="100%" w={{md:'90%', base:"15rem"}} alt='login ' />
            </Box>
        </GridItem>
        <GridItem flexDirection="column" justifyContent="space-evenly" alignContent="space-between" display="flex" p="1rem" overflowY="auto" >
            <Box alignSelf="center">
            {useColorModeValue(
              <Image src={appImage} w="15rem" alt='chirps' />,
              <Image src={appImageDark} w="15rem" alt='chirps' />
            )}
            </Box>
            <Outlet/>
        </GridItem>
    </Grid>
  )
}
