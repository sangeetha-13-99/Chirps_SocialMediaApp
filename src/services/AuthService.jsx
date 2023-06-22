import { Navigate, useLocation } from "react-router"
import { isAuthenticated } from "../utils/tokenVerify"
import { Fragment } from "react";

export const AuthService = ({children}) => {
    const {state}=useLocation();
  return (
    <div>
        {
            isAuthenticated() ? <Fragment>{children}</Fragment>:<Navigate to="/auth/login" state={state}/>
        }
    </div>
  )
}
