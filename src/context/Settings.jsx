import { createContext} from "react";
export const SettingsContext=createContext();
const SettingsProvider=({props})=>{
    return(
        <SettingsProvider.Provider value=''>
          {props.children}
        </SettingsProvider.Provider>
    )
}
export default SettingsProvider;
