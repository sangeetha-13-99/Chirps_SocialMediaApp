import { toast } from "react-toastify";

export const fileUploadHandler=(e)=>{
    const file=e.target.files[0]
    const size=Math.round(file.size/1048576);
    if(size>1){
      toast.warn('upload files less than 1 mb');
      return
    }else{
      if(file.type.split('/')[0]==="image" || file.type.split('/')[0]==="video" ){
        return true
      }
      else{
        
        toast.warn('upload Image or video files only');
        return false
      }
      
    }
  }