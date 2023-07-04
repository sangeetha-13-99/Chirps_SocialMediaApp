const CLOUDINARY_URL_IMAGE = "https://api.cloudinary.com/v1_1/chirpssocialmediaapp/image/upload";
const CLOUDINARY_URL_VIDEO = "https://api.cloudinary.com/v1_1/chirpssocialmediaapp/video/upload";
const CLOUDINARY_UPLOAD_PRESET = "chirps_social_media_app";

export const uploadFile = async(file) => {
    console.log(file,file.type.split('/')[0],"upload")
  const fileData = file;
  const formData = new FormData();
    formData.append("file", fileData);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "social-media");

    const options={
        method:'POST',
        body:formData 
    }
    if(file.type.split('/')[0]==="image"){
        return await fetch(CLOUDINARY_URL_IMAGE,options)
        .then(res=>res.json()).
        then(res=>res).
        catch(()=>new Error('unable to upload Image'));
    }
    else{
        return await fetch(CLOUDINARY_URL_VIDEO,options).
        then(res=>res.json()).
        then(res=>res).
        catch(()=>new Error('unable to upload Video'));
    }
};