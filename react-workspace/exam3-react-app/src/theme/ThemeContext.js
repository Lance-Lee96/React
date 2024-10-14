import { createContext, useState } from "react";
export const ThemeContext = createContext()

export const ThemeProvider =({children}) => {

    const [isDarkMode, SetDarkMode] = useState(false)
    const toggleTheme = () =>{
        SetDarkMode(prevMode => !prevMode)
    }
    return(
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}
