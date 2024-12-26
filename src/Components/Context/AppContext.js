import { createContext } from "react";

import { doctors, specialityData } from "../../assets/assets";

export const AppContext = createContext();

const AppcontextProvider = (props) => {
    
    const value={
        doctors,
        specialityData
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppcontextProvider;