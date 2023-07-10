import { Avatar, FormControl, FormLabel, HStack, Input } from "@chakra-ui/react"
import avatar1 from "../../../assets/avatars/avatar-1.jpg"
import avatar2 from "../../../assets/avatars/avatar-2.png"
import avatar3 from "../../../assets/avatars/avatar-3.jpg"
import avatar4 from "../../../assets/avatars/avatar-4.png"
import avatar5 from "../../../assets/avatars/avatar-5.png"
import avatar6 from "../../../assets/avatars/avatar-6.png"
// import { Camera } from "../../../utils/icons"


export const  avatarImage=[avatar1,avatar2,avatar3,avatar4,avatar5,avatar6];

// export const Avatars = () => {
//     const fileInputRef=useRef(null);
//     // const [value,setValue]=useState({
//     //   text:"",
//     //   mediaUrl:"",
//     //   url:""
//     // });
//     // const uploadFileHandler=(e)=>{
//     //     const isUploaded=fileUploadHandler(e);
//     //     if(isUploaded){
//     //       const file=e.target.files[0]
//     //       setValue(prev=>({...prev,mediaUrl:file,url:URL.createObjectURL(file)}));
//     //     }
//     //     return;
//     // }

//   return (
//     <HStack justifyContent="space-around" flexWrap="wrap">
//         <HStack justifyContent="space-around" flexWrap="wrap">
//             {
//                 avatarImages.map((image,index)=>{
//                     return <Avatar key={index} src={image} size="lg" border="1px solid"  borderColor="red.400" onClick={}/>
//                 })
//             }
//         </HStack>
//         {/* <FormControl w="0" h="0" pos="relative">
//             <FormLabel display="inline" cursor="pointer">
//               <Camera className="icon"  style={{"scale":" 2 2"}} />
//             </FormLabel>
//             <Input ref={fileInputRef} type='file' w="0" h="0" accept="image/*, video/*" pos="absolute" border="none" onChange={uploadFileHandler} />
//         </FormControl> */}
//     </HStack>
//   )
// }
