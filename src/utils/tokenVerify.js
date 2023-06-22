export const isAuthenticated=()=>{
    const token=localStorage.getItem('token');
    if(token){
        return true;
    }
    return false;
}

export const getToken=()=>{
    const token=localStorage.getItem('token');
    return token;
}

export const setToken=(token)=>{
    localStorage.setItem('token',token);
}