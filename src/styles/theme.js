import { extendTheme } from '@chakra-ui/react'
import { defineStyleConfig,createMultiStyleConfigHelpers } from '@chakra-ui/react'
// import { cardAnatomy } from '@chakra-ui/anatomy'


// const {definePartsStyle, defineMultiStyleConfig}=createMultiStyleConfigHelpers(cardAnatomy.keys);

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: (props) => ({
    "html, body": {
      bg: props.colorMode === "dark" ? "gray.800" : "whiteAlpha.500",
    },
    ".post-popup":{
      display:"inline-flex",
      alignItems:"center",
      gap:"4",
      py:"4",
      w:"100%",
      cursor:"pointer"
    },
    ".icon":{
      color:"red.400",
      display:"inline-block",
      cursor:"pointer"
    },
    ".card-icon":{
        borderRadius:"100%",
        cursor:"pointer",
        p:"2",
        ".icon":{
          display:"block"
        },
        _hover:{
          // opacity:"0.3",
          zIndex:0,
          ".icon":{
              color:'whiteAlpha.800'
          },
        },
    },
    ".card-icon.red":{
        _hover:{
         bg:'pink.400',
      }
    },
    ".card-icon.orange":{
      _hover:{
        bg:'orange.400'
      }
    },
    ".card-icon.green":{
      _hover:{
        bg:'green.400'
      }
    },
    ".card-icon.blue":{
      _hover:{
        bg:'blue.400'
      }
    },  
    ".customBg":{
      bg:props.colorMode === "dark" ? "gray.700" : "gray.100",
    },

    
  })
  
}

const fonts= {
  heading:'Tilt Prism, cursive',
  body:'Ysabeau SC, sans-serif',
  mono:'Ysabeau Infant, sans-serif',
}


const Button = defineStyleConfig({
 
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, 
      py: 3, 
    },
    md: {
      fontSize: 'md',
      px: 6, 
      py: 4,
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '1px solid',
      _hover:{
        bg:'red.400',
        border:'none',
        color:'white',
        _hover:{
          ".icon":{
            color:"white"
          }
        }
      },
      _focus:{
        border:'none',
        outline:'none',
      }
    },
    solid: {
      bg: 'red.400',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
})

const Input=defineStyleConfig({
  defaultProps: {
    focusBorderColor: 'red.400',
  },

})

// const CardBody=defineStyleConfig({
//   baseStyle: {
//     fontFamily:fonts.mono
//   }
// })
const Textarea=defineStyleConfig({
  defaultProps: {
    focusBorderColor:'none',
  }
})

const Link=defineStyleConfig({
  baseStyle: {
    _hover:{
      color:'red.400',
    }
  }
})

const theme = extendTheme({ 
  config,
  styles,
  fonts,
  components:{
    Button,
    Input,
    Link,
    Textarea,
    // CardBody
  }
 })

export default theme