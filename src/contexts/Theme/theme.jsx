import { createContext, useLayoutEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../../lib/theme'
import { ThemeProvider } from 'styled-components'

export const ThemeContext = createContext(null)
const logo = import.meta.env.BASE_URL + '/images/logo.png'
const logoDark = import.meta.env.BASE_URL + '/images/logo_dark.png'

export const UseThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useLayoutEffect(() => localStorage.setItem('theme', theme), [theme])

    function toggleTheme() {
        return theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    function toggleLogoPath() {
        return theme === 'light' ? logo : logoDark
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <ThemeContext.Provider
                value={{ theme, toggleTheme, toggleLogoPath }}
            >
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}
