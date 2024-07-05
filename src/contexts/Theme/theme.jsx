import { createContext, useLayoutEffect, useState } from 'react'

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useLayoutEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    function toggleTheme() {
        return theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    function toggleLogoPath() {
        return theme === 'light' ? '/images/logo.png' : '/images/logo_dark.png'
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, toggleLogoPath }}>
            {children}
        </ThemeContext.Provider>
    )
}
