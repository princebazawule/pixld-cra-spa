import React, { createContext, useReducer, useState, useEffect } from "react"

export const ThemeContext = createContext()


const initialState = { 
    isDarkTheme: localStorage.getItem('dark') == null ? false : JSON.parse(localStorage.getItem('dark'))
}

const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHT_MODE":
        return { isDarkTheme: false }
        case "DARK_MODE":
        return { isDarkTheme: true }
        default:
        return state
    }
}

const ThemeContextProvider = (props) => {
    
    const [isDark, setIsDark] = useState(initialState.isDarkTheme)

    useEffect(() => {
        const storedTheme = localStorage.getItem('dark')
        const themeSwitch = document.querySelector('#slider')
        // console.log(themeSwitch)


        if(themeSwitch) {
            if(storedTheme !== null && storedTheme === 'true') {
                setIsDark(true)
                themeSwitch.checked = true

            } else {
                localStorage.setItem('dark', isDark)
                setIsDark(false)
                themeSwitch.checked = false
            }
        }
    }, [isDark])

    
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return ( 
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
     )
}
 
export default ThemeContextProvider;
