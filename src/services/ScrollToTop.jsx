import { useEffect } from 'react';
import { useLocation } from 'react-router'

export const ScrollToTop = ({mainContainerRef}) => {
    const {pathname}=useLocation();
    useEffect(()=>{
        mainContainerRef.current.scrollTo(0, 0);
    },[pathname])

}
