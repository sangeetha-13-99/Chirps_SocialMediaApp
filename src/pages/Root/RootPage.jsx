import {  Box, Grid, GridItem, VStack, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router"

import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { ScrollToTop } from "../../services/ScrollToTop";
import { useRef } from "react";


export const RootPage = () => {
  // const {user}=useSelector((state)=>state.auth);
  const mainContainer=useRef(null);

  // console.log(user,"user in rootpage")
  return (
    <Box h="100vh">
        <Grid h="100%" templateAreas={{lg:`"header header header"
                              "nav main side"
                              "footer footer footer"`,
                              base:`"header"
                              "main"
                              "footer"`}}
              gridTemplateRows='1fr 8fr 1fr'
              gridTemplateColumns={{lg:'1fr 4fr 2fr',base:'1fr'}}>
          <GridItem area={'header'} borderBottom="1px solid" borderBottomColor={useColorModeValue('gray.100','gray.700')} display="flex" justifyContent="space-between" alignItems="center" boxShadow="sm" p="2">
              <Header/>
          </GridItem>
          <GridItem area={'nav'}  pos={{lg:"inherit",base:"fixed"}} w={{base:"100%",lg:"unset"}} bottom="0" p={{base:"1rem"}} boxShadow="sm" borderRight="1px solid" borderRightColor={useColorModeValue('gray.100','gray.700')} >
              <NavBar/>      
          </GridItem>
          <GridItem area={'main'} boxShadow="sm" overflowY="auto" h="auto" ref={mainContainer}>
            <Outlet/> 
          </GridItem>
          <GridItem area={'side'}  position={{lg:'inherit',base:'fixed'}} boxShadow="sm" borderLeft="1px solid" borderLeftColor={useColorModeValue('gray.100','gray.700')} >
            <VStack h="100%" justifyContent="center" alignItems="center">
              <SideBar/>
            </VStack>
          </GridItem>
          <GridItem area={'footer'}>
            
          </GridItem>
        </Grid>
			<ScrollToTop mainContainerRef={mainContainer}/>
    </Box>
  )
}
