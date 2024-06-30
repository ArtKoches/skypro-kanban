import './App.css'
import { useState } from 'react'
import { Wrapper } from './Common.styled'
import { GlobalStyle } from './Global.styled'
import { darkTheme, lightTheme } from './lib/theme'
import { ThemeProvider } from 'styled-components'
import AppRoutes from './AppRoutes'

function App() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Wrapper>
                    <AppRoutes toggleTheme={toggleTheme} />
                </Wrapper>
            </ThemeProvider>
        </>
    )
}

export default App
