import React, { useContext } from "react"
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {

    const theme = useContext(ThemeContext)
    const isDarkTheme = theme.state.isDarkTheme

    const handleThemeSwitch = () => {
        if (isDarkTheme) {
            theme.dispatch({ type: "LIGHT_MODE" })
            localStorage.setItem('dark', false)
        } else {
            theme.dispatch({ type: "DARK_MODE" })
            localStorage.setItem('dark', true)
        }
    }

    return (
        <>
            <input id="switch-input" type="checkbox" onChange={handleThemeSwitch} className="switch-input" />
            <label htmlFor="switch-input" id="switch-label" className={`switch-label btn ${isDarkTheme ? "btn-dark" : "btn-light"}`}>
                <span className="slider round"></span>
                <div className="visually-hidden">switch input</div>
            </label>
        </>
    )
}
 
export default ThemeToggle;
