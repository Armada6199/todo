import { createContext} from "react";
export const LoginContext=createContext();
export  const LoginProvider=(props)=>{
<LoginContext.Provider value=''>
{props.children}
</LoginContext.Provider>
}
