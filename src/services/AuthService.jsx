import { Navigate, useLocation } from "react-router"
import { Fragment } from "react";
import { useSelector } from "react-redux";

export const AuthService = ({children}) => {
    const {state}=useLocation();
    const {isLoggedIn}=useSelector(state=>state.auth);
   
  return (
    <div>
        {
            isLoggedIn ? <Fragment>{children}</Fragment>:<Navigate to="/auth/login" state={state}/>
        }
    </div>
  )
}
