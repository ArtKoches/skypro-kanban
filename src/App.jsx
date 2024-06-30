import './App.css'
import { useLayoutEffect, useState } from 'react'
import { Wrapper } from './Common.styled'
import { GlobalStyle } from './Global.styled'
import { darkTheme, lightTheme } from './lib/theme'
import { ThemeProvider } from 'styled-components'
import AppRoutes from './AppRoutes'

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [logo, setLogo] = useState(
        localStorage.getItem('logo') || '/images/logo.png',
    )

    useLayoutEffect(() => {
        localStorage.setItem('theme', theme)
        localStorage.setItem('logo', logo)
    }, [theme, logo])

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark')
            setLogo('/images/logo_dark.png')
        } else {
            setTheme('light')
            setLogo('/images/logo.png')
        }
    }

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Wrapper>
                    <AppRoutes logo={logo} toggleTheme={toggleTheme} />
                </Wrapper>
            </ThemeProvider>
        </>
    )
}

export default App
