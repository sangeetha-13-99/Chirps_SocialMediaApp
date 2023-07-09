import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router'
import { Overlay } from '../common/Overlay';

export const ScrollToTop = ({mainContainerRef}) => {
    const {pathname}=useLocation();
    console.log(pathname)
    useEffect(()=>{
        mainContainerRef.current.scrollTo(0, 0);
    },[pathname])

}
