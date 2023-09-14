import { createContext} from "react";
export const LoginContext=createContext();
const LoginProvider=(props)=>{
return(
<LoginContext.Provider value='dfds'>
{props.children}
</LoginContext.Provider>
    )
}
export default LoginProvider;

