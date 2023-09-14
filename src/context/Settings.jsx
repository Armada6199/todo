import { createContext} from "react";
export const SettingsContext=createContext();
export  const SettingsProvider=(props)=>{
<SettingsProvider.Provider value=''>
{props.children}
</SettingsProvider.Provider>
}
