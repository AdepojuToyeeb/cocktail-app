import React, {useState, useContext, useEffect} from "react";
import { useCallback } from "react";

const url = 'https://www.thecocktaildb.cocm/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    return(
        <AppContext.Provider value= 'hello world'>
            {children}
        </AppContext.Provider>
    )
}

 export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export { AppContext, AppProvider}