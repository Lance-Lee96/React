import { createContext, useState } from "react";

//Context 생성하기
export const ThemeContext = createContext();

//ThemeProvider 컴포넌트
export const ThemeProvider =({children}) => {
    //라이트모드, 다크모드 -> true, false
    const [isDarkMode, SetDarkMode] = useState(false)

    //다크모드와 라이트모드를 전환하는 함수
    const toggleTheme = () =>{
        SetDarkMode(prevMode => !prevMode);
    }
    return(
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
