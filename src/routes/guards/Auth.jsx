import { Navigate } from "react-router-dom";

type PropAuth= {
  children: any;
}

const Auth = ({ children }: PropAuth) => {
  const isAuthenticated = true;
      
  if (isAuthenticated ) {
    return children
  }
    
  return <Navigate to="login" />
}

export default Auth