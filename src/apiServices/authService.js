import axios from "axios";

export const  loginService=async(username,password)=>{
    console.log(username,password,"sjhda")
    return await axios.post('/api/auth/login',{
        username,password
    });
}


export const  signUpService=async(authData)=>{
    return await axios.post('/api/auth/signup',{
        ...authData,
        bio:'',
        link:'',
        dateOfBirth:'',
        userHandler:"@"+authData.firstName+authData.lastName,
        userTheme:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687456655/backgrondTheme.avif",
        userImage:"https://res.cloudinary.com/chirpssocialmediaapp/image/upload/v1687212774/social-media/avatarteddy.jpg",
    });
}




