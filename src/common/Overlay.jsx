import {
    Modal,
    ModalOverlay,
    ModalContent,
    // ModalHeader,
    // ModalFooter,
    ModalBody,
    // ModalCloseButton,
    // Button 
  }
  from '@chakra-ui/react'
import { Close } from '../utils/icons'
import { useEffect } from 'react'
import { useLocation } from 'react-router'

export const Overlay = ({open,close,children}) => {
  const {pathname}=useLocation();
  useEffect(()=>{
    close();
  },[pathname])

  return (
    <Modal isOpen={open} onClose={close} >
        <ModalOverlay />
        <ModalContent w={{lg:"100%",base:"80%"}}>
          <Close cursor="pointer" color="red.400" pos="absolute" top="4" right="4" onClick={close} />
          <ModalBody mt='6'>
            {children}
          </ModalBody>
        </ModalContent>
    </Modal>
  )
}
