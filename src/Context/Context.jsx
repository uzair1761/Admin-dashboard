import { useReducer } from "react";
import { createContext } from "react"
import darkModeReducer from './Reducer.jsx'

const INITIAL_STATE ={
    darkMode:true,
}

export const darkMOde_context =createContext(INITIAL_STATE);
export const  DarkModeProvider=({children})=>{
    const [state,dispatch]=useReducer(darkModeReducer,INITIAL_STATE);
    return(
        <darkMOde_context.Provider value={{darkMode:state.darkMode ,dispatch}}>
            {children}
            </darkMOde_context.Provider>
    )
}
